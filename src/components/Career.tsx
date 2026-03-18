import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Programmer Intern</h4>
                <h5>CodeSoft</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Gained hands-on experience in core Java concepts, OOPs, and real-world problem-solving. 
              Worked on developing basic Java applications, console-based programs, and improved 
              understanding of debugging, code structure, and logic building.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Azad Group Of Educational Institute</h5>
              </div>
              <h3>2021-25</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science from Lucknow, UP. 
              Gaining expertise in Data Structures & Algorithms, OS, DBMS, 
              Artificial Intelligence, and Network Security.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII (SSC)</h4>
                <h5>Maharishi Vidya Mandir, Sitapur</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Completed Higher Secondary education from Maharishi Vidya Mandir, 
              Sitapur, UP. Developed a strong logical foundation and interest in 
              programming during early schooling years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
