import React from 'react';
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";
import Linktree from "../assets/images/linktree.svg";
import Website from "../assets/images/web.svg";
import Contract from "../assets/images/etherscan.svg";

export default function SocialLinks() {
    return (
        <div className="container__center">
            <a href="https://www.instagram.com/cubannerd/"><img src={Instagram} alt="Instagram" /></a>
            <a href="https://twitter.com/CubanNerd_"><img src={Twitter} alt="Twitter" /></a>
            <a href="https://linktr.ee/cubannerd"><img src={Linktree} alt="Linktree" /></a>
            <a href="cubannerd.com"><img src={Website} alt="Cubannerd Website" /></a>
            <a href="https://etherscan.io/address/0x1A47Ca25124b4d8cd9c7c825aA64cC7F07629529"><img src={Contract} alt="Contract" /></a>
        </div>
    );
}