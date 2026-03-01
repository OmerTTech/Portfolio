import React from "react";
import AIT_stats from "./image2.png";

const portfolioSlides = [
  {
    id: 1,
    image: AIT_stats,
    title: "AIT stats",
    text: "This project is a student-teacher management system built with React. It features secure role-based access using JWT and communicates with \n a JSON-Server mini backend via Axios.",
    demoLink: "http://ait-stats.netlify.app",
    categories: ["react", "javascript", "fullstack"],
  },
  {
    id: 2,
    image: AIT_stats,
    title: "E-Commerce Shop",
    text: "A modern e-commerce platform with shopping cart, user authentication, and payment integration.",
    demoLink: "#",
    categories: ["react", "typescript", "nodejs"],
  },
  {
    id: 3,
    image: AIT_stats,
    title: "Portfolio Website",
    text: "Personal portfolio showcasing projects and skills with dark mode support.",
    demoLink: "#",
    categories: ["react", "javascript"],
  },
  {
    id: 4,
    image: AIT_stats,
    title: "Task Manager",
    text: "Full-stack task management application with real-time updates.",
    demoLink: "#",
    categories: ["nextjs", "typescript", "fullstack"],
  },
];

export const filterCategories = [
  { id: "all", label: "all" },
  { id: "react", label: "react" },
  { id: "nextjs", label: "nextjs" },
  { id: "javascript", label: "javascript" },
  { id: "typescript", label: "typescript" },
  { id: "nodejs", label: "nodejs" },
  { id: "fullstack", label: "fullstack" },
];

export default portfolioSlides;
