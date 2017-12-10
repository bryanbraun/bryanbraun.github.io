/* Expand:
  On hover, each letter will grow until the entire logo is filled.
*/

(function() {
    var hoverGradients = ['logo-radial-gradient0', 'logo-radial-gradient1', 'logo-radial-gradient2'];
    var hoverGradientEls = {
        'logo-radial-gradient0': document.getElementById('logo-radial-gradient0'),
        'logo-radial-gradient1': document.getElementById('logo-radial-gradient1'),
        'logo-radial-gradient2': document.getElementById('logo-radial-gradient2')
    };
    var logoMaskBox = document.getElementById('logo-mask-box');
    var logoBox = document.querySelector('.logo');
    var letters = Array.from(document.querySelectorAll('.Bryan, .Braun'));
    var DEFAULT_FILL_VALUE = 'url(#logo-linear-gradient)';
    var activeGradientNum = 0;

    logoBox.addEventListener('mouseenter', setHoverGradient);
    logoBox.addEventListener('mousemove', positionHoverGradient);
    logoBox.addEventListener('mouseleave', setDefaultGradient);
    logoBox.addEventListener('click', toggleGradient);
    logoBox.addEventListener('mouseenter', startSizeAnimation);
    logoBox.addEventListener('mouseleave', stopSizeAnimation);

    letters.forEach(function (letter) {
      letter.style.transformOrigin = 'center';
      letter.style.transformBox = 'fill-box';
      letter.style.transitionProperty = 'transform';
    });

    function startSizeAnimation() {
        letters.forEach(function (letter) {
            letter.style.transform = 'scale(11)';
            letter.style.transitionDuration = '2.5s';
        });
    }

    function stopSizeAnimation() {
        letters.forEach(function (letter) {
            letter.style.transform = '';
            letter.style.transitionDuration = '0.5s';
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
