import React from "react";
import imageSrc from "../images/Logo.svg"

export function Header() {
    return <header>
        <img src={imageSrc} alt="logo" />
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    </header>;
}
