import React from "react";
import { StyledFooter } from "./Footer.styles";
import { socials } from "../../utils/socials";

export const Footer = () => {
    return (
        <StyledFooter id="contact">
            <div className="container footer__container">
                <div>
                    <p>Thanks for checking my portfolio.</p>
                    <p>I am currently open to work!</p>
                </div>
                <div className="footer__contact-info">
                    <h5>Contact Me</h5>
                    <ul className="footer__socials">
                        {socials.map(({ Icon, href, label }, i) => (
                            <li key={i}>
                                <a
                                    href={href}
                                    aria-label={`my ${label} profile`}
                                    target="_blank"
                                >
                                    <Icon aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="footer__contact-gmail">
                        <a href="mailto:Dominicsavier.j@gmail.com">
                            <span>Dominicsavier.j@gmail.com</span>
                        </a>
                    </p>
                </div>
            </div>
        </StyledFooter>
    );
};
