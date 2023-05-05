import React from "react";
import { useTranslation, Trans } from "react-i18next";
import "./localisation/i18n";
import DropdownComponent from "./localisation/lngSelector";
import uzFlag from "./images/uz.svg";
import ruFlag from "./images/ru.svg";
import enFlag from "./images/en.svg";

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center text-black">
        <h2>{t("Nima Gap")}</h2>
        <div className="flex flex-row gap-2 mt-7">
          <button
            className="text-black bg-red-500 px-4 py-1 rounded-lg flex flex-row justify-center items-center gap-2"
            onClick={() => changeLanguage("uz")}>
            <img src={uzFlag} alt="Flag of Uzb" />
            uz
          </button>
          <button
            className="text-red-500 bg-black px-4 py-1 rounded-lg flex flex-row justify-center items-center gap-2"
            onClick={() => changeLanguage("en")}>
            <img src={enFlag} alt="Flag of Russia" />
            en
          </button>
          <button
            className="bg-black text-red-500 px-4 py-1 rounded-lg flex flex-row justify-center items-center gap-2"
            onClick={() => changeLanguage("ru")}>
            <img src={ruFlag} alt="Flag of Russia" />
            ru
          </button>
        </div>
      </div>
      <div style={{ color: "red", marginTop: 30, textAlign: "center" }}>
        <Trans i18nKey="Salom">trans</Trans>
      </div>
      <div className="flex justify-center mt-10">
        <DropdownComponent />
      </div>
    </div>
  );
}
