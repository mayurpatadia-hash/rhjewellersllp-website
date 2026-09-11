
export default function Hero() {
  return (
   
      <section id="home">
        <div className="container hero">

          {/* Left Side */}
          <div className="hero-content">

            <p className="hero-tag">
              ✨ Trusted Gold Jewellery Since Years
            </p>

            <h1>
              Timeless Gold.
              <br />
              Trusted Craftsmanship.
            </h1>

            <p className="hero-text">
              Discover handcrafted BIS Hallmarked gold jewellery
              designed with elegance, tradition, and exceptional
              craftsmanship for every special occasion.
            </p>

            <div className="hero-buttons">

              <a href="#collections" className="gold-btn">
                Explore Collection
              </a>

              <a href="#contact" className="outline-btn">
                Contact Us
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="hero-image">

            <img
              src="/hero.png"
              alt="Gold Jewellery"
            />

          </div>

        </div>
      </section>
    
  );
}