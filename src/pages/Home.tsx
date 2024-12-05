import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import "../styles/Home.css";
import Resume from '../assets/images/resume.png';
import Contact from '../assets/images/contact.png';
import Projects from '../assets/images/projects.png';
import Portfolio from '../assets/images/portfolio.png';
import Showreel from '../assets/images/showreel.png';
import { gsap } from 'gsap';

const Home = () => {
    const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);  // Type the ref correctly

    useEffect(() => {
        // Initial card animation on page load (enter animation)
        gsap.fromTo(
            cardsRef.current,
            {
                opacity: 0,
                y: 50, // Move the cards up from 50px below
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2, // Stagger each card's animation
                ease: "power3.out",
            }
        );
    }, []);


    const cards = [
        {
            key: "contact",
            title: "Contact",
            style: { gridArea: "contact", backgroundImage: `url(${Contact})` },
            link: "/contact",  // Add link path for the card
        },
        {
            key: "portfolio",
            title: "Portfolio",
            style: { gridArea: "portfolio", backgroundImage: `url(${Portfolio})` },
            link: "/portfolio",  // Add link path for the card
        },
        {
            key: "resume",
            title: "Resume",
            style: { gridArea: "resume", backgroundImage: `url(${Resume})` },
            link: "/resume",  // Add link path for the card
        },
        {
            key: "projects",
            title: "Projects",
            style: { gridArea: "projects", backgroundImage: `url(${Projects})` },
            link: "/projects",  // Add link path for the card
        },
        {
            key: "showreel",
            title: "Showreel",
            style: { gridArea: "showreel", backgroundImage: `url(${Showreel})` },
            link: "/showreel",  // Add link path for the card
        },
    ];

    return (
        <div className="collage-layout">
            {cards.map((card, i) => (
                <Link to={card.link} key={card.key} className="card-link collage-card" style={{
                    ...card.style,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    ref={(el) => (cardsRef.current[i] = el)}

                >  {/* Wrap card with Link */}
                    <div className="card-title">{card.title}</div>
                </Link>
            ))}
        </div>
    );
};

export default Home;
