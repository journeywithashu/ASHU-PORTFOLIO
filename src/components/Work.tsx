import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "ResumeIQ",
    category: "AI Resume Reviewer",
    tools: "Next.js, Firebase, Express, Gemini API",
    image: "/images/resumeiq.png",
    link: "https://resumeiq-zeta.vercel.app/",
  },
  {
    title: "Wanderlust-RentHub",
    category: "Rental Listing Web App",
    tools: "Node.js, Express.js, MongoDB, EJS",
    image: "/images/wanderlust.png",
    link: "https://personal-project-9sxq.onrender.com/listings",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-stack">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <div className="project-info">
                  <div className="project-number">
                    <h3>0{index + 1}</h3>
                  </div>
                  <div className="project-details">
                    <h4>{project.title}</h4>
                    <p className="project-category">{project.category}</p>
                    <div className="carousel-tools">
                      <span className="tools-label">Tools & Features</span>
                      <div className="tools-tags">
                        {project.tools.split(",").map((tool, i) => (
                          <span key={i}>{tool.trim()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-image-wrapper">
                  <WorkImage image={project.image} alt={project.title} link={project.link} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
