//constantes
const txt = document.getElementById("in");
const but = document.getElementById("out");
const vl = txt.value;

let memoria0 = JSON.parse(localStorage.getItem("memoria"));

let hi;

//funciones externas
//#msg#//
function msg() {
  //variables
  hi = {
    0: "Hola",
  };

  let len = Object.keys(hi);
  if (localStorage.getItem("memoria")) {
    hi = memoria0;
  } else {
    save();
  }
  //crear elementos
  let me = document.getElementById("me");
  let bot = document.getElementById("bot");
  let newPm = document.createElement("p");
  let newPb = document.createElement("b");
  let textm = document.createTextNode(txt.value);
  let skip = document.createElement("br");
  /*fuera de elementos*/

  //extra(necesario)
  for (var a = 0; a < len.length; a++) {
    //filtros
    if (txt.value) {
      //RNG
      let nameRan = Object.values(hi);
      let lenRan = nameRan.length;
      let ran = Math.random() * lenRan;
      let rand = Math.floor(ran);
      /*fin de rng*/
      //elemento
      let textb = document.createTextNode(nameRan[rand]);
      let user = document.createElement("h3");
      let userId = document.createTextNode("👤");
      let botId = document.createTextNode("🤖");
      let separator = document.createElement("div");
      let saludos = document.createTextNode("Hola");
      let quien = document.createTextNode("Te pregunto");
      let pregunto = document.createTextNode("A ti");
      let dat = document.createTextNode(nameRan);
      //crear bloques
      me.appendChild(separator);
      //creando div ^
      separator.appendChild(user);
      //creando h3 ^
      separator.appendChild(userId);
      //identificador de mensaje ^
      user.appendChild(newPm);
      newPm.appendChild(textm);
      //mensaje
      ///////////////////////////
      me.appendChild(user);
      user.appendChild(botId);
      user.appendChild(newPb);

      if (txt.value == "Hola") {
        newPb.appendChild(saludos);
      } else {
        if ("Quien " == txt.value) {
          newPb.appendChild(quien);
        } else {
          if ("Te pregunto " == txt.value) {
            newPb.appendChild(pregunto);
          } else {
            if (txt.value == "${}") {
              newPb.appendChild(dat);
            } else {
              newPb.appendChild(textb);
            }
          }
        }
      }

      /*fuera de bloques*/
      if (hi[a] != txt.value) {
        let obname = JSON.parse(localStorage.getItem("identify"));

        //creando objeto 40
        console.log(`el bot conoce ${lenRan} y aprendio una nueva`);
        newObj(txt.value, txt.value);
        save();
      }
    }
  }
  /*fuera de bucle for*/
  //#save#//
  function save() {
    let hitxt = JSON.stringify(hi);
    localStorage.setItem("memoria", hitxt);
  }
}
//funciones internas

//#newObj#//
function newObj(name, value) {
  /*crea un nuevo objeto
  para la memoria*/
  hi[name] = value;
}
//#clean#//
function clean() {
  //limpia el input de texto
  txt.value = "";
}
/*Fin de funciones internas*/
//exportar
export { txt, but, msg, clean };
