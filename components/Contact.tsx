export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Section Heading */}
        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>

          <h2>Visit R.H. Jewellers LLP</h2>

          <p>
            We would be delighted to help you find jewellery that becomes
            part of your most special moments.
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-card">

            <div className="contact-icon">✦</div>

            <h3>Contact Us</h3>

            <div className="contact-details">

              <a href="tel:+919327459009">
                <span>Pradeep</span>
                <strong>+91 9327459009</strong>
              </a>

              <a href="tel:+919016212916">
                <span>Mayur</span>
                <strong>+91 9016212916</strong>
              </a>

              <a href="tel:+917575027916">
                <span>Rishabh</span>
                <strong>+91 7575027916</strong>
              </a>

              <a href="mailto:rhjewellers5@gmail.com">
                <span>Email</span>
                <strong>rhjewellers5@gmail.com</strong>
              </a>

            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919327459009?text=Hello%20R.H.%20Jewellers%20LLP,%20I%20would%20like%20to%20enquire%20about%20your%20jewellery."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp Us
            </a>

          </div>


          {/* Showroom */}
          <div className="contact-card showroom-card">

            <div className="contact-icon">⌖</div>

            <h3>Visit Our Showroom</h3>

            <p className="showroom-name">
              R.H. Jewellers LLP
            </p>

            <p className="address">
              Kotharia Naka,<br />
              Soni Bazar,<br />
              Rajkot, Gujarat 360001,<br />
              India
            </p>

            <a
              href="https://maps.app.goo.gl/HzAAM5wpUPoybChy7"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn"
            >
              View on Google Maps
            </a>

            <a
              href="https://instagram.com/r.h.jewellers.llp"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn"
            >
              Follow on Instagram
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}