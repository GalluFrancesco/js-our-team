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

  }
