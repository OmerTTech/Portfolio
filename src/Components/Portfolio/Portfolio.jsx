import React, { useState, useEffect, useMemo } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "@mui/material/Button";
import { API } from "../../Services/Api.js";
import { useSelector } from "react-redux";
import translations from "../../Utils/translations";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState(["all"]);
  const [loading, setLoading] = useState(true);
  const lang = useSelector((state) => state.language.lang);
  const t = translations[lang];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.portfolio.getAll();
        setProjects(response.data);
      } catch (error) {
        console.error("Portfolio fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [lang]);

  const allTools = useMemo(() => {
    const tools = new Set();
    projects.forEach((project) => {
      if (project.tools && Array.isArray(project.tools)) {
        project.tools.forEach((tool) => tools.add(tool));
      }
    });
    return Array.from(tools);
  }, [projects]);

  // Kategori filtreleri için kullanılacak buton/etiketler için (KULLANILIYOR)
  const filterCategories = useMemo(() => {
    const categories = [{ id: "all", label: t?.portfolio?.all || "All" }];
    allTools.forEach((tool) => {
      categories.push({
        id: tool,
        label: translations[lang]?.portfolio?.[tool.toLowerCase()] || tool,
      });
    });
    return categories;
  }, [allTools, lang, t]);

  // Filtre butonları için event handler
  const handleFilterClick = (filterId) => {
    setSelectedFilters((prev) => {
      if (filterId === "all") return ["all"];
      const newFilters = prev.filter((f) => f !== "all");
      if (newFilters.includes(filterId)) {
        const updated = newFilters.filter((f) => f !== filterId);
        return updated.length === 0 ? ["all"] : updated;
      }
      return [...newFilters, filterId];
    });
    setCurrentSlideIndex(0); // Filtre değiştiğinde ilk projeye dön
  };

  // Projelere filtre uygula
  const filteredProjects = useMemo(() => {
    if (selectedFilters.includes("all")) {
      return projects;
    }
    return projects.filter((project) =>
      project.tools?.some((tool) => selectedFilters.includes(tool))
    );
  }, [projects, selectedFilters]);

  // Sağa kaydır
  const handleNextSlide = () => {
    if (filteredProjects.length > 0) {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % filteredProjects.length
      );
    }
  };

  // Sola kaydır
  const handlePrevSlide = () => {
    if (filteredProjects.length > 0) {
      setCurrentSlideIndex(
        (prevIndex) =>
          (prevIndex - 1 + filteredProjects.length) % filteredProjects.length
      );
    }
  };

  // Şu anki projeyi hazırla
  const currentProject = filteredProjects[currentSlideIndex] || {};

  if (loading) {
    return <div className="pt-20 text-center">Loading...</div>;
  }

  return (
    <div className="pt-20">
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <h1 className="text-4xl font-[600]">{t?.portfolio?.title || "Portfolio"}</h1>
        <p className="text-sm text-dark-hover dark:text-morelight-hover">
          {t?.portfolio?.subtitle || "Most recent work"}
        </p>
      </div>

      {/* Filtre Butonları */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleFilterClick(cat.id)}
            className={`px-4 py-2 rounded-full font-medium border transition-all duration-200 focus:outline-none ${
              selectedFilters.includes(cat.id)
                ? "bg-main text-white border-main shadow"
                : "bg-white dark:bg-dark border-gray-300 text-main dark:text-light-hover hover:bg-main hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Ana Flex Konteyneri */}
      <div className="flex">
        {/* Sol Ok Div'i */}
        <div className="w-[5%] flex justify-center items-center h-[320px]">
          <button
            onClick={handlePrevSlide}
            className="text-5xl text-main dark:text-light-hover hover:text-moredark-hover transition-colors duration-300 hidden md:block"
            aria-label="Previous project"
          >
            <FaArrowLeft />
          </button>
        </div>

        {/* Ana İçerik Div'i */}
        <div className="flex-grow">
          {filteredProjects.length === 0 ? (
            <div className="flex items-center justify-center h-72 font-semibold text-xl text-gray-500">
              {t?.portfolio?.noProjects || "No projects found."}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row md:justify-evenly p-5">
              <div className="w-full md:w-[45%] object-contain ms-5 mb-5 md:mb-0 flex justify-center items-center drop-shadow-xs drop-shadow-secondary">
                <div className="aspect-16/10 overflow-hidden flex items-center justify-center">
                  {currentProject.image ? (
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">No image</div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-[40%] flex flex-col pt-3 items-center md:items-start text-center md:text-left">
                <h2 className="text-4xl font-semibold mb-3 text-hover dark:text-suplight-hover">
                  {currentProject.title}
                </h2>
                <p className="text-lg text-moredark-hover dark:text-morelight-hover mb-4 max-w-md whitespace-pre-line">
                  {currentProject.text}
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  {currentProject.tools?.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {currentProject.demoLink && (
                  <a
                    href={currentProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="contained"
                      className="!capitalize !p-3 !text-lg !font-[500] !bg-main hover:!bg-dark-hover ease-in-out duration-300"
                      endIcon={<FaArrowRight />}
                    >
                      {t?.portfolio?.demo || "Demo"}
                    </Button>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sağ Ok Div'i */}
        <div className="w-[5%] flex justify-center items-center h-[320px]">
          <button
            onClick={handleNextSlide}
            className="text-5xl text-main dark:text-light-hover hover:text-moredark-hover transition-colors duration-300 hidden md:block"
            aria-label="Next project"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slide göstergeleri */}
      <div className="flex justify-center items-center mt-10 gap-3">
        {filteredProjects.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlideIndex === index ? "bg-main" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
