"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WHO_WE_SERVE = [
  { href: "/who-we-serve", label: "Overview" },
  { href: "/who-we-serve/wealth-creators", label: "Wealth Creators" },
  { href: "/who-we-serve/next-generation-families", label: "Next Generation Families" },
  { href: "/who-we-serve/single-family-offices", label: "Single Family Offices" },
];

const PORTAL = "https://inflection.addepar.com";
const PORTAL_LABEL = "Client login — opens the Inflection portal in a new tab";

const HeaderComponent = () => {
  const pathname = usePathname() || "/";
  const [dropOpen, setDropOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropRef = useRef(null);
  const toggleRef = useRef(null);

  const current = (href) => (pathname === href ? "page" : undefined);
  const inWhoWeServe = pathname.startsWith("/who-we-serve");

  // Hover opens the dropdown in CSS; this state is the authoritative
  // keyboard/touch path. :focus-within is deliberately not used — it would pin
  // the menu open while the toggle holds focus and make Escape look broken.
  useEffect(() => {
    if (!dropOpen) return undefined;
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDropOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    setDropOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="nav">
        <div className="nav-inner hload" style={{ "--hd": ".05s" }}>
          <Link href="/" className="wordmark" aria-label="Inflection Capital Management — home">
            <img className="nav-mark" src="/media/brand/logoWhite.png" width={503} height={435} alt="" />
            <span className="wm-text">
              <span className="wm-serif">Inflection</span>
              <span className="wm-sub">Capital Management</span>
            </span>
          </Link>

          <ul className="nav-links">
            <li className="nav-drop" ref={dropRef}>
              <Link href="/who-we-serve" aria-current={inWhoWeServe ? "page" : undefined}>
                Who We Serve
              </Link>
              <button
                ref={toggleRef}
                className="nav-drop-t"
                type="button"
                aria-expanded={dropOpen}
                aria-controls="wws-menu"
                aria-label="Show Who We Serve pages"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropOpen((v) => !v);
                }}
              >
                <svg className="nav-drop-i" viewBox="0 0 10 6" aria-hidden="true" focusable="false">
                  <path
                    d="M1 1l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <ul className={`nav-drop-menu${dropOpen ? " open" : ""}`} id="wws-menu">
                {WHO_WE_SERVE.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={current(item.href)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link href="/services" aria-current={current("/services")}>Services</Link></li>
            <li><Link href="/team" aria-current={current("/team")}>Team</Link></li>
            <li><Link href="/about" aria-current={current("/about")}>About Us</Link></li>
            <li><Link href="/contact" aria-current={current("/contact")}>Contact</Link></li>
          </ul>

          <a className="login" href={PORTAL} target="_blank" rel="noopener noreferrer" aria-label={PORTAL_LABEL}>
            Log In
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-panel"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <div className={`menu-panel${menuOpen ? " open" : ""}`} id="menu-panel">
        <div className="menu-head">
          <span className="wm-serif">Inflection</span>
          <button className="menu-close" type="button" onClick={() => setMenuOpen(false)}>
            Close
          </button>
        </div>
        <ul className="menu-links">
          <li>
            <Link href="/who-we-serve" aria-current={current("/who-we-serve")}>
              Who We Serve
            </Link>
            <ul className="menu-sub">
              {WHO_WE_SERVE.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={current(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link href="/services" aria-current={current("/services")}>Services</Link></li>
          <li><Link href="/team" aria-current={current("/team")}>Team</Link></li>
          <li><Link href="/about" aria-current={current("/about")}>About Us</Link></li>
          <li><Link href="/contact" aria-current={current("/contact")}>Contact</Link></li>
          <li>
            <a href={PORTAL} target="_blank" rel="noopener noreferrer" aria-label={PORTAL_LABEL}>
              Log In
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderComponent;
