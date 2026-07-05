/* SiteSpot — embed.js
   S ?embed=1 se stránka přepne do náhledového módu pro carousel na hlavní
   stránce: schová chrome (nav/hero/patičku, řeší demos.css přes html.embed)
   a demo se periodicky spouští samo, aby náhled žil. Rodičovská stránka
   posílá 'attract:pause' / 'attract:resume' — běží jen aktivní slide. */
(function () {
  if (!/[?&]embed=1/.test(location.search)) return;
  document.documentElement.classList.add('embed');

  var timer = null;
  var kick = null;

  var press = function () {
    var btn = document.getElementById('run');
    if (btn && !btn.disabled) btn.click();
  };
  var start = function () {
    if (timer) return;
    kick = setTimeout(press, 900);
    timer = setInterval(press, 16000);
  };
  var stop = function () {
    clearTimeout(kick); kick = null;
    clearInterval(timer); timer = null;
  };

  window.addEventListener('message', function (e) {
    if (e.origin !== location.origin) return;
    if (e.data === 'attract:pause') stop();
    if (e.data === 'attract:resume') start();
  });

  // autostart — slide je při prvním mountu vždy ten aktivní
  window.addEventListener('load', start);
})();
