import styled from "styled-components";

export const StyledNav = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    margin-top: 2rem;

    img {
        display: none;
    }

    &.scrolled {
        background-color: ${({ theme }) => theme.colors.bgBlurred};
        opacity: 0.8;
    }

    .nav {
        &__container {
            display: flex;
        }
    }
`;

export const StyledLogo = styled.div`
    display: flex;
    font-size: 2.5rem;
    p {
        font-size: 1rem;
        transform: rotate(17deg);
    }
`;
