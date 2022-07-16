import { StyledHeader } from "./styled";

const Header = ({ title }) => (
    <header
        id="Strona-główna">
        <StyledHeader>{title}</StyledHeader>
    </header >

);

export default Header;