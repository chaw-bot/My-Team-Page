const crewContainer = document.querySelector('.crew-container');

const crewMembers = [
  {
    id: 1,
    name: "Bill Mahoney",
    role: "Product&nbsp;&nbsp;Owner",
    image: "photo1.png",
  },
  {
    id: 2,
    name: "Saba Cabrera",
    role: "Art&nbsp;&nbsp;Director",
    image: "photo2.png",
  },
  {
    id: 3,
    name: "Shae Le",
    role: "Tech&nbsp;&nbsp;Lead",
    image: "photo3.png",
  },
  {
    id: 4,
    name: "Skylah Lu",
    role: "UX&nbsp;&nbsp;Designer",
    image: "photo4.png",
  },
  {
    id: 5,
    name: "Griff Richards",
    role: "Developer",
    image: "photo5.png",
  },
  {
    id: 6,
    name: "Stan John",
    role: "Developer",
    image: "photo6.png",
  },
];



const displayCrew = () => {
  let htmlText = `<ul class="crew">`;
                    crewMembers.map((member) => {
                      htmlText +=`<li class="member" key=${member.id}>
                                    <div class="details">
                                      <img src="images/${member.image}" alt=${member.name} />
                                      <h4>${member.role}</h4>
                                    </div>
                                    <h3>${member.name}</h3>
                                  </li>`;
                      })          
      htmlText +=`</ul>`;

  crewContainer.innerHTML = htmlText;
};

displayCrew();
