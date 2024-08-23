import { useContext } from "react";
import style from "./banner.module.css"
import { navigationContext } from "../app/App";
import navValues from "../helpers/navValues";

export default function Banner(props: any) {
  const { navigate } = useContext(navigationContext);
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src={`${process.env.PUBLIC_URL}/GloboLogo.png`} alt="logo" className={style.logo}
          onClick={() => navigate(navValues.home)} />
      </div>
      <div className={`${style.subtitleStyle} col-7 mt-5`}>{props.headerText}</div>
    </header>
  );
}