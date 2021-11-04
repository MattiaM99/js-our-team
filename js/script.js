
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


console.log(char);

const nuovoChar = {
  nome: prompt('inserisci nome'),
  ruolo: prompt('inserisci ruolo'),
  img: prompt('inserisci url immagine') 
};

char.push(nuovoChar);


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
