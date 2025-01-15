const color = document.querySelector("#color-selector");
const mode = document.querySelector("#color-scheme-mode-selector");
document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  renderColorScheme(color.value.slice(1));
});

// INITIAL RENDER
function renderColorScheme(colorHexValue, schemeMode) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorHexValue}&mode=monochrome&count=4`
  )
    .then((res) => res.json())
    .then((colorArr) => {
      let htmlComponents = ``;
      const { seed, colors } = colorArr;
      console.log(seed, ...colors);
      [seed, ...colors].forEach((color) => {
        htmlComponents += `
          <div class="single-color-container">
            <div class="color-option" style="background:${color.hex.value}"></div>
            <div class="hex-value-container">
              <p class="hex-color">${color.hex.value}</p>
            </div>
          </div>
        `;
      });
      document.querySelector(".colors-container").innerHTML = htmlComponents;
    });
}

renderColorScheme("F55A5A");
