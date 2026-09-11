export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about">

        <div className="about-content">

          <p className="about-tag">
            R.H. JEWELLERS LLP
          </p>

          <h2>
            Crafting Trust.
            <br />
            Creating Timeless Beauty.
          </h2>

          <div className="gold-divider" />

          <p>
            At R.H. Jewellers LLP, every jewellery piece is crafted
            with passion, precision, and purity. We specialize in
            BIS Hallmarked gold jewellery that combines timeless
            tradition with modern elegance.
          </p>

          <p>
            From everyday elegance to bridal celebrations, our
            collections are created to make every special moment
            truly memorable.
          </p>

          <div className="about-highlights">

            <div>
              <strong>22K</strong>
              <span>Gold Jewellery</span>
            </div>

            <div>
              <strong>BIS</strong>
              <span>Hallmarked</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Craftsmanship</span>
            </div>

          </div>

        </div>

        <div className="about-image">

          <img
            src="/images/antique-set.png"
            alt="R.H. Jewellers Gold Jewellery"
          />

          <div className="about-badge">
            <span>RH</span>
            <small>JEWELLERS LLP</small>
          </div>

        </div>

      </div>
    </section>
  );
}