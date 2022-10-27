AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/AIISC.png",
    place: "AI Institute at University of South Calafornia",
    time: "(Sept, 2022 - present)",
    desp: "<li>Working on Joint Embeddings for Images and text along with Memotion 3.0",
  },
  {
    title: "Computer Vision Intern",
    cardImage: "assets/images/experience-page/sporti_black.jpeg",
    place: "Sportifan",
    time: "(May - Aug, 2022)",
    desp: "<li>Build a Complete Player Analysis and Tracking systetm using Yolo V5 and DeepSorting </li><li> Developed a mechanism for real time image warping using homography transformation from 3D to 2D plane</li><li>Developed an Autonomous player Heatmap generation from 3D video on 2D pitch </li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/iiitnr.png",
    place: "IIIT, Raipur",
    time: "(Feb, 21 - present)",
    desp: "<li>Working on Head and Neck OAR segmentation on Computed Tomography Images Using Federated Learning</li><li>Developed an Automated Smartphone-Based Pulse Grain Quality Analysis using Machine Learning </li><li>Developed an Intelligent Device for Rapid Screening of Pulse Adulterant with Machine Learning</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Core Team Member",
    cardImage: "assets/images/experience-page/aiml.png",
    description:
      "Conducted Seminar, Hands-On, and doubt classes for junior’s.",
  },
  {
    title: "Core Team Member",
    cardImage: "assets/images/experience-page/comet.png",
    description:
      "Conducted Seminar, Hands-On, and doubt classes for junior’s.",
  },
  {
    title: "Head in charge of E-Sports",
    cardImage: "assets/images/experience-page/atharb.png",
    description:
      "Responsible for Conduction of E-Sports activity in the University.",
  },
  {
    title: "Technical Event Lead",
    cardImage: "assets/images/experience-page/technova.png",
    description:
      "Responsible for conduction of event at Technovate , University biggest tech fest.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

