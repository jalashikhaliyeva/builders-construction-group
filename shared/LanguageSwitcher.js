import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { updateRouter } from "./constant/router";
import Image from "next/image";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(router.locale || "az");
  const dropdownRef = useRef(null);

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
    localStorage.setItem("lang", locale);
    // updateRouter();
    window.dispatchEvent(new Event("storage")); // Trigger storage event
    setCurrentLanguage(locale);
    setShowDropdown(false);
    router.push(router.pathname, router.asPath, { locale });
  };
  useEffect(() => {
    const savedLocale = localStorage.getItem("lang") || "az";
    if (savedLocale !== currentLanguage) {
      changeLanguage(savedLocale);
    }
  }, [currentLanguage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const languages = [
    { code: "en", label: "English", imgSrc: "/langImg/en.png" },
    { code: "ru", label: "Russian", imgSrc: "/langImg/ru.png" },
    { code: "az", label: "Azerbaijan", imgSrc: "/langImg/az.png" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="cursor-pointer flex items-center p-2 border-gray-300 rounded-md"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img
          style={{
            borderRadius: "4px",
            width: "30px",
            height: "20px",
            cursor: "pointer",
          }}
          src={`/langImg/${currentLanguage}.png`}
          alt={currentLanguage}
          className="mr-2 cursor-pointer"
        />
      </div>
      {showDropdown && (
        <div
          style={{ width: "120px" }}
          className="absolute top-full left-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-50"
        >
          {languages.map((lang) => (
            <div
              style={{ gap: "5px", cursor: "pointer" }}
              key={lang.code}
              className="flex items-center cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => changeLanguage(lang.code)}
            >
              <Image
                width={30}
                height={30}
                style={{
                  borderRadius: "4px",
                  width: "30px",
                  height: "20px",
                }}
                src={lang.imgSrc}
                alt={lang.code}
              />
              <span style={{ fontSize: "14px" }}>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
