/**
 * Ô PAIN DORÉ — Avis laissés sur le site
 * ------------------------------------------------------------
 * À coller dans le Google Sheet « Avis Ô Pain Doré »
 * (Extensions → Apps Script), sur le compte Google de la boulangerie.
 *
 * - Chaque avis envoyé depuis le site devient une ligne de l'onglet « Avis ».
 * - Un email de notification est envoyé au compte Google de la boulangerie.
 * - Seuls les avis dont la case « Publier » est cochée s'affichent sur le site.
 * - L'email du client n'est jamais affiché sur le site.
 */

// true  = chaque avis attend votre validation (case à cocher) avant d'apparaître
// false = chaque avis apparaît tout de suite (vous pouvez le retirer en décochant)
const MODERATION = true;

const ONGLET = 'Avis';
const COLONNES = ['Date', 'Nom', 'Email', 'Note', 'Avis', 'Publier'];
const MOIS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
              'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

/** Reçoit un avis depuis le formulaire du site. */
function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false }); }
  if (d.botcheck) return json_({ ok: true }); // robot

  const nom = String(d.nom || '').trim().slice(0, 60);
  const email = String(d.email || '').trim().slice(0, 120);
  const texte = String(d.avis || '').trim().slice(0, 1000);
  const note = Math.max(1, Math.min(5, parseInt(d.note, 10) || 0));
  if (!nom || !texte || !d.note) return json_({ ok: false });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  const sh = onglet_();
  const date = new Date();
  sh.appendRow([date, nom, email, note, texte, !MODERATION]);
  sh.getRange(sh.getLastRow(), 6).insertCheckboxes().setValue(!MODERATION);
  lock.releaseLock();

  const url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  MailApp.sendEmail(
    Session.getEffectiveUser().getEmail(),
    `Nouvel avis ${note}/5 sur le site — ${nom}`,
    `${'★'.repeat(note)}${'☆'.repeat(5 - note)}\n\n« ${texte} »\n\nDe : ${nom} <${email}>\n\n` +
    (MODERATION
      ? `Pour le publier sur le site, cochez la case « Publier » :\n${url}`
      : `Il est déjà visible sur le site. Pour le retirer, décochez la case « Publier » :\n${url}`)
  );

  const avis = { nom: nomCourt_(nom), note: note, date: dateTexte_(date), texte: texte, source: 'Avis du site' };
  return json_({ ok: true, publie: !MODERATION, avis: MODERATION ? null : avis });
}

/** Renvoie au site la liste des avis cochés « Publier », du plus récent au plus ancien. */
function doGet() {
  const lignes = onglet_().getDataRange().getValues().slice(1);
  const avis = lignes
    .filter(l => l[5] === true && l[1] && l[4])
    .map(l => ({
      nom: nomCourt_(l[1]),
      note: Number(l[3]) || 5,
      date: dateTexte_(l[0]),
      texte: String(l[4]),
      source: 'Avis du site'
    }))
    .reverse();
  return json_({ avis: avis });
}

/* ── Outils ── */

function onglet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(ONGLET);
  if (!sh) {
    sh = ss.insertSheet(ONGLET);
    sh.appendRow(COLONNES);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, COLONNES.length).setFontWeight('bold');
    sh.setColumnWidth(5, 420);
  }
  return sh;
}

// « Sarra Ben Ali » → « Sarra B. »
function nomCourt_(nom) {
  const p = String(nom).trim().split(/\s+/);
  if (p.length < 2) return p[0];
  return `${p[0]} ${p[p.length - 1].charAt(0).toUpperCase()}.`;
}

function dateTexte_(d) {
  d = new Date(d);
  return isNaN(d) ? '' : `${MOIS[d.getMonth()]} ${d.getFullYear()}`;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
