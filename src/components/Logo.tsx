import { RiYoutubeLine } from "react-icons/ri";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

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
          href="https://www.youtube.com/channel/UCOos2ogc5eBPGCGL82FiGgA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiYoutubeLine />
        </a>
      </div>
      <div className="Logo-button">
        <a
          href="https://leetcode.com/tsogt1225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};
