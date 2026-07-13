import FadeIn from "./FadeIn";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Hallmarked Gold",
      text: "Certified BIS Hallmarked jewellery with guaranteed purity.",
      icon: "✨",
    },
    {
      title: "Trusted Since Years",
      text: "Serving customers with honesty, quality and craftsmanship.",
      icon: "🤝",
    },
    {
      title: "Latest Designs",
      text: "Modern, bridal, antique and daily wear collections.",
      icon: "💎",
    },
    {
      title: "Premium Craftsmanship",
      text: "Every jewellery piece is handcrafted with precision.",
      icon: "👑",
    },
  ];

  return (
    <FadeIn>
    <section
      id="why-us"
      style={{
        background: "#ffffff",
        padding: "90px 20px",
      }}
    >
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "44px",
            color: "#4b2b16",
          }}
        >
          Why Choose RH Jewellers LLP
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#9b6b22",
            marginBottom: "60px",
            fontSize: "18px",
          }}
        >
          Luxury • Trust • Craftsmanship
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              className="card"
              style={{
                textAlign: "center",
                padding: "35px",
              }}
            >
              <div
                style={{
                  fontSize: "50px",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  color: "#4b2b16",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}