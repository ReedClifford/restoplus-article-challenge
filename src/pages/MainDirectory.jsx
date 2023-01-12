import { Link } from "react-router-dom";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import ArticleCard from "../components/ArticleCard";
import Buttons from "../components/Buttons";
const MainDirectory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto p-5 ">
      <ArticleCard img={bg1}>
        <h3 className="text-xl">January 12,2023</h3>
        <h1 className="text-6xl">Firestore vs MongoDB.</h1>
        <h4>By Reed Clifford</h4>
        <Link to="/article1">
          <Buttons>Read Article..</Buttons>
        </Link>
      </ArticleCard>

      <ArticleCard img={bg2} link="/article2">
        <h3 className="text-xl">January 12,2023</h3>
        <h1 className="text-6xl">Async/await and Promises.</h1>
        <h4>By Reed Clifford</h4>
        <Link to="/article2">
          <Buttons>Read Article..</Buttons>
        </Link>
      </ArticleCard>
    </div>
  );
};

export default MainDirectory;
