import "./Iconslist.scss";

interface IconListProps {
  icons: {
    name?: string;
    src?: string;
  }[];
  direction?: string;
}

const IconList: React.FC<IconListProps> = ({ icons, direction }) => {
  return (
    <div className="marquee-container">
      <div className={`marquee-${direction ?? "default"}`}>
        {icons.map((icon) => {
          return (
            <div key={icon.name} className="main-content__head-stack__item">
              {icon.src && <img alt="" width={25} height={25} src={icon.src} />}
              <div className="">{icon.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconList;
