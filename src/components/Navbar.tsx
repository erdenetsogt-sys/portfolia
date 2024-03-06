import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="links">
        <Link to="/" className="nav-link">
          ホーム
        </Link>
        <Link to="/experience" className="nav-link">
          履歴
        </Link>
        <Link to="/projects" className="nav-link">
          プロジェクト
        </Link>
        <Link to="/badges" className="nav-link">
          資格
        </Link>
      </div>
    </div>
  );
};
