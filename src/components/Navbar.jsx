import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return getSystemTheme();

  });

  const [active, setActive] = useState("home");

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {

      let current = "";

      sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }

      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }

  }, [darkMode]);
  
  return (

    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">

      <div className="container">

        <a className="navbar-brand brand-gradient" href="#home">
          Jashwanth
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto gap-3">

            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${active === "home" ? "active-link" : ""}`}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${active === "about" ? "active-link" : ""}`}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#projects"
                className={`nav-link ${active === "projects" ? "active-link" : ""}`}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                className={`nav-link ${active === "skills" ? "active-link" : ""}`}
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${active === "contact" ? "active-link" : ""}`}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
        
        <div className="nav-item ms-auto d-flex align-items-center gap-3">

          {/* Toggle Button */}

          <button
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;