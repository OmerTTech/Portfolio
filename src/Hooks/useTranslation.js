import { useSelector } from "react-redux";
import translations from "../Utils/translations";

export const useTranslation = () => {
  const lang = useSelector((state) => state.language.lang);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value;
  };

  return { t, lang };
};
