//creato array di oggetti
const char = [
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    img: 'img/angela-caroll-chief-editor.jpg'
  },
  {
    nome:'Walter Gordon',
    ruolo:'Office Manager',
    img:'img/walter-gordon-office-manager.jpg'
  },
  {
    nome:'Angela Lopez',
    ruolo:'Social Media Manager',
    img:'img/angela-lopez-social-media-manager.jpg'
  },
  {
    nome:'Scott Estrada',
    ruolo:'Developer',
    img:'img/scott-estrada-developer.jpg'
  },
  {
    nome:'Barbara Ramos',
    ruolo:'graphic Designer',
    img:'img/barbara-ramos-graphic-designer.jpg'
  }
]

const container = document.querySelector(".team-container");
const btn = document.querySelector("#addMemberButton");

console.log(char);

//funzione che permette all'utente di inserire card personalizzate
btn.addEventListener("click", function(){
  let personalName = document.getElementById("name").value;
  let personalRole = document.getElementById("role").value;
  let personalImg = document.getElementById("image").value;

  const personalChar = {
    name: personalName,
    role: personalRole,
    img: personalImg
  }
  
  char.push(personalChar);
  console.log(char);
  container.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${personalImg}"/>
      </div>
      <div class="card-text">
      <h3>${personalName}</h3>
      <p>${personalRole}</p>
    </div>
  </div>
`
});

//ciclo che inserisce tutte le card in html
for(let index in char){
  const newChar = char[index];
  const newName = newChar.nome;
  const newRole = newChar.ruolo;
  const newImg = newChar.img;


  container.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${newImg}"/>
      </div>
      <div class="card-text">
      <h3>${newName}</h3>
      <p>${newRole}</p>
    </div>
  </div>
`
;
};
