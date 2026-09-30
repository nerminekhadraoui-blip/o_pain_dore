/* ============================================================
   Ô PAIN DORÉ — AFFICHAGE DES DONNÉES
   Construit la carte, les gâteaux, les avis et les infos
   de contact à partir de assets/js/config.js et data/*.js.
   Normalement, pas besoin de modifier ce fichier.
   ============================================================ */

(function () {
  const C = window.OPD_CONFIG || {};
  const PLACEHOLDER = "assets/img/marque/visuel-attente.svg";

  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const prix = (n) => Number(n).toFixed(3) + " DT";

  const ICON_TEL = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  const ICON_WA = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.25.69-1.44 1.32-1.99 1.36-.51.05-.99.24-3.33-.69-2.82-1.11-4.6-4-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87s.72-2.04.97-2.32c.25-.28.55-.35.74-.35l.53.01c.17.01.4-.06.62.48.25.6.83 2.07.9 2.22.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.26 1.64 2.04 1.13 1 2.08 1.31 2.37 1.46.29.15.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.15.49.22.56.34.07.12.07.69-.18 1.38z"/></svg>';

  const telHref = C.telephone ? `tel:${C.telephone}` : "#contact";
  const waLink = (msg) => C.whatsapp ? `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}` : "";

  window.OPD = { esc, prix, waLink, telHref };

  const imgTag = (src, alt) =>
    `<img src="${esc(src || PLACEHOLDER)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">`;

  /* ── Infos de contact partout dans la page ── */
  document.querySelectorAll("[data-tel]").forEach((a) => { a.href = telHref; });
  document.querySelectorAll("[data-tel-text]").forEach((el) => { el.textContent = C.telephoneAffiche || ""; });
  document.querySelectorAll("[data-instagram]").forEach((a) => { C.instagram ? (a.href = C.instagram) : a.remove(); });
  document.querySelectorAll("[data-facebook]").forEach((a) => { C.facebook ? (a.href = C.facebook) : a.remove(); });
  document.querySelectorAll("[data-tiktok]").forEach((a) => { C.tiktok ? (a.href = C.tiktok) : a.remove(); });
  document.querySelectorAll("[data-maps]").forEach((a) => { a.href = C.lienGoogleMaps || "#"; });
  document.querySelectorAll("[data-avis-google]").forEach((a) => { C.lienAvisGoogle ? (a.href = C.lienAvisGoogle) : a.remove(); });
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    C.whatsapp ? (a.href = waLink("Bonjour Ô Pain Doré ! ")) : a.remove();
  });
  document.querySelectorAll("[data-email]").forEach((li) => {
    if (!C.email) return li.remove();
    li.innerHTML = `<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>`;
  });
  const horaires = $("#horaires");
  if (horaires && C.horaires) {
    horaires.innerHTML = C.horaires.map((h) => `<li>${esc(h.jours)}</li><li class="highlight">${esc(h.heures)}</li>`).join("");
  }
  const annee = $("#annee");
  if (annee) annee.textContent = new Date().getFullYear();

  /* ── Bandeau Collection des Fêtes ── */
  const fetes = C.fetes || {};
  const hasFetes = fetes.active && (window.OPD_GATEAUX || []).some((g) => g.collection === "fetes" && g.disponible !== false);
  document.querySelectorAll("[data-fetes-only]").forEach((el) => { if (!hasFetes) el.remove(); });
  document.querySelectorAll("[data-fetes-titre]").forEach((el) => { el.textContent = `${fetes.titre || ""} ${fetes.annee || ""}`.trim(); });
  document.querySelectorAll("[data-fetes-message]").forEach((el) => { el.textContent = fetes.message || ""; });
  document.querySelectorAll("[data-fetes-limite]").forEach((el) => {
    if (!fetes.dateLimite) return el.closest(".fetes-limite")?.remove();
    el.textContent = fetes.dateLimite;
  });

  /* ── La carte ── */
  const tabs = $("#categoryTabs");
  if (tabs && window.OPD_CATEGORIES) {
    tabs.innerHTML = `<button class="tab-btn active" data-category="all">Tout</button>` +
      window.OPD_CATEGORIES.map((c) => `<button class="tab-btn" data-category="${esc(c.id)}">${esc(c.nom)}</button>`).join("");
  }
  const grid = $("#productsGrid");
  if (grid && window.OPD_PRODUITS) {
    grid.innerHTML = window.OPD_PRODUITS.filter((p) => p.disponible !== false).map((p) => `
      <article class="product-card reveal-up" data-category="${esc(p.categorie)}">
        <div class="product-img">
          ${imgTag(p.photo, p.nom)}
          ${p.badge ? `<div class="product-badge">${esc(p.badge)}</div>` : ""}
        </div>
        <div class="product-info">
          <h3>${esc(p.nom)}</h3>
          <p>${esc(p.description)}</p>
          ${p.prix ? `<span class="product-price">${prix(p.prix)}</span>` : `<span class="product-price product-price--boutique">Prix en boutique</span>`}
        </div>
      </article>`).join("");
  }

  /* ── Grands gâteaux ── */
  const gGrid = $("#gateauxGrid");
  const gateaux = (window.OPD_GATEAUX || []).filter((g) => g.disponible !== false);
  const collTabs = $("#collectionTabs");
  if (collTabs) {
    const opts = [];
    if (hasFetes) opts.push(["fetes", `✦ ${fetes.titre || "Fêtes"}`]);
    opts.push(["classiques", "Nos classiques"], ["all", "Tous les gâteaux"]);
    collTabs.innerHTML = opts.map(([id, label], i) =>
      `<button class="tab-btn${i === 0 ? " active" : ""}" data-collection="${id}">${esc(label)}</button>`).join("");
  }

  if (gGrid) {
    gGrid.innerHTML = gateaux.map((g, gi) => {
      const first = g.tailles[0] || { label: "", prix: 0 };
      const msg = `Bonjour Ô Pain Doré ! Je souhaite commander le gâteau « ${g.nom} » (${first.label}). Pour le : `;
      return `
      <article class="gateau-card reveal-up" data-collection="${esc(g.collection)}" data-nom="${esc(g.nom)}">
        <div class="gateau-img">
          ${imgTag(g.photo, g.nom)}
          ${g.badge ? `<div class="product-badge gateau-badge">${esc(g.badge)}</div>` : ""}
        </div>
        <div class="gateau-info">
          <h3>${esc(g.nom)}</h3>
          <p>${esc(g.description)}</p>
          <div class="gateau-sizes" role="radiogroup" aria-label="Choisir une taille pour ${esc(g.nom)}">
            ${g.tailles.map((t, ti) => `
              <button type="button" class="size-option${ti === 0 ? " selected" : ""}" role="radio" aria-checked="${ti === 0}"
                data-label="${esc(t.label)}" data-prix="${t.prix}">
                <span class="size-label">${esc(t.label)}</span>
                <span class="size-price">${t.prix ? prix(t.prix) : "Sur devis"}</span>
              </button>`).join("")}
          </div>
          <p class="gateau-delai">Sur commande · ${esc(g.delai || C.delaiCommandeParDefaut || "")}</p>
          <div class="gateau-actions">
            <a class="btn btn-primary btn-sm" href="${telHref}">${ICON_TEL} Appeler</a>
            ${C.whatsapp ? `<a class="btn btn-outline-light btn-sm js-wa" target="_blank" rel="noopener" href="${waLink(msg)}">${ICON_WA} WhatsApp</a>` : ""}
          </div>
        </div>
      </article>`;
    }).join("");
  }

  /* ── Note Google ── */
  document.querySelectorAll("[data-note-google]").forEach((el) => {
    if (!C.noteGoogle) return el.remove();
    const n = parseFloat(String(C.noteGoogle).replace(",", "."));
    const pct = Math.max(0, Math.min(100, (n / 5) * 100));
    el.innerHTML = `<span class="avis-summary-note">${esc(C.noteGoogle)}</span>
      <span class="avis-summary-stars" aria-label="${esc(C.noteGoogle)} sur 5"><span style="width:${pct}%">★★★★★</span>★★★★★</span>
      <span class="avis-summary-count">${C.nombreAvisGoogle ? esc(C.nombreAvisGoogle) + " avis " : ""}sur Google</span>`;
  });

  /* ── Avis ── */
  const avisCard = (a) => `
      <div class="avis-card">
        <div class="avis-stars" aria-label="${a.note} sur 5">${"★".repeat(a.note)}${"☆".repeat(5 - a.note)}</div>
        <p class="avis-text">« ${esc(a.texte)} »</p>
        <div class="avis-author">
          <div class="avis-avatar">${esc((a.nom || "?").charAt(0))}</div>
          <div>
            <strong>${esc(a.nom)}</strong>
            <span>${esc(a.date || "")}${a.source ? " · " + esc(a.source) : ""}</span>
          </div>
        </div>
      </div>`;
  window.OPD.avisCard = avisCard;

  const track = $("#avisTrack");
  if (track && window.OPD_AVIS) {
    track.innerHTML = window.OPD_AVIS.map(avisCard).join("");
  }

  // Avis laissés sur le site (Google Sheet de la boulangerie)
  if (track && C.avisSheetUrl) {
    fetch(C.avisSheetUrl)
      .then((res) => res.json())
      .then((json) => {
        const avis = (json && json.avis) || [];
        if (!avis.length) return;
        track.insertAdjacentHTML("afterbegin", avis.map(avisCard).join(""));
        document.dispatchEvent(new Event("opd:avis"));
      })
      .catch(() => { /* en cas d'erreur, on garde les avis Google */ });
  }
})();
