const submitBtn = document.querySelector(".submit-btn");
const inputTextArea = document.querySelector(".my-text");
const outputTextArea = document.querySelector(".output-text");
const url = "https://api.funtranslations.com/translate/minion.json";

submitBtn.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(inputTextArea.value);
  const textToTranslate = inputTextArea.value;
  fetch(`${url}?text=${textToTranslate}`)
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      console.log(translatedText);
      outputTextArea.innerText = translatedText;
    })
    .catch((error) => console.log(error));
}
