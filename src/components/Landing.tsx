import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hola! Soy</h2>
            <h1>
              EZEQUIEL
              <br />
              <span>MACHADO</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Un Desarrollador</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Innovador</div>
              <div className="landing-h2-2">Creativo</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Frontend Developer</div>
              <div className="landing-h2-info-1">Backend Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
