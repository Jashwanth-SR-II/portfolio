import { useState, useEffect } from 'react'

function Skills() {

  const [skillGroups,setSkillGroups] = useState([]);
  
    useEffect(()=>{
  
      fetch("api/source.json")
        .then(res => res.json())
        .then(data => setSkillGroups(data.skills))
        .catch(err => console.log(err));
  
    },[]);
  return (
    <section id="skills" className="skills-section portfolio-section reveal">

      <div className="container">

        <div className="text-center mb-4">
          <h2 className="section-title brand-gradient">Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="row g-4">

          {skillGroups.map((group, index) => (
            <div className="col-md-6 col-lg-3" key={index}>

              <div className="skill-box">

                <h5 className="skill-title">
                  {group.title}
                </h5>
                <div>
                  {skillGroups && <ul className="skill-list">

                    {group.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}

                  </ul>}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;