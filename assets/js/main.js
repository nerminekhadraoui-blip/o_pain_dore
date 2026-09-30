/* ============================================
   Ô PAIN DORÉ — MAIN JAVASCRIPT
   ============================================ */

   document.addEventListener('DOMContentLoaded', () => {

    // ── LOADER ──
    const loader = document.getElementById('loader');
    document.body.classList.add('loading');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
        }, 1200);
    });

    // Fallback: hide loader after max 4s
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
    }, 3000);


    // ── CUSTOM CURSOR ──
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');

    if (cursor && follower && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX - 4 + 'px';
            cursor.style.top = mouseY - 4 + 'px';
        });

        function animateFollower() {
            followerX += (mouseX - followerX - 18) * 0.12;
            followerY += (mouseY - followerY - 18) * 0.12;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .product-card, .gateau-card, .gallery-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                follower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                follower.classList.remove('hover');
            });
        });
    }


    // ── HEADER SCROLL ──
    const header = document.getElementById('header');
    const floatingCta = document.getElementById('floatingCta');

    function handleScroll() {
        const scrollY = window.scrollY;

        // Header background
        if (scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Floating CTA
        if (scrollY > 600) {
            floatingCta.classList.add('visible');
        } else {
            floatingCta.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();


    // ── MOBILE MENU ──
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });


    // ── SMOOTH SCROLL ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ── REVEAL ON SCROLL ──
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el, index) => {
        el.style.transitionDelay = `${index % 4 * 0.1}s`;
        revealObserver.observe(el);
    });


    // ── FILTRES (carte + collections de gâteaux) ──
    function setupFilter(tabsId, cardSelector, attr) {
        const tabsEl = document.getElementById(tabsId);
        if (!tabsEl) return;
        const cards = document.querySelectorAll(cardSelector);

        function apply(value, animate) {
            tabsEl.querySelectorAll('.tab-btn').forEach(b => {
                const on = b.dataset[attr] === value;
                b.classList.toggle('active', on);
                b.setAttribute('aria-selected', on);
            });
            let shown = 0;
            cards.forEach(card => {
                const match = value === 'all' || card.dataset[attr] === value;
                card.classList.toggle('hidden', !match);
                if (match && animate) {
                    const delay = shown++ * 50;
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, delay);
                }
            });
        }

        tabsEl.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (btn) apply(btn.dataset[attr], true);
        });

        const first = tabsEl.querySelector('.tab-btn.active') || tabsEl.querySelector('.tab-btn');
        if (first) apply(first.dataset[attr], false);
    }

    setupFilter('categoryTabs', '.product-card', 'category');
    setupFilter('collectionTabs', '.gateau-card', 'collection');


    // ── CHOIX DE TAILLE (gâteaux) → met à jour le message WhatsApp ──
    document.querySelectorAll('.gateau-card').forEach(card => {
        const sizes = card.querySelectorAll('.size-option');
        const wa = card.querySelector('.js-wa');
        sizes.forEach(btn => {
            btn.addEventListener('click', () => {
                sizes.forEach(b => {
                    b.classList.toggle('selected', b === btn);
                    b.setAttribute('aria-checked', b === btn);
                });
                if (wa && window.OPD) {
                    const msg = `Bonjour Ô Pain Doré ! Je souhaite commander le gâteau « ${card.dataset.nom} » (${btn.dataset.label}${Number(btn.dataset.prix) ? " — " + window.OPD.prix(btn.dataset.prix) : ""}). Pour le : `;
                    wa.href = window.OPD.waLink(msg);
                }
            });
        });
    });


    // ── AVIS SLIDER ──
    const avisTrack = document.querySelector('.avis-track');
    const getAvisCards = () => document.querySelectorAll('.avis-card');
    const prevBtn = document.querySelector('.avis-prev');
    const nextBtn = document.querySelector('.avis-next');

    let currentSlide = 0;

    function getCardsPerView() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function getMaxSlide() {
        return Math.max(0, getAvisCards().length - getCardsPerView());
    }

    function updateSlider() {
        if (!getAvisCards().length) return;
        const cardWidth = getAvisCards()[0].offsetWidth + 24; // gap
        avisTrack.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlide < getMaxSlide()) {
                currentSlide++;
                updateSlider();
            } else {
                currentSlide = 0;
                updateSlider();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            } else {
                currentSlide = getMaxSlide();
                updateSlider();
            }
        });

        // Auto-slide
        let autoSlide = setInterval(() => {
            if (currentSlide < getMaxSlide()) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            updateSlider();
        }, 5000);

        // Pause on hover
        const slider = document.getElementById('avisSlider');
        slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
        slider.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                if (currentSlide < getMaxSlide()) {
                    currentSlide++;
                } else {
                    currentSlide = 0;
                }
                updateSlider();
            }, 5000);
        });

        document.addEventListener('opd:avis', () => { currentSlide = 0; updateSlider(); });

        // Reset on resize
        window.addEventListener('resize', () => {
            currentSlide = Math.min(currentSlide, getMaxSlide());
            updateSlider();
        });
    }


    // ── STAR RATING ──
    const stars = document.querySelectorAll('#starRating .star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-value'));
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        star.addEventListener('mouseenter', () => {
            const val = parseInt(star.getAttribute('data-value'));
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= val) {
                    s.style.color = 'var(--color-gold)';
                } else {
                    s.style.color = '';
                }
            });
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => {
                if (!s.classList.contains('active')) {
                    s.style.color = '';
                }
            });
        });
    });


    // ── FORMULAIRE D'AVIS ──
    // Envoi vers la boîte mail de la boulangerie via Web3Forms
    // (clé à renseigner dans assets/js/config.js → web3formsKey).
    const reviewForm = document.getElementById('reviewForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const submitBtn = document.getElementById('reviewSubmit');
    const CFG = window.OPD_CONFIG || {};

    function showError(msg) {
        if (formError) { formError.textContent = msg; formError.classList.add('show'); }
    }

    function resetForm() {
        reviewForm.reset();
        selectedRating = 0;
        stars.forEach(s => { s.classList.remove('active'); s.style.color = ''; });
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (formError) formError.classList.remove('show');

            const data = {
                nom: document.getElementById('reviewName').value.trim(),
                email: document.getElementById('reviewEmail').value.trim(),
                note: selectedRating,
                avis: document.getElementById('reviewText').value.trim()
            };

            if (!data.nom || !data.avis) return showError('Merci d\'indiquer votre nom et votre avis.');
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return showError('Merci d\'indiquer un email valide.');
            if (!data.note) return showError('Merci de choisir une note en cliquant sur les étoiles.');
            if (reviewForm.botcheck && reviewForm.botcheck.checked) return; // robot

            const resume = `Nouvel avis — ${'★'.repeat(data.note)} (${data.note}/5)\nDe : ${data.nom} <${data.email}>\n\n${data.avis}`;

            const successText = formSuccess.querySelector('p');
            successText.textContent = 'Merci pour votre avis ! Il sera publié après vérification.';

            // 1. Google Sheet de la boulangerie : l'avis est enregistré et peut s'afficher sur le site
            if (CFG.avisSheetUrl) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Envoi…';
                try {
                    const res = await fetch(CFG.avisSheetUrl, {
                        method: 'POST',
                        body: JSON.stringify(data) // envoyé en texte simple (compatible Google Apps Script)
                    });
                    const json = await res.json();
                    if (!json.ok) throw new Error('refusé');
                    if (json.publie && json.avis && window.OPD && window.OPD.avisCard) {
                        document.getElementById('avisTrack').insertAdjacentHTML('afterbegin', window.OPD.avisCard(json.avis));
                        document.dispatchEvent(new Event('opd:avis'));
                        successText.textContent = 'Merci ! Votre avis est publié sur notre site.';
                    }
                } catch (err) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Envoyer mon avis';
                    return showError('L\'envoi a échoué. Réessayez ou appelez-nous directement.');
                }
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer mon avis';

            // 2. Pas de Google Sheet ni de clé Web3Forms : email ou WhatsApp
            } else if (!CFG.web3formsKey) {
                if (CFG.email) {
                    window.location.href = `mailto:${CFG.email}?subject=${encodeURIComponent('Avis client — Ô Pain Doré')}&body=${encodeURIComponent(resume)}`;
                } else if (CFG.whatsapp && window.OPD) {
                    window.open(window.OPD.waLink(resume), '_blank', 'noopener');
                } else {
                    return showError('Le formulaire n\'est pas encore configuré.');
                }
            } else {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Envoi…';
                try {
                    const res = await fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                        body: JSON.stringify({
                            access_key: CFG.web3formsKey,
                            subject: `Nouvel avis ${data.note}/5 — ${data.nom}`,
                            from_name: 'Site Ô Pain Doré',
                            replyto: data.email,
                            ...data
                        })
                    });
                    const json = await res.json();
                    if (!json.success) throw new Error(json.message);
                } catch (err) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Envoyer mon avis';
                    return showError('L\'envoi a échoué. Réessayez ou appelez-nous directement.');
                }
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer mon avis';
            }

            reviewForm.style.display = 'none';
            formSuccess.classList.add('show');
            setTimeout(() => {
                formSuccess.classList.remove('show');
                reviewForm.style.display = 'flex';
                resetForm();
            }, 6000);
        });
    }


    // ── PARALLAX HERO ──
    const heroBg = document.querySelector('.hero-bg');

    if (heroBg && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
        }, { passive: true });
    }


    // ── TOUCH SLIDER FOR AVIS ──
    if (avisTrack) {
        let startX = 0;
        let isDragging = false;

        avisTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, { passive: true });

        avisTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
        }, { passive: true });

        avisTrack.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0 && currentSlide < getMaxSlide()) {
                    currentSlide++;
                } else if (diff < 0 && currentSlide > 0) {
                    currentSlide--;
                }
                updateSlider();
            }
        }, { passive: true });
    }

});