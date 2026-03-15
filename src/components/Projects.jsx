import {useState,useEffect} from 'react'

function Projects() {
  const [projects,setProjects] = useState([]);

  useEffect(()=>{

    fetch("src/assets/source.json")
      .then(res => res.json())
      .then(data => setProjects(data.projects))
      .catch(err => console.log(err));

  },[]);

  return (
    <div>
      {projects && <section id="projects" className="projects-section reveal portfolio-section">

        <div className="container">

          <div className="text-center mb-4">
            <h2 className="section-title brand-gradient">Projects</h2>
            <p className="section-subtitle">
              Some of the projects I've worked on
            </p>
          </div>

          <div className="row g-4">

            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4" key={index}>

                <div className="project-card">

                  <h5 className="project-tech">{project.title}</h5>

                  <p className="project-desc">
                    {project.desc}
                  </p>

                  <p className="project-tech">
                    {project.tech}
                  </p>

                  <div className="project-buttons">

                    <a
                      href={project.github}
                      className="btn-portfolio me-2"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      className="btn-portfolio me-2"
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

            </div>
          ))}

        </div>

      </div>

    </section>}
    </div>
  );
}

export default Projects;