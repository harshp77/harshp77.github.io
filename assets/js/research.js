/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Head and Neck Tumor semantic segmentation on Computed Tomography Images",
    authors:
      "H. Pandey, S. Arya, D. Das, V. Udutalapally",
    conferences:
      "--In Progress--",
    researchYr: 2022,
//    citebox: "popup1",
    image: "assets/images/research-page/OARR.jpg",
    citation: {
      vancouver:
        "--In Progress--",
    },
    abstract:
      "",
    absbox: "absPopup1",
  },

  {
    title: "DaQua: Automated Smartphone-Based Pulse Grain Quality Analysis using Machine Learning",
    authors:
      "H. Pandey, S. Arya, D. Das, V. Udutalapally",
    conferences:
      "glob. food sec., Elsevier",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/daqua.png",
    citation: {
      vancouver:
        "Under Review",
    },
    abstract:
      "",
    absbox: "absPopup2",
  },
  {
    title: "FoodExpert: Intelligent Device for Rapid Screening of Pulse Adulterant with Machine Learning",
    authors:
      "H. Pandey, S. Arya, D. Das, V. Udutalapally",
    conferences:
      "IEEE Sensors Journal",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/foodExp.png",
    citation: {
      vancouver:
        "Under Review",
    },
    abstract:
      "",
    absbox: "absPopup2",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
