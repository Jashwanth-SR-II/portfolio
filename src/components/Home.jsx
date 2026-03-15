
function Home() {

  return (
    <section id="home" className="hero-section d-flex align-items-center portfolio-section">

      <div className="container">

        <div className="row align-items-center">

          {/* Left */}
          <div className="col-lg-6 text-center text-lg-start">

            <h1 className="hero-title reveal">
              Hi, I'm <span className="gradient-text">Jashwanth</span>
            </h1>


            <p className="hero-desc reveal">
              I build modern web applications, interactive websites,
              and digital experiences using React and modern tools.
            </p>

            <div className="mt-4">

              <a href="#projects" className="btn btn-primary me-3 reveal">
                View Projects
              </a>

              <a href="#contact" className="btn-portfolio reveal">
                Contact Me
              </a>

            </div>

          </div>

          {/* Right */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <img
              src="/src/assets/image.png"
              alt="developer"
              className="hero-img"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;