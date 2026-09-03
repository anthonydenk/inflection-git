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

const ABOUT = [
  { href: "/about", label: "Overview" },
  { href: "/about/insights", label: "Insights" },
  { href: "/about/news", label: "News" },
];

const PORTAL = "https://inflection.addepar.com";
const PORTAL_LABEL = "Client login — opens the Inflection portal in a new tab";

const HeaderComponent = () => {
  const pathname = usePathname() || "/";
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const whoToggleRef = useRef(null);
  const aboutToggleRef = useRef(null);

  const current = (href) => (pathname === href ? "page" : undefined);
  const inWhoWeServe = pathname.startsWith("/who-we-serve");
  const inAbout = pathname.startsWith("/about");

  // Hover opens the dropdown in CSS; this state is the authoritative
  // keyboard/touch path. :focus-within is deliberately not used — it would pin
  // the menu open while the toggle holds focus and make Escape look broken.
  useEffect(() => {
    if (!openDropdown) return undefined;
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        const toggle = openDropdown === "about" ? aboutToggleRef.current : whoToggleRef.current;
        setOpenDropdown(null);
        toggle?.focus();
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdown]);

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
    setOpenDropdown(null);
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

          <ul className="nav-links" ref={navRef}>
            <li className="nav-drop">
              <Link href="/who-we-serve" aria-current={inWhoWeServe ? "page" : undefined}>
                Who We Serve
              </Link>
              <button
                ref={whoToggleRef}
                className="nav-drop-t"
                type="button"
                aria-expanded={openDropdown === "who-we-serve"}
                aria-controls="wws-menu"
                aria-label="Show Who We Serve pages"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown((value) => value === "who-we-serve" ? null : "who-we-serve");
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
              <ul className={`nav-drop-menu${openDropdown === "who-we-serve" ? " open" : ""}`} id="wws-menu">
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
            <li className="nav-drop">
              <Link href="/about" aria-current={inAbout ? "page" : undefined}>
                About Us
              </Link>
              <button
                ref={aboutToggleRef}
                className="nav-drop-t"
                type="button"
                aria-expanded={openDropdown === "about"}
                aria-controls="about-menu"
                aria-label="Show About pages"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown((value) => value === "about" ? null : "about");
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
              <ul className={`nav-drop-menu${openDropdown === "about" ? " open" : ""}`} id="about-menu">
                {ABOUT.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={current(item.href)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
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
          <li>
            <Link href="/about" aria-current={inAbout ? "page" : undefined}>About Us</Link>
            <ul className="menu-sub">
              {ABOUT.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={current(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
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
