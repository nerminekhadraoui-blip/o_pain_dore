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
        }, 2200);
    });

    // Fallback: hide loader after max 4s
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
    }, 4000);


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
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
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


    // ── PRODUCT CATEGORY FILTER ──
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active tab
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            productCards.forEach((card, index) => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });


    // ── AVIS SLIDER ──
    const avisTrack = document.querySelector('.avis-track');
    const avisCards = document.querySelectorAll('.avis-card');
    const prevBtn = document.querySelector('.avis-prev');
    const nextBtn = document.querySelector('.avis-next');

    let currentSlide = 0;

    function getCardsPerView() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function getMaxSlide() {
        return Math.max(0, avisCards.length - getCardsPerView());
    }

    function updateSlider() {
        const cardWidth = avisCards[0].offsetWidth + 24; // gap
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


    // ── REVIEW FORM ──
    const reviewForm = document.getElementById('reviewForm');
    const formSuccess = document.getElementById('formSuccess');

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (selectedRating === 0) {
                alert('Veuillez sélectionner une note.');
                return;
            }

            // Simulate form submission
            const formData = {
                name: document.getElementById('reviewName').value,
                email: document.getElementById('reviewEmail').value,
                rating: selectedRating,
                message: document.getElementById('reviewText').value
            };

            console.log('Review submitted:', formData);

            // Show success
            reviewForm.style.display = 'none';
            formSuccess.classList.add('show');

            // Reset after 5s
            setTimeout(() => {
                formSuccess.classList.remove('show');
                reviewForm.style.display = 'flex';
                reviewForm.reset();
                selectedRating = 0;
                stars.forEach(s => s.classList.remove('active'));
            }, 5000);
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