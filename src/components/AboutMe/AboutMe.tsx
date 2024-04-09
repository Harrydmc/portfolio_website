import React from "react";
import { FC } from "react";
import { Technologies } from "../Technologies";
import { StyledSection, StyledSubSection } from "./AboutMe.styles";

export const AboutMe: FC = () => {
    return (
        <StyledSection id="aboutme">
            <h2>About Me</h2>
            <p className="aboutme__subtitle">
                You will find a little intro about me and the skills and
                technologies I use daily.
            </p>
            <div className="container">
                <StyledSubSection>
                    <div className="aboutme__info">
                        <h3>Summary</h3>
                        <p>
                        I'm a Passionate DevOps Engineer dedicated to crafting seamless, accessible, and responsive digital experiences. Specializing in building robust CI/CD pipelines for lightning-fast software delivery Thrives on optimizing deployment processes to ensure user delight at every touchpoint
                        </p>

                        <p>
                            I'm currently open to Job opportunities where I can
                            contribute to your business and make your users
                            happy. Contact me if you're interested in having a
                            taste of my skills.
                        </p>
                        <a className="btn" href="#contact">Contact Me</a>
                    </div>
                    <div className="aboutme__technologies">
                        <Technologies />
                    </div>
                </StyledSubSection>
            </div>
        </StyledSection>
    );
};
