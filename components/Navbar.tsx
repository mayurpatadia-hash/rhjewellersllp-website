import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link href="/" className="nav-logo">
          <img
            src="/logo.png"
            alt="R.H. Jewellers LLP"
          />

          <div className="nav-brand">
            <h2>R.H. Jewellers LLP</h2>
            <p>Timeless Gold. Trusted Craftsmanship.</p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#collections">Collections</a>
          <a href="#contact">Contact</a>

          <a
            href="https://instagram.com/r.h.jewellers.llp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>

        {/* MOBILE MENU */}
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>

          <nav className="mobile-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#collections">Collections</a>
            <a href="#contact">Contact</a>

            <a
              href="https://instagram.com/r.h.jewellers.llp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </nav>
        </details>

      </div>
    </header>
  );
}