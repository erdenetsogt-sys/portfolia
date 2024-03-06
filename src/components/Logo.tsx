import { RiYoutubeLine } from "react-icons/ri";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LeetcodeIcon from "@material-ui/icons/Code";
import HistoryIcon from "@material-ui/icons/History";

export const Logo = () => {
  const handleGmail = () => {
    window.location.href = "mailto:tsogt1225@gmail.com";
  };

  return (
    <div className="Logo-buttons">
      <button className="Logo-button" onClick={handleGmail}>
        <EmailIcon />
      </button>

      <div className="Logo-button">
        <a
          href="https://github.com/erdenetsogt-sys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
      <div className="Logo-button">
        <a
          href="https://www.credly.com/users/erdenetsogt-chuluunbaatar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HistoryIcon />
        </a>
      </div>
      <div className="Logo-button">
        <a
          href="https://leetcode.com/tsogt1225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LeetcodeIcon />
        </a>
      </div>
    </div>
  );
};
