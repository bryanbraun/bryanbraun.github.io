/* Growshrink:
  On hover, causes each letter to randomly grow or shrink in size.
*/

(function () {
  const hoverGradients = [
    "logo-radial-gradient0",
    "logo-radial-gradient1",
    "logo-radial-gradient2"
  ];
  const hoverGradientEls = {
    "logo-radial-gradient0": document.getElementById("logo-radial-gradient0"),
    "logo-radial-gradient1": document.getElementById("logo-radial-gradient1"),
    "logo-radial-gradient2": document.getElementById("logo-radial-gradient2")
  };
  const logoMaskBox = document.getElementById("logo-mask-box");
  const logoBox = document.querySelector(".logo");
  const letters = Array.from(document.querySelectorAll(".Bryan, .Braun"));
  const DEFAULT_FILL_VALUE = "url(#logo-linear-gradient)";
  let activeGradientNum = 0;
  let sizeAnimationAllowed = false;
  let timer;

  logoBox.addEventListener("mouseenter", setHoverGradient);
  logoBox.addEventListener("mousemove", positionHoverGradient);
  logoBox.addEventListener("mouseleave", setDefaultGradient);
  logoBox.addEventListener("click", toggleGradient);
  logoBox.addEventListener("mouseenter", startSizeAnimation);
  logoBox.addEventListener("mouseleave", stopSizeAnimation);

  letters.forEach(function (letter) {
    letter.style.transition = "transform 2s";
  });

  function startSizeAnimation() {
    sizeAnimationAllowed = true;
    setSize();
  }

  function stopSizeAnimation() {
    sizeAnimationAllowed = false;
    letters.forEach(function (letter) {
      letter.style.transform = "scale(1)";
      letter.style.transformOrigin = "center";
    });
    clearTimeout(timer);
  }

  function setSize() {
    if (sizeAnimationAllowed == true) {
      letters.forEach(function (letter) {
        const shouldLetterBeAnimated = Math.random();
        if (shouldLetterBeAnimated > 0.75) {
          const transforms = letter.style.transform.split(/\(|\)/);
          let ts;
          if (transforms == "") {
            ts = 1;
          } else {
            ts = parseFloat(transforms[1]);
          }
          ts += (Math.random() - 0.5) * 2;
          if (ts < 0.3) {
            ts = 0.3;
          } else if (ts > 2) {
            ts = 2;
          }
          letter.style.transform = "scale(" + ts + ")";
          letter.style.transformOrigin = "center";
        }
      });

      timer = setTimeout(function () {
        setSize();
      }, 300);
    }
  }

  function getHoverFillValue() {
    return "url(#" + hoverGradients[activeGradientNum] + ")";
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
