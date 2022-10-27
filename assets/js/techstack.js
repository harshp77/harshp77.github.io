AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/tf.png",
    langName: "Tensorflow and Tensorflow Federated",
    langDesc: "<li>TensorFlow is a free and open-source software library for machine learning and artificial intelligence</li>",
  },
  {
    langImage: "assets/images/techstack-page/torch.png",
    langName: "PyTorch",
    langDesc: "<li>PyTorch is a machine learning framework based on the Torch library, used for applications such as computer vision and natural language processing</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
    
  {
    langImage: "assets/images/techstack-page/monai.png",
    langName: "MONAI",
    langDesc: "<li>MONAI is a freely available, community-supported, PyTorch-based framework for deep learning in healthcare imaging</li>",
  },
  {
    langImage: "assets/images/techstack-page/open-cv.png",
    langName: "Open-CV",
    langDesc: "<li>OpenCV is a library of programming functions mainly aimed at real-time computer vision.</li>",
  },
    
  {
    langImage: "assets/images/techstack-page/sci.png",
    langName: "SciKit-Learn",
    langDesc: "<li>Simple and efficient tools for predictive data analysis · Accessible to everybody, and reusable in various contexts </li>",
  },
  {
    langImage: "assets/images/techstack-page/med.png",
    langName: "MediaPipe",
    langDesc: "<li>MediaPipe is a cross-platform pipeline framework to build custom machine learning solutions for live and streaming media</li>",
  },
  {
    langImage: "assets/images/techstack-page/ope.png",
    langName: "OpenAi-Gym",
    langDesc: "<li>OpenAI gym is an environment for developing and testing learning agents</li>",
  },
  {
    langImage: "assets/images/techstack-page/evalml_logo.png",
    langName: "Eval-ML",
    langDesc: "<li>EvalML is an AutoML library which builds, optimizes, and evaluates machine learning pipelines using domain-specific objective functions.</li>",
  },
  {
    langImage: "assets/images/techstack-page/sea.png",
    langName: "Seaborn",
    langDesc: "<li>Seaborn is a Python data visualization library based on matplotlib. It provides a high-level interface for drawing attractive and informative statistical graphics.</li>",
  },
  {
    langImage: "assets/images/techstack-page/num.png",
    langName: "Numpy",
    langDesc: "<li>NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices</li>",
  },
  {
    langImage: "assets/images/techstack-page/pan.png",
    langName: "Pandas",
    langDesc: "<li>pandas is a software library written for the Python programming language for data manipulation and analysis</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/itk.png",
    langName: "ITK-Snap",
    langDesc: "<li>ITK-SNAP is an interactive software application that allows users to navigate three-dimensional medical images, manually delineate anatomical regions of interest, and perform automatic image segmentation.</li>",
  },

  {
    langImage: "assets/images/techstack-page/3ds.png",
    langName: "3D-Slicer",
    langDesc: "<li>3D Slicer is a free and open source software package for image analysis and scientific visualization.</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
