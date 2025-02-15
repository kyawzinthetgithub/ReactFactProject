export default function Header() {
  return (
    <header>
      <img src="/react-logo.png" alt="react-logo"className="nav-logo" />
      <nav>
        <ul className="nav-link">
          <li className="nav-link-item">Pricing</li>
          <li className="nav-link-item">About</li>
          <li className="nav-link-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}