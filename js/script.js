//creo una funzione che riceve come argomenti
//nome, ruolo e nome immagine
//e restituisce una teamCard
function newCard(name, role, img){
  
  //creo un elemento html div
  let teamCard=document.createElement('div');
  //aggiungo la classe team-card
  teamCard.classList.add("team-card");

  //creo un elemento html div
  let cardImg=document.createElement('div');
  //aggiungo al div la classe card-img
  cardImg.classList.add("card-image");

  //creo un elemento html img
  let htmlImg=document.createElement('img');
    //riempio il campo src dell'elemento div con il testo
    //che ricevo come parametro nella funzione
    htmlImg.src=`img/${img}`;

  //creo un elemento html div
  let cardTxt=document.createElement('div');
  //aggiungo al div la classe card-text
  cardTxt.classList.add("card-text");

  //creo 2 elementi html, un h3 e un p
  let htmlName=document.createElement("h3");
  let htmlRole=document.createElement('p');
    //riempio i due elementi con i parametri della funzione
    htmlName.innerHTML=`${name}`;
    htmlRole.innerHTML=`${role}`;
  
  //inserisco nel div cardImg l'elemento img
  cardImg.append(htmlImg);
  //inserisco nel div cardTxt i 2 elementi h3 e p
  cardTxt.append(htmlName, htmlRole);
  
  //inserisco in teamCard i 2 div generati sopra
  teamCard.append(cardImg, cardTxt);

  return teamCard
}

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  const container=document.querySelector('.team-container');
  
  //ciclo l'array team di oggetti
  for(let i=0; i<team.length; i++){
    
    //creo delle variabili che riempirò di volta in volta
    //con le key dell'oggetto 
    //in posizione i-esima del mio array
    let nameMember=team[i].name;
    let roleMember=team[i].role;
    let imgMember=team[i].image;

    //stampo con un console.log per verificare
    console.log(nameMember, roleMember, imgMember)
    container.append(newCard(nameMember, roleMember, imgMember));
  }
