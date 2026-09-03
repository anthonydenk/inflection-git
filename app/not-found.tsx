import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
      <h1>Page not found</h1>
      <p>
        The page you requested is not available. Use the links below to return
        to Inflection Capital Management.
      </p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/team">Team</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </main>
  );
}
