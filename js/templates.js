/* SiteSpot — templates.js  v3.0 */
(function () {
  'use strict';

  const filters = document.querySelectorAll('.tpl-filter');

  /* ── Zamíchat pořadí designů v rámci každého odvětví ──────────
     Jinak má každé odvětví stejnou posloupnost stylů (editoriál →
     cinematic → brutalist → …), což působí šablonovitě. Skupiny
     (odvětví) zůstávají pohromadě, mění se jen pořadí karet uvnitř. */
  (function shuffleWithinCategories() {
    const grid = document.querySelector('.tpl-grid');
    if (!grid) return;
    const groups = new Map();
    grid.querySelectorAll('.tpl-card').forEach(card => {
      const cat = card.dataset.cat || '_';
      if (!groups.has(cat)) groups.set(cat, []);
      groups.get(cat).push(card);
    });
    groups.forEach(list => {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
      list.forEach(card => grid.appendChild(card));
    });
  })();

  const cards = document.querySelectorAll('.tpl-card');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.filter;

      cards.forEach(card => {
        const matches = cat === 'all' || card.dataset.cat === cat;
        if (matches) {
          card.style.display = '';
          // Small delay so the reveal transition fires cleanly
          requestAnimationFrame(() => {
            requestAnimationFrame(() => card.classList.add('visible'));
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── PREVIEW MODAL ─────────────────────────────────────────── */
  const modal = document.getElementById('tplModal');
  if (modal) {
    const frame   = document.getElementById('tplModalFrame');
    const urlEl   = document.getElementById('tplModalUrl');
    const openEl  = document.getElementById('tplModalOpen');

    function openModal(url, host) {
      frame.src = url;
      urlEl.textContent = host || url;
      openEl.href = url;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      // vyprázdnit iframe → zastaví přehrávání/načítání šablony na pozadí
      setTimeout(() => { if (!modal.classList.contains('open')) frame.src = 'about:blank'; }, 350);
    }

    // Klik na kartu (nebo její tlačítko) s data-url → otevři náhled
    cards.forEach(card => {
      const url = card.dataset.url;
      if (!url) return;
      card.addEventListener('click', () => openModal(url, card.dataset.host));
    });

    modal.querySelectorAll('[data-tpl-close]').forEach(el =>
      el.addEventListener('click', closeModal)
    );
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  }

})();