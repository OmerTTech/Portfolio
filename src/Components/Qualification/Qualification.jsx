import React, { useState, useEffect } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { API } from "../../Services/Api.js";
import { useSelector } from "react-redux";
import translations from "../../Utils/translations";

import QualfManuelDatas from "./QualfData.js";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("workExperience");
  const [qualfData, setQualfData] = useState([]);
  const lang = useSelector((state) => state.language.lang);
  const t = translations[lang];

  useEffect(() => {
    const fetchQualfData = async () => {
      try {
        const response = await API.qualf.getByCategory(activeTab);
        const apiData = response.data;

        // 1. API'den veri gelmezse (boş dizi, null, undefined)
        if (!apiData || apiData.length === 0) {
          console.warn("API'den veri gelmedi. Manuel veriye geçiliyor.");

          // 2. activeTab'a göre manuel veriyi seç
          setQualfData(QualfManuelDatas[activeTab] || []);
        } else {
          // API'den başarılı bir şekilde veri geldi
          console.log("API'den gelen veri:", apiData);
          setQualfData(apiData);
        }
      } catch (error) {
        // 3. API çağrısı HATA verirse (ağ hatası, 404, 500 vb.)
        console.error(
          "Nitelik verisi çekilirken hata oluştu. Manuel veriye geçiliyor:",
          error
        );

        // activeTab'a göre manuel veriyi seç
        setQualfData(QualfManuelDatas[activeTab] || []);
      }
    };
    fetchQualfData();
  }, [activeTab, lang]);

  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <h1 className="text-4xl font-[600]">{t.qualification.title}</h1>
        <p className="text-sm text-dark-hover dark:text-morelight-hover">
          {t.qualification.subtitle}
        </p>
      </div>

      <div className="flex justify-center gap-8 mb-12 *:cursor-pointer">
        <button
          className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-colors duration-300 ${
            activeTab === "workExperience"
              ? "text-main dark:text-hover bg-sky-100"
              : "text-secondary hover:text-main"
          }`}
          onClick={() => setActiveTab("workExperience")}
        >
          <FaBriefcase size={24} />
          <span className="text-lg font-medium">{t.qualification.work}</span>
        </button>
        <button
          className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-colors duration-300 ${
            activeTab === "education"
              ? "text-main dark:text-hover bg-sky-100"
              : "text-secondary hover:text-main"
          }`}
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap size={24} />
          <span className="text-lg font-medium">{t.qualification.education}</span>
        </button>
      </div>

      <div className="relative mx-auto max-w-xl px-0 sm:px-6 lg:px-8">
        {qualfData.length === 0 ? (
          <div>Loading...</div> // Buraya API'den gelmediyse "Veri bulunamadı" da eklenebilir.
        ) : (
          qualfData.map((item, index) => (
            <TimelineItem
              key={item._id || index} // Manuel veride _id olmayacağı için index'i de ekledim
              {...item}
              isLeft={index % 2 === 0}
              isLast={index === qualfData.length - 1}
            />
          ))
        )}
      </div>
    </div>
  );
};

const TimelineItem = ({ title, company, years, isLeft, isLast }) => {
  // ... (TimelineItem kodunda değişiklik yok)
  return (
    <div className={`relative ${!isLast && "pb-8"}`}>
      {!isLast && (
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-main transform -translate-x-1/2"></div>
      )}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-main z-10"></div>

      <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
        <div className="w-1/2 px-0 sm:px-4">
          <div
            className={`p-4 pt-0 -mt-3 rounded-lg ${
              isLeft ? "mr-auto" : "ml-auto"
            }`}
          >
            <h3 className="text-md sm:text-lg font-semibold text-dark dark:text-morelight-hover">
              {title}
            </h3>
            <p className="text-[14px] sm:text-sm text-secondary dark:text-white mb-1">
              {company}
            </p>
            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
              {years ? (
                <LuCalendarDays className="-mt-[3px] sm:mt-0 mr-1 text-md sm:text-lg" />
              ) : (
                ""
              )}
              <span>{years}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
