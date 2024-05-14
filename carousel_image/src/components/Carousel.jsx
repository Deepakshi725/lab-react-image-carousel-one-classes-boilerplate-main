import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    handlePrev = () => {
        const { currentIndex } = this.state;
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        this.setState({ currentIndex: newIndex });
    };

    handleNext = () => {
        const { currentIndex } = this.state;
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        this.setState({ currentIndex: newIndex });
    };

    render() {
        const { currentIndex } = this.state;
        return (
            <div className="carousel-container">
                <button className="carousel-button carousel-button-left" onClick={this.handlePrev}>
                    <ArrowBackIosIcon />
                </button>
                <div className="carousel-slide" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="carousel-item">
                            <img src={image.img} alt={image.title} className="carousel-image" />
                            <div className="carousel-caption">
                                <h3 className="carousel-title">{image.title}</h3>
                                <p className="carousel-subtitle">{image.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-button carousel-button-right" onClick={this.handleNext}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        );
    } 
}

export default Carousel;