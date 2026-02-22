export default function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="/">
        <img src="/images/logo.webp" alt="Goodymoog" />
      </a>

      <nav className="top-nav">
        <a href="/">Music</a>
        <a href="/art">Art</a>
        <a href="/merch">Merch</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}