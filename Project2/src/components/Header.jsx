import React from 'react';
import Button from './Button';

export default function Header() {
    return (<header>
        <img src="https://picsum.photos/350" />
        <div class="info">
            <h1>Dawn Eggleton</h1>
            <p>Drupal Developer</p>
            <a href="https://dawneggleton.github.io">dawneggleton.github.io</a>
            <Button url="mailto:dawn.eggleton@carleton.ca" theme="light">
                <i className="fa-solid fa-envelope"></i>
                <span>Email</span>
            </Button>
        </div>
    </header>);
}