import "./styles/Career.css";
import { CAREER } from "../data/portfolio";

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
          {CAREER.map((entry, i) => (
            <div className="career-info-box" key={i}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{entry.role}</h4>
                  <h5>{entry.org}</h5>
                </div>
                <h3>{entry.periodLabel}</h3>
              </div>
              <p>{entry.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
