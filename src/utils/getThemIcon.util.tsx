import React from "react";
import { AiFillCheckCircle, AiOutlineDisconnect } from "react-icons/ai";
import { BiSolidErrorAlt } from "react-icons/bi";
import { MdSmsFailed } from "react-icons/md";
import { EStatusTheme, TLang } from "../types";
import getToastTitleByTheme from "./getToastTitleByTheme.util";
import "./index.css";

const getThemeIcon = (theme: EStatusTheme, lang?: TLang) => {
  const themeIcons = {
    success: <AiFillCheckCircle />,
    client_error: <BiSolidErrorAlt />,
		server_error: <AiOutlineDisconnect />,
    unknown: <MdSmsFailed />,
  };

  return (
    <div className="theme_icon">
      {themeIcons[theme]}
      {getToastTitleByTheme(theme, lang)}
    </div>
  );
};

export default getThemeIcon;
