/* SiteSpot — automatizace.js
   1) Category filtering for the automation showcase grid.
   2) Wires each card to an interactive demo (opened in a preview modal).
   Reveal-on-scroll + hover ripple are handled by animations.js. */
(function () {
  'use strict';

  /* ── Demo mapping ────────────────────────────────────────────
     Cards stay in authored order (no shuffle), so we map by index.
     ~6 reusable demo archetypes cover all 24 cards. */
  const DEMOS = [
    // Procesy
    'pipeline.html?scene=poptavky',
    'pipeline.html?scene=fakturace',
    'pipeline.html?scene=onboarding',
    'pipeline.html?scene=sync',
    'pipeline.html?scene=reporty',
    // AI podpora
    'chat.html',
    'inbox.html',
    'inbox.html',
    'generator.html?scene=hovor',
    // Interní AI
    'chat.html',
    'generator.html?scene=schuzka',
    'generator.html?scene=nabidka',
    'generator.html?scene=obsah',
    'chat.html',
    // Dokumenty & data
    'document.html',
    'document.html',
    'generator.html?scene=preklad',
    // Lead & sales
    'pipeline.html?scene=outreach',
    'pipeline.html?scene=leadscoring',
    'pipeline.html?scene=followup',
    'pipeline.html?scene=monitoring',
    // Analytika
    'dashboard.html',
    'dashboard.html',
    'dashboard.html',
  ];

  const cards = Array.from(document.querySelectorAll('.tpl-card.auto-card'));

  /* ── Filtering ───────────────────────────────────────────────── */
  const filters = document.querySelectorAll('.tpl-filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach(card => {
        const matches = cat === 'all' || card.dataset.cat === cat;
        if (matches) {
          card.style.display = '';
          requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── Preview modal ───────────────────────────────────────────── */
  const modal   = document.getElementById('tplModal');
  const frame   = document.getElementById('tplModalFrame');
  const urlEl   = document.getElementById('tplModalUrl');
  const openEl  = document.getElementById('tplModalOpen');

  function openModal(url, label) {
    if (!modal) { window.open(url, '_blank'); return; }
    frame.src = url;
    if (urlEl) urlEl.textContent = label || 'ukázka';
    if (openEl) openEl.href = url;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { if (!modal.classList.contains('open')) frame.src = 'about:blank'; }, 350);
  }

  /* ── Wire each card to its demo ──────────────────────────────── */
  cards.forEach((card, i) => {
    const demo = DEMOS[i];
    if (!demo) return;
    const url = 'automatizace/' + demo;
    card.dataset.url = url;

    // hover overlay (same affordance as the website templates)
    const preview = card.querySelector('.tpl-card__preview');
    if (preview && !preview.querySelector('.tpl-card__overlay')) {
      const ov = document.createElement('div');
      ov.className = 'tpl-card__overlay';
      ov.innerHTML = '<span class="tpl-card__preview-label">▶ Spustit ukázku</span>';
      preview.appendChild(ov);
    }

    // swap the "Auto/AI" footer caption hint to invite interaction
    const name = card.querySelector('.tpl-card__name');
    const label = name ? name.textContent.trim() : 'ukázka';
    card.addEventListener('click', () => openModal(url, label));
  });

  if (modal) {
    modal.querySelectorAll('[data-tpl-close]').forEach(el => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  }
})();
