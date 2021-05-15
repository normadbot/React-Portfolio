import React from "react";
import covid19Image from "../../assets/covid19-trackerImage.jpg";
import whatsAppCloneImage from "../../assets/whatsapp-clone.jpg";
import expenseTrackerImage from "../../assets/ExpenseTracker-dummy.jpg";
import foodCartImage from "../../assets/Food-MealDummyApp.jpg";
import travelVlogImage from "../../assets/Travel-Dummy.jpg";
import dsaImage from "../../assets/DSA.png";
import { DiReact,DiJava,DiGithubBadge ,DiChrome} from "react-icons/di";
import { SiApachemaven ,SiMysql,SiSpring} from "react-icons/si";
export const projectsDataLayer1 = [
  {
    title: "Covid19-Tracker",
    description: "Covid19-tracker webapp built using React JS+firebase hosting",
    imageUrl: covid19Image,
    link: "https://github.com/normadbot/Covid-19-Tracker-React",
    key: "1",
  },

  {
    title: "WhatsApp Clone",
    description:
      "WhatsApp Clone(Chat Rooms) built using React JS + Firebase(Auth + Hosting)",
    imageUrl: whatsAppCloneImage,
    link: "https://github.com/normadbot/whatsApp-Clone",
    key: "2",
  },

  {
    title: "Expense Tracker",
    description:
      "Expense Tracker application built using React JS + React Context API",
    imageUrl: expenseTrackerImage,
    link: "https://github.com/normadbot/ExpenseTracker-Dummy",
    key: "3",
  },
];

export const projectsDataLayer2 = [
  {
    title: "Food Meal-Cart Application",
    description: "Food cart using React JS + context API",
    imageUrl: foodCartImage,
    link: "https://github.com/normadbot/React-FoodMeal",
    key: "4",
  },

  {
    title: "Travel Vlog-WebApp",
    description: "Travel Vlog website using React JS",
    imageUrl: travelVlogImage,
    link: "https://github.com/normadbot/Travel-Dummy-website",
    key: "5",
  },

  {
    title: "DataStructures",
    description: "DSA Java based solutions to problem solved",
    imageUrl: dsaImage,
    link: "https://github.com/normadbot/DATA_STRUCTURE_2",
    key: "6",
  },
];

export const tools = [
  {
    name: "Java",
    icon: <DiJava/>,
  },
  {
      name:'Maven',
      icon:<SiApachemaven/>

  },
  {
    name: 'Spring',
    icon: <SiSpring />
  },
  {
    name: "React",
    icon: <DiReact />,
  },
  {
    name: 'Git',
    icon: <DiGithubBadge />
  },
  {
    name: 'SQL',
    icon: <SiMysql />
  },
  
  {
    name: 'Chrome',
    icon: <DiChrome />
  },
];
