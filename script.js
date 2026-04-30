const codes = {
  html1: `<h1>Hello</h1>`,
  css1: `h1 { color: red; }`
};
function toggleMode() {
  document.body.classList.toggle("dark");
} 
function showCode(boxId, codeType) {
  const htmlBox = document.getElementById("htmlBox1");
  const cssBox = document.getElementById("cssBox1");

  const copyHtml = document.getElementById("copyHtml1");
  const copyCss = document.getElementById("copyCss1");

  // نخفي كله الأول
  htmlBox.style.display = "none";
  cssBox.style.display = "none";
  copyHtml.style.display = "none";
  copyCss.style.display = "none";

  // نظهر حسب الاختيار
  const box = document.getElementById(boxId);
  box.style.display = "block";
  box.textContent = codes[codeType];

  if (codeType === "html1") {
    copyHtml.style.display = "inline-block";
  } else {
    copyCss.style.display = "inline-block";
  }
}

function copyCode(boxId) {
  const code = document.getElementById(boxId).textContent;
  navigator.clipboard.writeText(code);
  alert("Copied!");
}