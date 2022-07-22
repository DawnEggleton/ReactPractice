import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';

export default function Footer() {
    return (<footer>
        <SocialMediaIcon brand="twitter" url="http://twitter.com" />
        <SocialMediaIcon brand="facebook" url="http://facebook.com" />
        <SocialMediaIcon brand="instagram" url="http://instagram.com" />
        <SocialMediaIcon brand="linkedin" url="http://linkedin.com" />
        <SocialMediaIcon brand="github" url="http://github.com" />
    </footer>);
}