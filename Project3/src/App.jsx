import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Section from './components/Section';

export default function App() {
  const experiences = [
    {
      image: "https://picsum.photos/250/350",
      url: "#",
      rating: "5.0",
      reviews: "6",
      location: "USA",
      cost: "126",
      status: 'Sold out',
      description: "Life lessons with Katie Zaferes"
    },
    {
      image: "https://picsum.photos/350/350",
      url: "#",
      rating: "5.0",
      reviews: "30",
      location: "USA",
      cost: "125",
      status: 'Online',
      description: "Learn wedding photography"
    },
    {
      image: "https://picsum.photos/250/450",
      url: "#",
      rating: "4.8",
      reviews: "2",
      location: "USA",
      cost: "50",
      description: "Group Mountain Biking"
    }
  ];
  return (<div className="app">
    <Nav
      logo="./airbnblogo.png"
      url="#"
      className="nav" />
    <Hero
      image="./airbnbhero.png"
      className="hero" />
    <Section
      title="Online Experiences"
      cards={experiences}
      className="cards--carousel">
        <p>Join unique interactive activities led by one-of-a-kind hosts &mdash; all without leaving home.</p>
    </Section>
  </div>);
}