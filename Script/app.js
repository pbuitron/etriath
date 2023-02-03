

window.addEventListener("load", function () {
  document.querySelector(".loader-container").style.display = "none";
  document.querySelector(".content").style.display = "block";
});

class Cards {
  constructor (nombre, descripcion, img){
    this.nombre=nombre
    this.descripcion=descripcion
    this.img=img
  }
}



let ArrayCards = [];

  let card1 = new Cards(`Decadas de Experiencia`,`Somos Lideres globales en el transporte de desechos`,`./image/iconos/icon-1.webp` )
  let card2 = new Cards( `Equipo Profesional`,`Somos Lideres globales en el transporte de desechos`,`./image/iconos/icon-2.webp` )
  let card3 = new Cards(`Amamos los desafios`,`Somos Lideres globales en el transporte de desechos`,`./image/iconos/icon-3.webp`)
  let card4 = new Cards(`Amplio Portfolio de Clientes`,`Somos Lideres globales en el transporte de desechos`,`./image/iconos/icon-4.webp`)
  
  ArrayCards.push(card1)
  ArrayCards.push(card2)
  ArrayCards.push(card3)
  ArrayCards.push(card4)
  


const contenedorPadre = document.getElementById(`sh2`)

ArrayCards.forEach(tarjeta =>
  {
  contenedorPadre.innerHTML += `

  <div class="col">
    <div class="card">
      <img src="${tarjeta.img}" class="card-img-top card1 text-center" alt="...">
      <div class="card-body">
        <h5 class="card-title fs-1 fw-bolder text-center">${tarjeta.nombre}</h5>
        <p class="card-text text-center">${tarjeta.descripcion}</p>
      </div>
    </div>
  </div>
  `
 
})




