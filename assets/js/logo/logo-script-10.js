/* Pop:
  On letter hover, scale and slightly rotate each letter.
*/

(function () {
  const hoverGradientEl = document.getElementById("logo-radial-gradient1");
  const logoMaskBox = document.getElementById("logo-mask-box");
  const logoBox = document.querySelector(".logo");
  const logoClipPath = document.getElementById("logo-shape");
  const letters = Array.from(document.querySelectorAll(".Bryan, .Braun"));
  const DEFAULT_FILL_VALUE = "url(#logo-linear-gradient)";
  const HOVER_FILL_VALUE = hoverGradientEl.lastElementChild.getAttribute('stop-color');
  const rotations = [-12, 32, 8, -24, 16, -8, 24, -16, 12, -32];

  letters.forEach((letter, index) => {
    letter.style.transformOrigin = "center";
    letter.style.transformBox = "fill-box";
    letter.style.pointerEvents = "bounding-box";

    letter.addEventListener("mouseenter", () => {
      letter.style.transform = `rotate(${rotations[index]}deg)`;
      letter.style.scale = 1.33;
    });
    letter.addEventListener("mouseleave", () => {
      letter.style.transform = "rotate(0)";
      letter.style.scale = 1
    });
  });

  logoBox.addEventListener("mouseenter", () => {
    placeSvgElements();
    setHoverGradient();
  });
  logoBox.addEventListener("mousemove", positionHoverGradient);
  logoBox.addEventListener("mouseleave", () => {
    restoreSvgElements();
    setDefaultGradient();
  });

  function placeSvgElements() {
    letters.forEach((letter) => {
      logoBox.appendChild(letter);
      letter.style.fill = HOVER_FILL_VALUE;
    });
  }

  function restoreSvgElements() {
    letters.forEach((letter) => {
      logoClipPath.appendChild(letter);
      letter.style.fill = "none";
    });
  }

  function positionHoverGradient(event) {
    const clientRect = logoMaskBox.getBoundingClientRect(),
      svgX = event.x - clientRect.left,
      svgY = event.y - clientRect.top,
      percentX = svgX / clientRect.width,
      percentY = svgY / clientRect.height;

    hoverGradientEl.cx.baseVal.value = percentX;
    hoverGradientEl.cy.baseVal.value = percentY;
  }

  function setHoverGradient() {
    logoMaskBox.style.fill = "url(#logo-radial-gradient1)";
  }

  function setDefaultGradient() {
    logoMaskBox.style.fill = DEFAULT_FILL_VALUE;
  }
})();
