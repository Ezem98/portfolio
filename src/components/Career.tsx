import "./styles/Career.css";
import { CAREER } from "./utils/const";

const Career: React.FC = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Mi carrera <span>&</span>
          <br /> experiencia
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {CAREER.map((c) => {
            return (
              <div className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{c.position}</h4>
                    <h5>{c.company}</h5>
                  </div>
                  <h3>{c.date}</h3>
                </div>
                <p>{c.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;
