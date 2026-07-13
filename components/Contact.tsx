import FadeIn from "@/components/FadeIn";
export default function Contact() {
  return (
    <FadeIn>
    <section id="contact" style={{ padding: "80px 20px", textAlign: "center" }}>
      <h2>Contact Us</h2>

  <p>📞 Pradeep: <a href="tel:+919327459009">+91 9327459009</a></p>

  <p>📞 Mayur: <a href="tel:+919016212916">+91 9016212916</a></p>

  <p>📞 Rishabh: <a href="tel:+917575027916">+91 7575027916</a></p>

  <p>
  📧 <a href="mailto:rhjewellers5@gmail.com">
    rhjewellers5@gmail.com
  </a>
</p>

      
<h3>Visit Us</h3>

<p>
  📍 R.H. Jewellers LLP<br />
  Kotharia Naka,<br />
  Soni Bazar,<br />
  Rajkot, Gujarat 360001, India
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
        className="gold-btn"
      >
        Instagram
      </a>
    </section>
    </FadeIn>
  );
}