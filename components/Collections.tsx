export default function Collections() {
  const items = [
    {
      name: "Antique Sets",
      image: "/images/antique-set.png",
    },
    {
      name: "Chains",
      image: "/images/chain.png",
    },
    {
      name: "Rings",
      image: "/images/ring.png",
    },
    {
      name: "Necklaces",
      image: "/images/necklace.png",
    },
    {
      name: "Bracelets",
      image: "/images/braclet.png",
    },
    {
      name: "Pendant Sets",
      image: "/images/pendant-set.png",
    },
    {
      name: "Mangalsutra",
      image: "/images/mangalsutra.png",
    },
    {
      name: "Watch Collection",
      image: "/images/watch.png",
    },
  ];

  return (
    <section id="collections" className="collections-section">
      <div className="container">

        {/* Section Heading */}
        <div className="collections-heading">
          <p className="collections-tag">OUR COLLECTIONS</p>

          <h2>Our Collections</h2>

          <div className="collections-divider"></div>

          <p>
            Crafted with Elegance &amp; Perfection
          </p>
        </div>

        {/* Collection Grid */}
        <div className="collections-grid">
          {items.map((item) => (
            <div className="collection-card" key={item.name}>

              {/* Image */}
              <div className="collection-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              {/* Content */}
              <div className="collection-content">

                <h3>{item.name}</h3>

                <p>
                  Discover premium handcrafted jewellery by
                  R.H. Jewellers LLP.
                </p>

                <a
                  href="#contact"
                  className="collection-btn"
                >
                  Enquire Now
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}