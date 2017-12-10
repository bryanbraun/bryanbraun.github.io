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
    var logoStrokeBox = document.getElementById('logo-stroke-box');
    var bryan = document.getElementById('Bryan');
    var braun = document.getElementById('Braun');
    var lettersBryan = Array.from(bryan.children);
    var lettersBraun = Array.from(braun.children);
    var DEFAULT_FILL_VALUE = 'url(#logo-linear-gradient)';
    var activeGradientNum = 0;

    var xDestination = ['-20vw', '-10vw', '0', '10vw', '20vw'];
    var yDestination = ['15vh', '37.5vh', '50vh', '37.5vh', '15vh'];

    logoMaskBox.addEventListener('mouseenter', setHoverGradient);
    logoMaskBox.addEventListener('mousemove', positionHoverGradient);
    logoMaskBox.addEventListener('mouseleave', setDefaultGradient);
    logoMaskBox.addEventListener('click', toggleGradient);
    logoMaskBox.addEventListener('mouseenter', startSizeAnimation);
    logoMaskBox.addEventListener('mouseleave', stopSizeAnimation);

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
