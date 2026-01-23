const defaultTheme = {
  background: "#ffffff",
  text: "#000000",
  button: "#007bff"
};

let theme = { ...defaultTheme };

const bgInput = document.getElementById("bgColor");
const textInput = document.getElementById("textColor");
const btnInput = document.getElementById("btnColor");
const resetBtn = document.getElementById("reset");
const mainBtn = document.querySelector(".main-btn");
const preview = document.querySelector(".preview");

function applyTheme() {
  preview.style.backgroundColor = theme.background;
  preview.style.color = theme.text;
  mainBtn.style.backgroundColor = theme.button;
}

bgInput.addEventListener("input", () => {
  theme.background = bgInput.value;
  applyTheme();
});

textInput.addEventListener("input", () => {
  theme.text = textInput.value;
  applyTheme();
});

btnInput.addEventListener("input", () => {
  theme.button = btnInput.value;
  applyTheme();
});

resetBtn.addEventListener("click", () => {
  theme = { ...defaultTheme };

  bgInput.value = defaultTheme.background;
  textInput.value = defaultTheme.text;
  btnInput.value = defaultTheme.button;

  applyTheme();
});

applyTheme();
