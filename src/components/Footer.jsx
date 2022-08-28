import React from 'react';
import Author from './Author';
import SocialLinks from './SocialLinks';

export default function Footer() {
    return(
        <div className="footer">
            <Author />
            <div className="footer_copyright"><small>© Natur Dreamscapes 2022 All Rights Reserved.</small></div>
            <SocialLinks />
        </div>
    );
}