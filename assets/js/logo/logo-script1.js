(function() {
  var hoverGradients = ['logo-radial-gradient0', 'logo-radial-gradient1', 'logo-radial-gradient2'];
  var hoverGradientEls = {
    'logo-radial-gradient0': document.getElementById('logo-radial-gradient0'),
    'logo-radial-gradient1': document.getElementById('logo-radial-gradient1'),
    'logo-radial-gradient2': document.getElementById('logo-radial-gradient2')
  };
  var logoMaskBox = document.getElementById('logo-mask-box');
  var logoStrokeBox = document.getElementById('logo-stroke-box');
  var DEFAULT_FILL_VALUE = 'url(#logo-linear-gradient)';
  var activeGradientNum = 0;

  logoMaskBox.addEventListener('mouseenter', setHoverGradient);
  logoMaskBox.addEventListener('mousemove', positionHoverGradient);
  logoMaskBox.addEventListener('mouseleave', setDefaultGradient);
  logoMaskBox.addEventListener('click', toggleGradient);

  function getHoverFillValue() {
    return 'url(#' + hoverGradients[activeGradientNum] + ')';
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
    currentGradientEl.fx.baseVal.value = percentX;
    currentGradientEl.fy.baseVal.value = percentY;
    currentGradientEl.cx.baseVal.value = percentX;
    currentGradientEl.cy.baseVal.value = percentY;
  }

  function setHoverGradient() {
    logoMaskBox.style.fill = getHoverFillValue();
    logoStrokeBox.style.stroke = getHoverFillValue();
  }

  function setDefaultGradient(event) {
    logoMaskBox.style.fill = DEFAULT_FILL_VALUE;
    logoStrokeBox.style.stroke = DEFAULT_FILL_VALUE;
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
