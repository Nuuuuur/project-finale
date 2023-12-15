import "../index.css";
const AboutUs = () => {
  return (
    <div className="welcome">
      <div className="welcome-to">
        <h1>Welcome to our web site!</h1>
      </div>
      <div className="container-description-site">
        <p>
          {" "}
          <p> Organize your life with simplicity and efficiency!</p>
          <p>
            {" "}
            Introducing Time Harmony, your go-to destination for streamlined
            task management. Say goodbye to chaos and hello to productivity as
            you prioritize, plan, and conquer your day.
          </p>
        </p>
      </div>
      <div class="cards">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="/assets/zahwa-img.jpg" alt="Card Image 1" />
            </div>
            <div class="flip-card-back">
              <p class="title"> Zahwa, etudiante en L3 ISIL</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="/assets/nour-img.png" alt="" />
            </div>
            <div class="flip-card-back">
              <p class="title">Nour, etudiante en L3 ISIL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
