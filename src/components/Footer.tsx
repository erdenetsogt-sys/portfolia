import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
      <p>&copy; 2024</p>
    </div>
  );
};
