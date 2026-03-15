import AboutImage from '../assets/about.png';

function About() {
  return (
    <section id="about" className="about-section portfolio-section">

      <div className="container reveal">

        <div className="section-header text-center">
          <h2 className="brand-gradient">About Me</h2>
          <p>A quick introduction about my skills and experience</p>
        </div>

        <div className="row align-items-center mt-5">

          {/* Image */}
          <div className="col-lg-4 text-center">
            <img
              src={AboutImage}  
              alt="profile"
              className="about-profile"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-8">

            <div className="text-box">
              <p>
                Hello! I'm <strong>Jashwanth</strong>, a developer who enjoys
                building modern and responsive web applications.
              </p>
            </div>

            <div className="text-box">
              <p>
                I love working with modern technologies and continuously
                improving my development and problem-solving skills.
              </p>
            </div>

            <div className="text-box">
              <p>
                My interests include frontend development, UI design,
                and creating interactive digital experiences.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;