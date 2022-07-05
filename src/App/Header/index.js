import "./style.css";

const Header = ({ title }) => (
    <header
        className="header"
        id="Strona-główna">
        <h1 className="header__text">{title}</h1>
    </header >

);

export default Header;