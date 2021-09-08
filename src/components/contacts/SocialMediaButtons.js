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


const SocialMediaButtons = () => {
    return (
        <div className={"socials"}>
            {icons.map((icon, index) => {
                return (
                    <a href={icon.url}
                       target="_blank"
                       rel="noreferrer"
                       style={{animationDelay: `${index/2}s`}}
                       className={"socialButton"}
                    >
                        <InlineIcon

                            icon={icon.icon}
                            width={32}
                            height={32}
                        />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialMediaButtons;
