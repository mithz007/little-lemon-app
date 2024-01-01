import React from 'react'
import imageSrc from '../images/Logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        icon: faGithub,
        url: "https://github.com/",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
    {
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];
export function Footer() {
    return (<footer>
        <div className='footer-conatiner'>
            <img src={imageSrc} alt="logo" />
            <nav>
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/">About</a></li>
                    <li><a href="#/">Menu</a></li>
                    <li><a href="#/">Reservations</a></li>
                    <li><a href="#/">Order Online</a></li>
                    <li><a href="#/">Login</a></li>
                </ul>
            </nav>
            <div>
                <h2>Contact</h2>
                <div>
                    <span>Email:</span>&nbsp;
                    <span>littlelemon@mail.com</span>
                </div>
                <div>
                    <span>Phone:</span>&nbsp;
                    <span>123-456-7890</span>
                </div>
            </div>
            <div>
                <h2>Social Links</h2>
                {socials.map((social, index) => (
                    <a href={social.url} key={index} className='social-link'>
                        <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                ))}
            </div>
        </div>
    </footer>);
}
