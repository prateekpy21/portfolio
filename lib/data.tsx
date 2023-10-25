import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
//Adding a dummy iamge for project for now
import dummyProjectImg from '@/public/static/images/dummyProjectImg.jpg'
// Images of Projects
// import corpcommentImg from "@/public/corpcomment.png"; 
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

// Defines the different links on the page
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const //This is to hard core and make strict that the data is same as it is mentioned above;

// Defination of different experiences and studies
export const experiencesData = [
  {
    title: "M.Tech Information Technology",
    location: "New Delhi, IN",
    description:
      "I completed my masters  and after 8 months of study I immediately found a job as a Application Specialist.",
    icon: <LuGraduationCap/>,
    date: "2019-2021",
  },
  {
    title: "Application Specialist",
    location: "Noida, IN",
    description:
      "I worked as a Application Specialist for 1.4 years for BirchStreet System. I also upskilled to the full stack by joining Scaler.",
    icon: <CgWorkAlt/>,
    date: "May,2022 - August,2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Delhi, IN",
    description:
      "I'm now looking for oppurtunites as a Full-stack Developer role and everyday learning and evolving my skills. My stack includes React, Next.js, TypeScript, Tailwind, Python, Django and MongoDB. I'm open to full-time opportunities.",
    icon: <FaReact/>,
    date: "2023 - present",
  },
] as const;




// This is data for project add once projects are completed 

export const projectsData = [
  {
    title: "Demo1",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: dummyProjectImg,
  },
  {
    title: "Demo2",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: dummyProjectImg,
  },
  {
    title: "Demo3",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: dummyProjectImg,
  },
] as const;

// Skill section defination 
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "SQL",
  "MySQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "AWS",
  "Docker",
] as const;
