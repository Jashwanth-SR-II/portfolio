import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

function Links() {

  const links = [
    { icon: <FaGithub />, url: "https://github.com/Jashwanth-SR-II" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/jashwanth-s-r-5486a0330" },
    { icon: <FaPhone />, url: "tel:+91807216603" },
    { icon: <FaEnvelope />, url: "mailto:jashwanthsr49@gmail.com" }
  ];

  return (
    <div className="links-icons reveal">

      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="icon-button"
        >
          {link.icon}
        </a>
      ))}

    </div>
  );
}

export default Links;