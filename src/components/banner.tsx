import style from "./banner.module.css"
import { Link } from "react-router-dom";

export default function Banner(props: any) {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/GloboLogo.png`} alt="logo" className={style.logo} />
        </Link>
      </div>
      <div className={`${style.subtitleStyle} col-7 mt-5`}>{props.headerText}</div>
    </header>
  );
}