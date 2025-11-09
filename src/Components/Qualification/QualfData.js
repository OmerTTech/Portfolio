// src/components/QualfData.jsx
import React from "react";

export const workExperience = [
  {
    title: "ICT Intern",
    company: "ATL Academy",
    years: "01.2023 - 06.2024",
  },
  {
    title: "ICT Intern Leader",
    company: "ATL Academy",
    years: "09.2024 - 06.2025",
  },
];

export const education = [
  {
    title: "IKT Alman DUAL",
    company: "Bsiivec",
    years: "09.2022 - 06.2025",
  },
  {
    title: "Frontend Development Course",
    company: "ATL Academy",
    years: "12.2023 - 01.2025",
  },
  {
    title: "Bachelor degree- IT",
    company: "Baku Business University",
    years: "09.2025 - Present",
  },
];
const QualfManuelDatas = { // Diziden Obje yapısına geçmek daha esnek olur
    workExperience,
    education
};

export default QualfManuelDatas;