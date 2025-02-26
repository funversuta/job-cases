import "./MainPageHead.scss";
import reactlogo from "../../assets/icons/react.svg";
import next from "../../assets/icons/next.svg";
import js from "../../assets/icons/js.svg";
import ts from "../../assets/icons/ts.svg";
import css from "../../assets/icons/css.svg";
import html from "../../assets/icons/html.svg";
import redux from "../../assets/icons/redux.svg";
import mobx from "../../assets/icons/mobx.svg";
import pug from "../../assets/icons/pug.svg";
import sass from "../../assets/icons/sass.svg";
import threejs from "../../assets/icons/threejs.svg";
import recharts from "../../assets/icons/recharts.svg";
import IconList from "../Iconslist/Iconslist";
import Contacts from "../Contacts/Contacts";
import person from "/imgs/person.png";

interface MainPageHeadProps {
  name?: string;
}

const MainPageHead: React.FC<MainPageHeadProps> = () => {
  return (
    <div className="main-content__head">
      <div className="main-content__head-person">
        <img  alt="" src={person} />
        <div className="fio">
          <div className="main-content__head-person__title">Frontend Developer</div>
          <div className="main-content__head-person__fio">Беляков Г. Ю.</div>
          <div className="main-content__head-person__exp">
            <b>4+</b> лет опыта
          </div>
        </div>
      </div>

      <Contacts />
      <div className="main-content__head-teh">
        <div className="main-content__head-teh--title">Мой стек:</div>
        <div className="main-content__head-stack">
          <IconList
            icons={[
              { name: "React", src: reactlogo },
              { name: "Nextjs", src: next },
              { name: "Threejs", src: threejs },
              { name: "Mobx", src: mobx },
            ]}
          />
          <IconList
            icons={[
              { name: "TypeScipt", src: ts },
              { name: "JavaScript", src: js },
              { name: "RTK", src: redux },
              { name: "Pug", src: pug },
            ]}
            direction="reverse"
          />
          <IconList
            icons={[
              { name: "Html", src: html },
              { name: "Css", src: css },
              { name: "Sass", src: sass },
              { name: "Recharts", src: recharts },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageHead;
