// h1 { color:red}  objetos
//.parrafito {....}  clase
// #pid {...}  id


const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerText = "gonorreo"
console.log(h1.getAttribute("class"))//para agarrar el nombre de la clase
h1.setAttribute("class", "rojo")//para cambiar el nombre de la clase
//h1.classList.add("rojo") //para agregarle un clase al elemento
//h1.classList.remove("jiji")//para remover una clase puntual


//h1.classList.toggle("rojo") //agregar o quitar clases dependiendo de la forma como ejecutemos
//h1.classList.contains("jiji")//devuelve true o false dependiendo si el elemento tiene o no la clase

input.value = "456"

const img= document.createElement("img")
img.setAttribute("src","https://www.mypokecard.com/es/Galeria/my/galery/Iaq4glh23FiT.jpg")
console.log(img)

pid.append(img)