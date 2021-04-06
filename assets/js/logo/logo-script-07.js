/* Flush:
  On hover, rotate the letters around the logo center.
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
  var nameLetters = [].concat(
    Array.from(document.getElementsByClassName('Bryan')),
    Array.from(document.getElementsByClassName('Braun'))
  );
  var DEFAULT_FILL_VALUE = 'url(#logo-linear-gradient)';
  var activeGradientNum = 0;

  logoBox.addEventListener('mouseenter', setHoverGradient);
  logoBox.addEventListener('mousemove', positionHoverGradient);
  logoBox.addEventListener('mouseleave', setDefaultGradient);
  logoBox.addEventListener('click', toggleGradient);
  logoBox.addEventListener("mouseenter", startRotations);
  logoBox.addEventListener('mouseleave', restoreLetterRotations);

  // set rotation origin
  nameLetters.forEach(function (letter) {
    letter.style.transformOrigin = 'center';
    letter.style.transformBox = 'view-box';
    letter.style.transitionDuration = '1.5s';
  });

  function startRotations() {
    nameLetters.forEach(function (letter) {
      letter.style.transform = 'rotate(360deg)';
    });
  }

  function restoreLetterRotations() {
    nameLetters.forEach(function (letter) {
      letter.style.transform = 'rotate(0deg)';
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
