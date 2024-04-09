import React from "react";
import { FC } from "react";
import { StyledSection } from "./Header.styles";
import FrontendDeveloper from "../../images/frontend.png";
import working from "../../images/working.png";
import Scene from "../Canvas/Canvas";

export const Header: FC = () => {
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    return (
        <StyledSection>
            <div className="container header__container">
                <div className="header__info">
                    <h1>
                        <p>Hello Friend! I'm,</p>
                        <span>Dominic Savier,</span>
                        <p>
                        A DevOps virtuoso driven by passion, dedicated to sculpting interactive, accessible, and responsive digital realms.
                        </p>
                    </h1>
                    <div className="header__links">
                        <a className="header__link-mywork btn" href="#projects">See My Work</a>
                        <a className="header__link-resume btn" href={require("../../documents/Dominic_savier.pdf")} target="_blank">View Resume</a>
                    </div>
                </div>
                <div className="header__picture">
                        <Scene /> 
                </div>
            </div>
        </StyledSection>
    );
};
