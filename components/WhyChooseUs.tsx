export default function WhyChooseUs() {
  const features = [
    {
      title: "Hallmarked Gold",
      text: "BIS-certified jewellery with assured purity and quality.",
      icon: "✦",
    },
    {
      title: "Trusted Craftsmanship",
      text: "Built on honesty, precision, quality and experience.",
      icon: "◇",
    },
    {
      title: "Exclusive Designs",
      text: "Traditional elegance with contemporary styling.",
      icon: "◈",
    },
    {
      title: "Every Occasion",
      text: "Bridal, festive and elegant everyday jewellery.",
      icon: "♢",
    },
  ];

  return (
    <section id="why-us" className="why-section">
      <div className="container">

        <div className="why-heading">
          <span className="why-label">THE R.H. JEWELLERS DIFFERENCE</span>

          <h2>Why Choose R.H. Jewellers LLP</h2>

          <div className="why-line"></div>

          <p>Luxury · Trust · Craftsmanship</p>
        </div>

        <div className="why-grid">
          {features.map((item) => (
            <div className="why-card" key={item.title}>

              <div className="why-icon">
                {item.icon}
              </div>

              <div className="why-number">
                0{features.indexOf(item) + 1}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="why-card-line"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}