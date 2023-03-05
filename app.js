const textarea = document.getElementById("myTextarea");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", () => {
  const text = textarea.value.trim();//Sağdan soldan boşluqları sildik
  const words = text.split(/\s+/);
  const charsWithoutSpaces = text.replace(/\s+/g, "");
  wordCount.textContent = `Word count: ${words.length}`;
  charCount.textContent = `Character count: ${charsWithoutSpaces.length}`;

});
