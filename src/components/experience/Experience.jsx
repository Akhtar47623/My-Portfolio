import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import { FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaReact } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiJavascript, SiJquery, SiPostgresql } from "react-icons/si";
import { MdApi } from "react-icons/md";



const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Backend-Focused Full-Stack Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaPhp className="experience__details-icon" style={{ color: "#777BB4" }} />
              <h4>PHP</h4>
            </article>

            <article className="experience__details">
              <FaLaravel className="experience__details-icon" style={{ color: "#FF2D20" }} />
              <h4>Laravel</h4>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details-icon" style={{ color: "#4479A1" }} />
              <h4>MySQL</h4>
            </article>

            <article className="experience__details">
              <SiPostgresql style={{ color: "#336791" }} className="experience__details-icon" />
              <h4>PostgreSQL</h4>
            </article>

            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" style={{ color: "#E34F26" }} />
              <h4>HTML</h4>
            </article>

            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" style={{ color: "#1572B6" }} />
              <h4>CSS</h4>
            </article>

            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" style={{ color: "#7952B3" }} />
              <h4>Bootstrap</h4>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" style={{ color: "#06B6D4" }} />
              <h4>Tailwind CSS</h4>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icon" style={{ color: "#F7DF1E" }} />
              <h4>JavaScript / jQuery / Ajax</h4>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon" style={{ color: "#61DAFB" }} />
              <h4>React</h4>
            </article>

            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" style={{ color: "#F05032" }} />
              <h4>Git / GitHub</h4>
            </article>

            <article className="experience__details">
              <MdApi className="experience__details-icon" style={{ color: "#0EA5E9" }} />
              <h4>API / Third-Party Integrations</h4>
            </article>



          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience