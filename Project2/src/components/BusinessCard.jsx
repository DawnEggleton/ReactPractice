import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function BusinessCard() {
    return (<div className="card">
        <Header />
        <Content />
        <Footer />
    </div>);
}