// My custom JavaScript
function typpingEffect() {
  const text = "I am Marcel Ramos";
  //get the element where it will be placed
  const typingElement = document.getElementById("typing-text");
  //how long gonna last each typing in miliseconds?
  const typingDelay = 150;

  // Cleans <h1> content (it can't be empty to comply with SEO and accessibility)
  typingElement.textContent = "";
  typingElement.classList.remove("typing-hiden");
  typingElement.classList.add("text-white");

  //the function that will actually do the typing
  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    //the 2nd is the amount of time you want to wait the function the you put inside the function body{}
    setTimeout(() => {
      typingElement.textContent += text.charAt(i); //it will append the text in the h1. the text is each letter in the const text
    }, delay * i);
  }
}

//run the function typing effect when the DOM get loaded:
document.addEventListener("DOMContentLoaded", typpingEffect);

/****************************************************************/
//CUSTOM MODAL:
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona SÓ as imagens que têm data-bs-toggle="modal"
  document
    .querySelectorAll('.portfolio-img[data-bs-toggle="modal"]')
    .forEach(function (img) {
      img.addEventListener("click", function () {
        // Coleta os dados dos atributos data-*
        const imgSrc = img.src;
        const title = img.dataset.title || "";
        const desc = img.dataset.desc || "";
        const link = img.dataset.link || "#";

        // Popula o modal Bootstrap
        document.getElementById("modalImg").src = imgSrc;
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDesc").textContent = desc;
        document.getElementById("modalLink").href = link;
      });
    });
});
