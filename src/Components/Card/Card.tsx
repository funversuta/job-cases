import { useNavigate } from "react-router-dom";
import "./Card.scss";
import image from "/imgs/snow.jpeg";

interface CardProps {
  title?: string;
  description?: string;
  tags?: string[];
  img?: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ title, description, tags, img, id }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/job-cases/Project/${id}`);
  };

  return (
    <div className="Card" onClick={clickHandler}>
      <img alt="" width={220} height={220} src={img ?? image} />

      <div className="Card-body">
        <h4 className="Card-body__title">{title}!</h4>

        <div
          className="Card-body__description"
          dangerouslySetInnerHTML={{ __html: description?.substring(0, 155) + "..." }}
        />
        <div className="Card-body__tags">
          Теги:{" "}
          {tags?.map((tag: string) => {
            return (
              <div className="Card-body__tag" key={tag}>
                {tag}
              </div>
            );
          })}
        </div>
        <div className="more">Подробнее</div>
      </div>
    </div>
  );
};

export default Card;
