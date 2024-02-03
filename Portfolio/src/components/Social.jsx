import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Social() {
  return (
    <div className="flex items-center justify-center">
      <div className="space-y-5">
        <h1 className="text-xl font-bold text-center">Connect with me</h1>
        <div className="flex flex-wrap justify-center items-center sm:space-x-4 md:space-x-5">
          <a
            href="https://www.facebook.com/profile.php?id=100008108081770"
            className="social-link"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/farrukhgilani/"
            className="social-link"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/farrukh.gilani/"
            className="social-link"
          >
            <InstagramIcon />
          </a>
          <a href="" className="social-link">
            <XIcon />
          </a>
          <a href="https://github.com/syedfarrukh12" className="social-link">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
