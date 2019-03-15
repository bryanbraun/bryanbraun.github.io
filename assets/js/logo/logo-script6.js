/* Wave:
  On hover, each the letters begin to undulate.
*/

(function () {
  var hoverGradients = [
    'logo-radial-gradient0',
    'logo-radial-gradient1',
    'logo-radial-gradient2'
  ];
  var hoverGradientEls = {
    'logo-radial-gradient0': document.getElementById('logo-radial-gradient0'),
    'logo-radial-gradient1': document.getElementById('logo-radial-gradient1'),
    'logo-radial-gradient2': document.getElementById('logo-radial-gradient2')
  };
  var logoMaskBox = document.getElementById('logo-mask-box');
  var logoBox = document.querySelector('.logo');
  var bryanLetters = Array.from(document.getElementsByClassName('Bryan'));
  var braunLetters = Array.from(document.getElementsByClassName('Braun'));
  var allNameLetters = [].concat(bryanLetters, braunLetters);
  var DEFAULT_FILL_VALUE = 'url(#logo-linear-gradient)';
  var activeGradientNum = 0;
  var animationRequestID;
  var initialTimestamp;

  // Polyfills
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  logoBox.addEventListener('mouseenter', setHoverGradient);
  logoBox.addEventListener('mousemove', positionHoverGradient);
  logoBox.addEventListener('mouseleave', setDefaultGradient);
  logoBox.addEventListener('click', toggleGradient);
  logoBox.addEventListener('mouseenter', startWaveAnimation);
  logoBox.addEventListener('mouseleave', restoreLetterPositions);

  function startWaveAnimation() {
    initialTimestamp = performance.now();
    animationRequestID = requestAnimationFrame(waveAnimation);
  }

  function waveAnimation(timestamp) {
    var elapsedTimeInSeconds = (timestamp - initialTimestamp) / 1000;

    bryanLetters.forEach(translateLetter);
    braunLetters.forEach(translateLetter);

    animationRequestID = requestAnimationFrame(waveAnimation);

    function translateLetter(letter, index) {
      var letterDelay = (0.125 * index);
      var letterAdjustedElapsedTimeInSeconds = Math.max(0, elapsedTimeInSeconds - letterDelay);
      var ypos = Math.sin(6 * letterAdjustedElapsedTimeInSeconds) * 150;

      letter.style.transform = 'translate(0, ' + ypos + 'px)';
      letter.style.transitionDuration = '0s';
    };
  }

  function restoreLetterPositions() {
    cancelAnimationFrame(animationRequestID);

    allNameLetters.forEach(function (letter) {
      letter.style.transform = '';
      letter.style.transitionDuration = '0.75s';
    });
  }

  function positionHoverGradient(event) {
    var currentGradientEl = hoverGradientEls[hoverGradients[activeGradientNum]],
      clientRect = logoMaskBox.getBoundingClientRect(),
      svgX = event.x - clientRect.left,
      svgY = event.y - clientRect.top,
      percentX = svgX / clientRect.width,
      percentY = svgY / clientRect.height;

    /**
     * We set unitless numbers because that
     * works best across various SVG scaling scenarios.
     */
    currentGradientEl.cx.baseVal.value = percentX;
    currentGradientEl.cy.baseVal.value = percentY;
  }

  function setHoverGradient() {
    logoMaskBox.style.fill = 'url(#' + hoverGradients[activeGradientNum] + ')';
  }

  function setDefaultGradient(event) {
    logoMaskBox.style.fill = DEFAULT_FILL_VALUE;
  }

  function toggleGradient(event) {
    if (activeGradientNum === hoverGradients.length - 1) {
      activeGradientNum = 0;
    } else {
      activeGradientNum++;
    }
    setHoverGradient();
    positionHoverGradient(event);
  }
})();
