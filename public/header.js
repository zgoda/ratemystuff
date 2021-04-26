import { useLocation } from 'preact-iso/router';

export default function Header() {
  const { url } = useLocation();
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/error">Error</a></li>
        </ul>
      </nav>
    </header>
  );
}
