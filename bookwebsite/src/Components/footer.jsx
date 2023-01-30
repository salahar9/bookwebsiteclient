export const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>our locations</h3>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> Casablanca Sidi Othman{" "}
          </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> home{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> books{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> client'reviews{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> information{" "}
          </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            {" "}
            <i className="fas fa-phone"></i> 060000000{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> EnsamCasa@gmail.com{" "}
          </a>
        </div>
      </div>

      <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
      </div>

      <div className="credit">
        {" "}
        Made with 💖 by{" "}
        <span>SAKINI Oussama | ANIBA Souhail | BELHIAK Salah-Eddine</span>
      </div>
    </section>
  );
};
