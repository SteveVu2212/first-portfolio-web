// import Work1 from "../../assets/work1.jpg";
// import Work2 from "../../assets/work2.jpg";
// import Work3 from "../../assets/work3.jpg";
// import Work4 from "../../assets/work4.jpg";
// import Work5 from "../../assets/work5.jpg";

import house from "../../assets/house-rent.webp";
import sprint_card from '../../assets/sprint-cards.png'
import baseball from "../../assets/baseball.webp";
import image_search from "../../assets/image-search.webp";
import pension from "../../assets/pension.webp";
import admin_dashboard from "../../assets/admin-dashboard.png";

export const projectsData = [
  {
    id: 1,
    image: house,
    title: "House Rental Web",
    category: "web",
    link: "https://github.com/SteveVu2212/org-rental-app",
  },
  {
    id: 2,
    image: sprint_card,
    title: "Sprint Cards",
    category: "web",
    link: "https://github.com/SteveVu2212/sprint-cards",
  },
  {
    id: 3,
    image: baseball,
    title: "Baseball Analytics",
    category: "modeling",
    link: "https://github.com/SteveVu2212/Bayes_for_Baseball_analytics",
  },
  {
    id: 4,
    image: pension,
    title: "Pension Benchmark Modeling",
    category: "modeling",
    link: "https://github.com/SteveVu2212/SteveVu2212.github.io",
  },
  {
    id: 5,
    image: image_search,
    title: "Image Search Model",
    category: "modeling",
    link: "https://github.com/SteveVu2212/Image-to-Image-Search",
  },
  {
    id: 6,
    image: admin_dashboard,
    title: "Admin Dashboard",
    category: "dataviz",
    link: "https://administration-dashboard.netlify.app/",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "modeling",
  },
  {
    name: "dataviz",
  },
];
