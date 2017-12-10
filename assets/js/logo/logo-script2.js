(function() {
  var hoverGradients = ['logo-radial-gradient0', 'logo-radial-gradient1', 'logo-radial-gradient2'];
  var hoverGradientEls = {
    'logo-radial-gradient0': document.getElementById('logo-radial-gradient0'),
    'logo-radial-gradient1': document.getElementById('logo-radial-gradient1'),
    'logo-radial-gradient2': document.getElementById('logo-radial-gradient2')
  };
  var logoMaskBox = document.getElementById('logo-mask-box');
  var logoStrokeBox = document.getElementById('logo-stroke-box');
  var bryan = document.getElementById('Bryan');
  var braun = document.getElementById('Braun');
  var letters = Array.from(bryan.children).concat(Array.from(braun.children));
  var DEFAULT_FILL_VALUE = 'url(#logo-linear-gradient)';
  var activeGradientNum = 0;

  logoMaskBox.addEventListener('mouseenter', setHoverGradient);
  logoMaskBox.addEventListener('mousemove', positionHoverGradient);
  logoMaskBox.addEventListener('mouseleave', setDefaultGradient);
  logoMaskBox.addEventListener('click', toggleGradient);
  logoMaskBox.addEventListener('mouseenter', quakeSet);
  logoMaskBox.addEventListener('mousemove', quake);
  logoMaskBox.addEventListener('mouseleave', quakeUnset);

  function quakeSet() {
    letters.forEach(function (letter) {
      letter.style.transition = "";
      letter.style.transformOrigin = "center";
    });
  }

  function quake() {
    letters.forEach(function (letter) {
      var rt = letter.style.transform.split(/\(|\)/);
      if (rt == "") {
        var r = 0, tx = 0, ty = 0;
      }
      else {
        var r = parseFloat(rt[1]), tx = parseFloat(rt[3]), ty = parseFloat(rt[5]);
      }
      letter.style.transform = 'rotate(' + (r+Math.random()/5-0.1) + 'rad) translateX(' + (tx + Math.random()*4-2) + 'px) translateY(' + (ty + Math.random()*4-2) + 'px)';
    });
  }

  function quakeUnset() {
    letters.forEach(function (letter) {
      letter.style.transition = "transform 1s";
      letter.style.transform = "";
    });
  }

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
