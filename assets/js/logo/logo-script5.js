/* Scatter:
  On hover, each letter moves away from the center. They return on mouseout.
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
    var lettersBryan = Array.from(document.getElementsByClassName('Bryan'));
    var lettersBraun = Array.from(document.getElementsByClassName('Braun'));
    var DEFAULT_FILL_VALUE = 'url(#logo-linear-gradient)';
    var activeGradientNum = 0;

    var xDestination = ['-200%', '-100%', '0', '100%', '200%'];
    var yDestination = ['150%', '375%', '500%', '375%', '150%'];

    logoBox.addEventListener('mouseenter', setHoverGradient);
    logoBox.addEventListener('mousemove', positionHoverGradient);
    logoBox.addEventListener('mouseleave', setDefaultGradient);
    logoBox.addEventListener('click', toggleGradient);
    logoBox.addEventListener('mouseenter', startSizeAnimation);
    logoBox.addEventListener('mouseleave', stopSizeAnimation);

    function startSizeAnimation() {
        lettersBryan.forEach(function (letter, key) {
            letter.style.transform = 'translate('+xDestination[key]+',-'+yDestination[key]+')';
            letter.style.transition = 'transform 1s';
        });
        lettersBraun.forEach(function (letter, key) {
            letter.style.transform = 'translate('+xDestination[key]+','+yDestination[key]+')';
            letter.style.transition = "transform 1s";
        });
    }

    function stopSizeAnimation() {
        lettersBryan.forEach(function (letter) {
            letter.style.transform = 'translate(0,0)';
            letter.style.transition = "transform 0.75s";
        });
        lettersBraun.forEach(function (letter) {
            letter.style.transform = 'translate(0,0)';
            letter.style.transition = "transform 0.75s";
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
