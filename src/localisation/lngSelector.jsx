import React from "react";
import { useTranslation } from "react-i18next";
import uzFlag from "../images/uz.svg";
import ruFlag from "../images/ru.svg";
import enFlag from "../images/en.svg";


export default function DropdownComponent() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Language
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
          <li>
            <button
              className="text-black bg-red-500 px-4 py-1 rounded-lg flex flex-row justify-center items-center gap-2 my-1"
              onClick={() => changeLanguage("uz")}>
              <img src={uzFlag} alt="Flag of Uzb" />
              uz
            </button>
          </li>
          <li>
            <button
              className="bg-black text-red-500 px-4 py-1 rounded-lg flex flex-row justify-center items-center gap-2 my-1"
              onClick={() => changeLanguage("en")}>
              <img src={enFlag} alt="Flag of USA" />
              en
            </button>
          </li>
          <li>
            <button
              className="bg-black text-red-500 px-4 py-1 rounded-lg flex flex-row justify-center items-center gap-2"
              onClick={() => changeLanguage("ru")}>
              <img src={ruFlag} alt="Flag of Russia" />
              ru
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
