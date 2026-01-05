import "./portfolio.css";

import IMG1 from "../../assets/docurious.png";
import IMG2 from "../../assets/chef-portal.png";
import IMG3 from "../../assets/marketing.png";
import IMG4 from "../../assets/charity.png";
import IMG5 from "../../assets/health_care.png";
import VID6 from "../../assets/cloves.mp4";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Event & Challenge Platform",
      img: IMG1,
      description:
        "A platform that connects users and service providers, where vendors organize challenges (events) for users to participate in.It automates key processes such as participation tracking and payouts, ensuring a seamless experience for all parties.",
      technologies: "Html | CSS |  Chakra UI | Javascript | React Js | PHP |  Laravel | MySQL",
      link: "https://portal.docurious.com",
      github: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "Chef Portal & Order Management Platform",
      img: IMG2,
      description:
        "A platform connecting chefs and users, managing orders, deliveries, and commissions seamlessly. The system automates key processes to make the experience smooth and efficient for everyone.",
      technologies: "HTML | CSS | jQuery | PHP | Laravel | MySQL",
      link: "https://prepbychef.com",
      github: "https://github.com/Rasif-Taghizada/fh-huquq.com",
    },
    {
      id: 3,
      title: "Secure Online Charity & Donation Platform",
      img: IMG4,
      description: "This charity website is a full-stack web application that enables users to donate online using PayPal and Stripe payment gateways. It includes secure payment processing, responsive UI, donation management, and a scalable backend architecture.",
      technologies: "HTML | CSS | JavaScript | Laravel | MySQL",
      link: "https://demo-customlinks.com/nationempower_dev/",
      github: "https://github.com/Akhtar47623/nation_empower",
    },
    {
      id: 4,
      title: "Biteki Marketing – Creative Agency Platform",
      img: IMG3,
      description:
        "Creative social media marketing and food photography website for UK restaurants, offering content shoots, short-form videos, and flexible, no-contract marketing plans.",
      technologies: "Html | CSS | JavaScript | Ajax | PHP | Laravel | MySQL",
      link: "https://demo-customlinks.com/biteki_dev",
      github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    {
      id: 5,
      title: "Healthcare Staffing NW",
      img: IMG5,
      description:
        "A modern healthcare staffing agency website designed to support medical professionals by simplifying job placement, promoting work–life balance, and building long-term partnerships through flexible and supportive staffing solutions.",
      technologies: "Html | CSS | JavaScript | Ajax | PHP | Laravel | MySQL",
      link: "https://demo-customlinks.com/health_care_dev",
      github: "https://github.com/Rasif-Taghizada/Joke-App",
    },
    {
      id: 6,
      title: "ClovesRX Global — Prescription Delivery",
      video: VID6,
      description:
        "A prescription delivery platform built to support secure and on-time medication delivery for pharmacies across Southern California, helping streamline prescription fulfillment and improve patient access to essential medications.",
      technologies: "Html | CSS | JavaScript | Ajax | PHP | Laravel | MySQL",
      link: "#",
      github: "https://github.com/Akhtar47623/cloves",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              {/* <img src={pro.img} alt={pro.title} /> */}
              <div className="portfolio__item-image">
                {pro.video ? (
                  <video
                    src={pro.video}
                    controls
                    playsInline
                    preload="metadata"
                    poster={pro.poster}
                    className="portfolio__media"
                  />
                ) : (
                  <img
                    src={pro.img}
                    alt={pro.title}
                    className="portfolio__media"
                  />
                )}
              </div>


            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
