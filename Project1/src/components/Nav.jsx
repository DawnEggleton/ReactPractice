import React from 'react';
import reactLogo from '../assets/react-logo.png';

export default function Nav() {
    return (<>
        <nav>
            <a href="/index.html" className="logo">
                <img src={reactLogo} width="40px" />
                <span>ReactFacts</span>
            </a>
            <ul>
                <li><a href="">React Course &mdash; Project 1</a></li>
            </ul>
        </nav>
    </>)
}