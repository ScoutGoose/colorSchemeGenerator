document.querySelector("button").addEventListener("click", (e) => {
  const color = document.querySelector("#color-selector");
  const mode = document.querySelector("#color-scheme-mode-selector");
  e.preventDefault();
  renderColorScheme(color.value.slice(1), mode.value);
});

// COLOR SCHEME RENDER
function renderColorScheme(colorHexValue, schemeMode) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorHexValue}&mode=${schemeMode}&count=4`
  )
    .then((res) => res.json())
    .then((colorArr) => {
      const { seed, colors } = colorArr;
      document.querySelector(".colors-container").innerHTML = createLayout([
        seed,
        ...colors,
      ]);
    });
}

// COLOR SCHEME LAYOUT
function createLayout(colorsArr) {
  let htmlComponents = ``;
  colorsArr.forEach((color) => {
    htmlComponents += `
          <div class="single-color-container">
            <div class="color-option" style="background:${color.hex.value}"></div>
            <div class="hex-value-container">
              <p class="hex-color">${color.hex.value}</p>
            </div>
          </div>
        `;
  });
  return htmlComponents;
}

// INITIAL RENDER
renderColorScheme("F55A5A", "monochrome");
