/* Hisobchi — фирменный персонаж Hisob POS (оригинал: hisob_pos/design/hisobchi).
   Использование: <span class="hisobchi" data-state="wave" role="img" aria-label="Hisobchi"></span>
   Состояния: idle, wave, happy, thinking, listening, done. Анимации — в styles.css (.hc-*). */
(function () {
  var SPRITE =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' +
    '<radialGradient id="hc-shell" cx="40%" cy="30%" r="75%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".65" stop-color="#FAF8F3"/><stop offset="1" stop-color="#E6E1D6"/></radialGradient>' +
    '<linearGradient id="hc-screen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1A2D28"/><stop offset="1" stop-color="#12201C"/></linearGradient>' +
    // тоқӣ
    '<symbol id="hc-toqi" viewBox="0 0 160 160">' +
      '<path d="M32 63 Q80 47 128 63 Q80 53 32 63 Z" fill="rgba(0,0,0,.16)"/>' +
      '<path d="M31 63 C30 50 31 40 38 33 C48 25 64 22 80 22 C96 22 112 25 122 33 C129 40 130 50 129 63 Q80 45 31 63 Z" fill="#151515"/>' +
      '<path d="M80 22 C79.5 34 79.5 44 80 54" stroke="#2B2B2B" stroke-width="1.8" fill="none"/>' +
      '<path d="M56 25 C50 36 47 46 47 57.6 M104 25 C110 36 113 46 113 57.6" stroke="#2B2B2B" stroke-width="1.3" fill="none"/>' +
      '<path d="M64 24.5 C70 23 75 22.6 80 22.6" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" opacity=".14" fill="none"/>' +
      '<g fill="#4A4A4A"><circle cx="74" cy="25" r="1"/><circle cx="78" cy="24.4" r="1"/><circle cx="82" cy="24.4" r="1"/><circle cx="86" cy="25" r="1"/></g>' +
      '<g fill="none" stroke="#F4F1EA" stroke-width="1.5" stroke-linecap="round" transform="translate(52 33) scale(.72 .78) rotate(-8)"><path d="M-8 12 C-11 2 -4 -5 6 -4 C16 -3 20 5 14 9 C10 11 5 9 6 5"/><path d="M-5 11 C-6 4 -1 0 6 0 C12 1 14 5 11 6"/><path d="M-4 9 L8 2.5 M-3 6.5 L6 1.5 M-1 10 L11 4.5"/></g>' +
      '<g fill="none" stroke="#F4F1EA" stroke-width="1.5" stroke-linecap="round" transform="translate(108 33) scale(-.72 .78) rotate(-8)"><path d="M-8 12 C-11 2 -4 -5 6 -4 C16 -3 20 5 14 9 C10 11 5 9 6 5"/><path d="M-5 11 C-6 4 -1 0 6 0 C12 1 14 5 11 6"/><path d="M-4 9 L8 2.5 M-3 6.5 L6 1.5 M-1 10 L11 4.5"/></g>' +
      '<g fill="none" stroke="#F4F1EA" stroke-width="1.3">' +
        '<path transform="translate(40 57) rotate(-16.7)" d="M-5 0 C-5 -7.4 5 -7.4 5 0"/><path transform="translate(51.5 54) rotate(-12.1)" d="M-5 0 C-5 -7.4 5 -7.4 5 0"/>' +
        '<path transform="translate(63 52.1) rotate(-7.3)" d="M-5 0 C-5 -7.4 5 -7.4 5 0"/><path transform="translate(74.5 51.1) rotate(-2.4)" d="M-5 0 C-5 -7.4 5 -7.4 5 0"/>' +
        '<path transform="translate(85.5 51.1) rotate(2.4)" d="M-5 0 C-5 -7.4 5 -7.4 5 0"/><path transform="translate(97 52.1) rotate(7.3)" d="M-5 0 C-5 -7.4 5 -7.4 5 0"/>' +
        '<path transform="translate(108.5 54) rotate(12.1)" d="M-5 0 C-5 -7.4 5 -7.4 5 0"/><path transform="translate(120 57) rotate(16.7)" d="M-5 0 C-5 -7.4 5 -7.4 5 0"/>' +
      '</g>' +
      '<g stroke="#F4F1EA" stroke-width=".9" opacity=".85" fill="none">' +
        '<path transform="translate(40 57) rotate(-16.7)" d="M-2.6 -1.8 h5.2 M-2.6 -3.8 h5.2"/><path transform="translate(51.5 54) rotate(-12.1)" d="M-2.6 -1.8 h5.2 M-2.6 -3.8 h5.2"/>' +
        '<path transform="translate(63 52.1) rotate(-7.3)" d="M-2.6 -1.8 h5.2 M-2.6 -3.8 h5.2"/><path transform="translate(74.5 51.1) rotate(-2.4)" d="M-2.6 -1.8 h5.2 M-2.6 -3.8 h5.2"/>' +
        '<path transform="translate(85.5 51.1) rotate(2.4)" d="M-2.6 -1.8 h5.2 M-2.6 -3.8 h5.2"/><path transform="translate(97 52.1) rotate(7.3)" d="M-2.6 -1.8 h5.2 M-2.6 -3.8 h5.2"/>' +
        '<path transform="translate(108.5 54) rotate(12.1)" d="M-2.6 -1.8 h5.2 M-2.6 -3.8 h5.2"/><path transform="translate(120 57) rotate(16.7)" d="M-2.6 -1.8 h5.2 M-2.6 -3.8 h5.2"/>' +
      '</g>' +
      '<path d="M31 62.4 L33.5 59.9 L35.9 60.7 L38.4 58.3 L40.8 59.2 L43.3 56.9 L45.7 57.8 L48.2 55.6 L50.6 56.6 L53.1 54.5 L55.5 55.6 L58 53.6 L60.4 54.8 L62.9 52.9 L65.3 54.2 L67.8 52.4 L70.2 53.8 L72.7 52 L75.1 53.5 L77.6 51.8 L80 53.4 L82.5 51.8 L84.9 53.5 L87.4 52 L89.8 53.8 L92.3 52.4 L94.7 54.2 L97.2 52.9 L99.6 54.8 L102.1 53.6 L104.5 55.7 L107 54.5 L109.4 56.6 L111.9 55.6 L114.3 57.8 L116.8 56.9 L119.2 59.2 L121.7 58.3 L124.1 60.7 L126.6 59.9 L129 62.4" fill="none" stroke="#F4F1EA" stroke-width=".9"/>' +
    '</symbol>' +
    // корпус
    '<symbol id="hc-body" viewBox="0 0 160 160">' +
      '<ellipse cx="80" cy="152" rx="34" ry="5" fill="rgba(27,26,24,.12)"/>' +
      '<rect x="52" y="112" width="56" height="36" rx="18" fill="url(#hc-shell)" stroke="#CFC8BA" stroke-width="1.5"/>' +
      '<circle cx="80" cy="128" r="6" fill="#12201C"/><circle cx="80" cy="128" r="2.6" fill="#7FE6C5"/>' +
      '<rect x="36" y="116" width="20" height="12" rx="6" fill="url(#hc-shell)" stroke="#CFC8BA" stroke-width="1.5"/>' +
      '<rect x="28" y="44" width="104" height="76" rx="36" fill="url(#hc-shell)" stroke="#CFC8BA" stroke-width="1.5"/>' +
      '<rect x="22" y="72" width="10" height="20" rx="5" fill="#E6E1D6" stroke="#CFC8BA" stroke-width="1.2"/>' +
      '<rect x="128" y="72" width="10" height="20" rx="5" fill="#E6E1D6" stroke="#CFC8BA" stroke-width="1.2"/>' +
      '<rect x="40" y="58" width="80" height="50" rx="24" fill="url(#hc-screen)"/>' +
      '<path d="M50 70 C58 67 64 66 70 66" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity=".12" fill="none"/>' +
      '<ellipse cx="54" cy="100" rx="6" ry="3.5" fill="#F3A99B" opacity=".75"/><ellipse cx="106" cy="100" rx="6" ry="3.5" fill="#F3A99B" opacity=".75"/>' +
    '</symbol>' +
    '<symbol id="hc-arm" viewBox="0 0 30 16"><rect x="1" y="2" width="24" height="12" rx="6" fill="url(#hc-shell)" stroke="#CFC8BA" stroke-width="1.5"/></symbol>' +
    '</defs></svg>';

  var EYES = {
    idle: '<g class="hc-blink"><ellipse cx="64" cy="82" rx="7.5" ry="10" fill="#7FE6C5"/><circle cx="66.5" cy="78" r="2.4" fill="#E9FFF7"/></g>' +
          '<g class="hc-blink"><ellipse cx="96" cy="82" rx="7.5" ry="10" fill="#7FE6C5"/><circle cx="98.5" cy="78" r="2.4" fill="#E9FFF7"/></g>' +
          '<path d="M74 96 Q80 101 86 96" stroke="#7FE6C5" stroke-width="3" fill="none" stroke-linecap="round"/>',
    happy: '<path d="M56 86 Q64 74 72 86" stroke="#7FE6C5" stroke-width="4" fill="none" stroke-linecap="round"/>' +
           '<path d="M88 86 Q96 74 104 86" stroke="#7FE6C5" stroke-width="4" fill="none" stroke-linecap="round"/>' +
           '<path d="M72 94 Q80 103 88 94" stroke="#7FE6C5" stroke-width="3" fill="#7FE6C5" fill-opacity=".25" stroke-linecap="round"/>',
    listening: '<rect class="hc-eq" x="60" y="72" width="7" height="22" rx="3.5" fill="#7FE6C5"/><rect class="hc-eq hc-b" x="72" y="67" width="7" height="32" rx="3.5" fill="#7FE6C5"/>' +
               '<rect class="hc-eq hc-c" x="84" y="67" width="7" height="32" rx="3.5" fill="#7FE6C5"/><rect class="hc-eq" x="96" y="72" width="7" height="22" rx="3.5" fill="#7FE6C5"/>',
    thinking: '<circle class="hc-dot" cx="66" cy="84" r="5.5" fill="#7FE6C5"/><circle class="hc-dot hc-b" cx="80" cy="84" r="5.5" fill="#7FE6C5"/><circle class="hc-dot hc-c" cx="94" cy="84" r="5.5" fill="#7FE6C5"/>'
  };

  function build(state) {
    var eyes = EYES[state === 'wave' || state === 'done' ? 'happy' : state] || EYES.idle;
    var arm = '<use href="#hc-arm" x="104" y="114" width="30" height="16"/>';
    if (state === 'wave') arm = '<g class="hc-wave">' + arm + '</g>';
    var toqiCls = state === 'thinking' ? 'hc-think' : (state === 'wave' ? 'hc-tilt' : '');
    var toqi = toqiCls ? '<g class="' + toqiCls + '"><use href="#hc-toqi"/></g>' : '<use href="#hc-toqi"/>';
    var wrap = state === 'done' ? 'hc-jump' : 'hc-bob';
    return '<svg viewBox="0 0 160 160" aria-hidden="true" focusable="false"><g class="' + wrap + '">' +
      '<use href="#hc-body"/>' + eyes + arm + toqi + '</g></svg>';
  }

  function init() {
    var nodes = document.querySelectorAll('.hisobchi[data-state]');
    if (!nodes.length) return;
    if (!document.getElementById('hc-body')) {
      var d = document.createElement('div');
      d.innerHTML = SPRITE;
      document.body.insertBefore(d.firstChild, document.body.firstChild);
    }
    for (var i = 0; i < nodes.length; i++) {
      if (!nodes[i].firstChild) nodes[i].innerHTML = build(nodes[i].getAttribute('data-state'));
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
