import { StyledNav, StyledNavigationLink } from "./styled";

const Navigation = () => (
    <StyledNav>
        <StyledNavigationLink href="#Strona-główna" title="Wróć do strony głównej">Strona główna</StyledNavigationLink>
        <StyledNavigationLink href="#converter" title="Przejdź do przelicznika">Przelicz walutę</StyledNavigationLink>
        <StyledNavigationLink href="mailto:serisoch@gmail.com" title="Napisz e-mail">Kontakt</StyledNavigationLink>
    </StyledNav>
);

export default Navigation;