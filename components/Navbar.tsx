"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <img src="/logo.png" alt="R.H. Jewellers LLP" />
          <div>
            <h2>R.H. Jewellers LLP</h2>
            <p>Timeless Gold. Trusted Craftsmanship.</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#collections">Collections</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a
                href="https://instagram.com/r.h.jewellers.llp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}