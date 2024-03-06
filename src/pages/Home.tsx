import { Skills } from "../components/Skills";
import { Logo } from "../components/Logo";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>ソフトウエアエンジニアのエーギ</h2>

        <div className="prompt">
          <p>チョローンバートル　エルデネツォグト</p>
          <Logo />
        </div>
      </div>
      <div className="skills">
        <Skills />
      </div>
    </div>
  );
};
