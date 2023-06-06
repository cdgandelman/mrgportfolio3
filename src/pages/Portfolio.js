import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Portfolio.css"
import image1 from "../assets/screenshot.jpeg"
import image2 from "../assets/Workday1.JPG"
import image3 from "../assets/Notetaker.PNG"
import image4 from "../assets/ImageSearch1.PNG"

export default function Portfolio() {
  const cards = [
    {
      image: image1,
      link: "https://github.com/Paulddncn/Travel-Forecast",
      label: "Travel-Forecast App Project 1"
    },
    {
      image: image2,
      link: "https://github.com/cdgandelman/MRGWorkday",
      label: "Workday Scheduler"
    },
    {
      image: image3,
      link: "https://github.com/cdgandelman/MrG-NoteTaker",
      label: "NoteTaker"
    },
    {
      image: image4,
      link: "https://github.com/cdgandelman/MrGImageSearch",
      label: "Image Search API"
    },
  ];

  return (
    <>
      <NavBar />
      <h2>Portfolio Page</h2>
      <div className="card-container">
        {cards.map((card, index) => (
            <a key={index} href={card.link} className="card">
            <img src={card.image} alt={`Project ${index + 1}`} />
            <div className="label-container">
              <p className="label">{card.label}</p>
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </>
  );
}
