/* SiteSpot — templates.js  v3.0 */
(function () {
  'use strict';

  const filters = document.querySelectorAll('.tpl-filter');
  const cards   = document.querySelectorAll('.tpl-card');

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

})();