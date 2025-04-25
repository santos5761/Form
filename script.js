const img = document.getElementById("img");
const container = document.querySelector(".container");
const subtitulos = document.querySelectorAll("label");
const texts = document.querySelectorAll('input')

var dark = false;

img.addEventListener("click", function () {
  //modo escuro

  if (dark === false) {
    img.src =
      "https://th.bing.com/th/id/OIP.MdNGzu_K9zYiarfbeNypngHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.7&pid=1.7";

    container.style.background = "#0e0f15";
    container.style.border = "1px solid white";

    subtitulos.forEach((subtitulo) => {
      subtitulo.style.color = "#f3f3f3";
    });
    texts.forEach((text)=>{
        text.style.color = '#f3f3f3'
    })

    dark = true;
  }

  //modo claro
  else if (dark === true) {
    img.src =
      "https://th.bing.com/th/id/OIP.ytK9nw8UF5tkE3Lt_cNg-AHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7";

    container.style.background = "#eee";

    subtitulos.forEach((subtitulo) => {
      subtitulo.style.color = "black";
    });
    texts.forEach((text)=>{
        text.style.color = 'black';
    })

    dark = false;
  }
});
