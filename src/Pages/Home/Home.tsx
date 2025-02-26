import "./Home.scss";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import MainPageHead from "../../Components/MainPageHead/MainPageHead";
import Widget from "../../Components/Widget/Widget";
import data from "../../assets/MocDatas/projectData.json"

interface HomeProps {
  name?: string;
}

const Home: React.FC<HomeProps> = () => {
  
  return (
    <div className="HomePage">
      <Header />
      <div className="main-content">
        <MainPageHead />
        <div className="Cases">Кейсы:</div>
        <div className="main-content__body">
          {
            data.map((card)=>{
              return <Card
              title={card.title}
              description={card.description}
              tags={card.tags}
              img={card.imgs[0]}//img={`${process.env.IMAGE_PATH}${card.imgs[0]}`}
              id={card.id}
              key={card.title}
            />
            })
          }
        </div>
      </div>
      <Widget />
    </div>
  );
};

export default Home;
