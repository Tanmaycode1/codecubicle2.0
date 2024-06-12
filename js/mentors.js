const mentors = [
  {
    name: "Saksham Verma",
    image: "images/mentors/IMG_6825.jpg",
    description: "",
    social: {
      linkedin:
        "https://www.linkedin.com/in/saksham-verma-a9390b256/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      insta: "",
    },
  },
  {
    name: "Akshay Kumar Sharma",
    image: "images/mentors/akshay.jpg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/akshay-kumar-sharma-devvoyager",
      insta: "",
    },
  },
  {
    name: "Akhil Ryan",
    image: "images/mentors/Akhil.jpg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/im-akhil-kumar",
      insta: "",
    },
  },
  {
    name: "Avanish Kumar Singh",
    image: "images/mentors/Avinash.jpg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/avanishh",
      insta: "",
    },
  },
  {
    name: "Chinmay Pant",
    image: "images/mentors/chinmay.jpg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/chinmaypant",
      insta: "",
    },
  },
  {
    name: "Harsh Mahajan",
    image: "images/mentors/Harsh_Mahajan.jpg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/harsh-mahajan-2345black?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "",
    },
  },
  {
    name: "Yash Kataria",
    image: "images/mentors/Yash_Kataria.jpg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/kataria-yash/",
      insta: "",
    },
  },
  {
    name: "Mohammad Mudassir",
    image: "images/mentors/Md.jpg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/mohammad-mudassir-b788a41ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      insta: "",
    },
  },
  {
    name: "Mustafa Azad",
    image: "images/mentors/Mustafa.jpg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/mustafaazad03",
      insta: "",
    },
  },
  {
    name: "Shivam Goyal",
    image: "images/mentors/Shivam_Goyal.jpeg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/shivamgoyall/",
      insta: "",
    },
  },
  {
    name: "Neha Gupta",
    image: "images/mentors/Neha.jpg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/neha-gupta-696135174/",
      insta: "",
    },
  },{
    name: "Vani Mittal",
    image: "images/mentors/VANI_MITTAL.jpg",
    description: "",
    social: {
      linkedin: "https://linktr.ee/vanimittal",
      insta: "",
    },
  },
  
  {
    name: "Aditya Singh",
    image: "images/mentors/Aditya.jpg",
    description: "",
    social: {
      linkedin:
        "https://www.linkedin.com/in/adiii11/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "",
    },
  },
  {
    name: "Suhani Nagpal",
    image: "images/mentors/Suhani.jpeg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/suhani-nagpal072/",
      insta: "",
    },
  },
  {
    name: "Tanmay Arora",
    image: "images/mentors/tanmay.jpeg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/tanmaycode1",
      insta: "",
    },
  },
  {
    name: "Harshita Gupta",
    image: "images/mentors/harshita.jpeg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/harshita-gupta-03b6b125b",
      insta: "",
    },
  },
  {
    name: "Mayank Mahajan",
    image: "images/mentors/mayank.jpeg",
    description: "",
    social: {
      linkedin: "linkedin.com/mayankpmahajan",
      insta: "",
    },
  },

  {
    name: "Rudra Pratap Dash",
    image: "images/mentors/rudra.jpeg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/rudra-pratap-dash-b2ab16267",
      insta: "",
    },
  },
  {
    name: "Arnav Kohli",
    image: "images/mentors/arnav.jpeg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/arnav-kohli",
      insta: "",
    },
  },
  {
    name: "Archit Kohli",
    image: "images/mentors/archit.jpeg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/archit-kohli/",
      insta: "",
    },
  },
  {
    name: "Siddharth Verma",
    image: "images/mentors/siddharth.jpeg",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/siddharth-verma-53981a256",
      insta: "",
    },
  },
];

// Get the container element
const cardContainer = document.querySelector(".cardContainer");

// Function to create a card for each mentor
function createMentorCard(mentor) {
  const card = document.createElement("div");
  card.classList.add("card-container");

  const imageContainer = document.createElement("a");
  imageContainer.href = mentor.social.linkedin; // Set href to LinkedIn URL
  imageContainer.target = "_blank"; // Open link in a new tab
  imageContainer.classList.add("hero-image-container");

  const image = document.createElement("img");
  image.classList.add("hero-image");
  image.src = mentor.image;
  image.alt = mentor.name;

  imageContainer.appendChild(image);
  card.appendChild(imageContainer);

  return card;
}

// Function to render all mentor cards
function renderMentorCards(mentors) {
  mentors.forEach((mentor) => {
    const card = createMentorCard(mentor);
    cardContainer.appendChild(card);
  });
}

// Render mentor cards when the page loads
window.onload = function () {
  renderMentorCards(mentors);
};
