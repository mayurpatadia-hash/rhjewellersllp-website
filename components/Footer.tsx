export default function Footer() {
  return (
    <footer
      style={{
        background: "#3b2413",
        color: "white",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h3>R.H. Jewellers LLP</h3>

      <p>Timeless Gold. Trusted Craftsmanship.</p>

      <p>© {new Date().getFullYear()} R.H. Jewellers LLP. All Rights Reserved.</p>
    <a
  href="https://wa.me/919327459009?text=Hello%20R.H.%20Jewellers%20LLP,%20I%20am%20interested%20in%20your%20jewellery."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "60px",
    height: "60px",
    background: "#25D366",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,.25)",
    zIndex: 9999,
  }}
>
  💬
</a>
    </footer>
  );
}