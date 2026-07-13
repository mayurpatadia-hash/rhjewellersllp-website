import FadeIn from "@/components/FadeIn";
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
    <FadeIn>
    <section
      id="collections"
      style={{
        padding: "80px 20px",
        background: "#fcf8f2",
      }}
    >
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "46px",
            color: "#4b2b16",
            marginBottom: "10px",
          }}
        >
          Our Collections
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#9b6b22",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Crafted with Elegance & Perfection
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.name}
              className="card"
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "30px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  background: "#fcf8f2",
                }}
              />

              <div style={{ padding: "22px" }}>
                <h3
                  style={{
                    color: "#4b2b16",
                    fontSize: "28px",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    color: "#777",
                    margin: "12px 0 20px",
                  }}
                >
                  Discover premium handcrafted jewellery by RH Jewellers LLP.
                </p>

                <a href="#contact" className="gold-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}