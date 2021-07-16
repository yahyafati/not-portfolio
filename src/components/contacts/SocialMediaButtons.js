import styled from "styled-components";
import linkedinIcon from "@iconify-icons/logos/linkedin-icon";
import twitterIcon from "@iconify-icons/logos/twitter";
import githubIcon from "@iconify-icons/logos/github-icon";
import instagramIcon from "@iconify-icons/logos/instagram-icon";
import { InlineIcon } from "@iconify/react";

const icons = [
    { icon: linkedinIcon, name: "LinkedIn", url: "https://linkedin.com" },
    { icon: twitterIcon, name: "Twitter", url: "https://twitter.com" },
    { icon: githubIcon, name: "Github", url: "https://github.com" },
    { icon: instagramIcon, name: "Instagram", url: "https://instagram.com" },
];

const SocialButton = styled(InlineIcon)`
    margin: 5px;
`;

const SocialMediaButtonsStyled = styled.div`
    margin: 30px auto;
    width: fit-content;
`;

const SocialMediaButtons = () => {
    return (
        <SocialMediaButtonsStyled>
            {icons.map((icon) => (
                <a href={icon.url} target="_blank" rel="noreferrer">
                    <SocialButton icon={icon.icon} width={32} height={32} />
                </a>
            ))}
        </SocialMediaButtonsStyled>
    );
};

export default SocialMediaButtons;
