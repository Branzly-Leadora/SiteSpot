/* SiteSpot — preview-modal.js
   Otevírá náhled (#tplModal) po kliknutí na kartu s data-url.
   Použito na stránce Weby (templates.html) pro mřížku šablon.
   Vlastní soubor nezávislý na templates.js, aby ho nesmazal merge,
   který přepisuje carousel logiku v templates.js. */
(function () {
  'use strict';

  const modal = document.getElementById('tplModal');
  if (!modal) return;

  const frame  = document.getElementById('tplModalFrame');
  const urlEl  = document.getElementById('tplModalUrl');
  const openEl = document.getElementById('tplModalOpen');

  function openModal(url, label) {
    if (!url) return;
    if (frame)  frame.src = url;
    if (urlEl)  urlEl.textContent = label || url;
    if (openEl) openEl.href = url;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // vyprázdnit iframe → zastaví přehrávání/načítání na pozadí
    setTimeout(() => { if (!modal.classList.contains('open') && frame) frame.src = 'about:blank'; }, 350);
  }

  // Karty s data-url (mřížka šablon). Carousel slidy data-url nemají → nezasáhne je.
  document.querySelectorAll('.tpl-card[data-url]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.url, card.dataset.host || card.dataset.title));
  });

  modal.querySelectorAll('[data-tpl-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();
