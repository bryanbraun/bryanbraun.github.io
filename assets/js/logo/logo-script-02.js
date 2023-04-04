/* Quake:
  This script jitters the letters for every movement of the mouse, then puts
  them back on mouseout.
*/

(function () {
  const hoverGradients = [
    'logo-radial-gradient0',
    'logo-radial-gradient1',
    'logo-radial-gradient2'
  ];
  const hoverGradientEls = {
    'logo-radial-gradient0': document.getElementById('logo-radial-gradient0'),
    'logo-radial-gradient1': document.getElementById('logo-radial-gradient1'),
    'logo-radial-gradient2': document.getElementById('logo-radial-gradient2')
  };
  const logoBox = document.querySelector('.logo');
  const logoMaskBox = document.getElementById('logo-mask-box');
  const letters = Array.from(document.querySelectorAll('.Bryan, .Braun'));
  const DEFAULT_FILL_VALUE = 'url(#logo-linear-gradient)';
  let activeGradientNum = 0;
  let intervalId;

  logoBox.addEventListener('mouseenter', setHoverGradient);
  logoBox.addEventListener('mousemove', positionHoverGradient);
  logoBox.addEventListener('mouseleave', setDefaultGradient);
  logoBox.addEventListener('click', toggleGradient);

  logoBox.addEventListener('mouseenter', quakeSet);
  logoBox.addEventListener('mouseleave', quakeUnset);

  letters.forEach(function (letter) {
    letter.style.transformOrigin = 'center';
  });

  function quakeSet() {
    letters.forEach(function (letter) {
      letter.style.transition = '';
    });

    intervalId = setInterval(quake, 60);
  }

  function quake() {
    letters.forEach(function (letter) {
      const rt = letter.style.transform.split(/\(|\)/);
      let r, tx, ty;

      if (rt == '') {
        r = 0;
        tx = 0;
        ty = 0;
      } else {
        r = parseFloat(rt[1]);
        tx = parseFloat(rt[3]);
        ty = parseFloat(rt[5]);
      }
      letter.style.transform =
        'rotate(' +
        (r + Math.random() / 5 - 0.1) +
        'rad) translateX(' +
        (tx + Math.random() * 40 - 20) +
        'px) translateY(' +
        (ty + Math.random() * 40 - 20) +
        'px)';
    });
  }

  function quakeUnset() {
    clearInterval(intervalId);

    letters.forEach(function (letter) {
      letter.style.transition = 'transform 0.75s';
      letter.style.transform = '';
    });
  }

  function getHoverFillValue() {
    return 'url(#' + hoverGradients[activeGradientNum] + ')';
  }

  function positionHoverGradient(event) {
    const currentGradientEl = hoverGradientEls[hoverGradients[activeGradientNum]],
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
    logoMaskBox.style.fill = getHoverFillValue();
  }

  function setDefaultGradient() {
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
