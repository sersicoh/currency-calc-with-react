import "./style.css";

const Navigation = () => (
    <nav className="navigation">
        <a href="#Strona-główna" title="Wróć do strony głównej" className="navigation__link">Strona główna</a>
        <a href="#converter" title="Przejdź do przelicznika" className="navigation__link">Przelicz walutę</a>
        <a href="mailto:serisoch@gmail.com" title="Napisz e-mail" className="navigation__link">Kontakt</a>
    </nav>
);

export default Navigation;