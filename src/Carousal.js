import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousal.css";

//https://react-bootstrap.github.io/getting-started/introduction
//watch: https://react-slideshow.herokuapp.com/methods
// https://react-slideshow.herokuapp.com/
//https://stackoverflow.com/questions/64652073/creating-group-image-slider-with-pagination-in-reactjs

const Carousal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    console.log("SelectedIndex", selectedIndex);
  };

  // <ol> is: carousel-indicators
  //document.getElementsByClassName("carousel-indicators")
  // let listName = document.querySelectorAll("carousel-indicators");
  // console.log(listName);
  // let addingNameToList = listName.li.appendChild(
  //   document.createTextNode("Ayesha")
  // );
  // listName.appendChild(addingNameToList);

  return (
    <>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <p>My Test Carousal</p>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
            alt="This is the First slide"
          />
          <Carousel.Caption>
            <h3>January Month slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //src="holder.js/800x400?text=Second slide&bg=282c34"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
            alt="This is  the Second slide"
          />

          <Carousel.Caption>
            <h3>Febuary Month slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousal__item">
          <img
            className="carousal__march"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>March Month slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousal__item">
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
            alt="This is the April slide"
          />
          <Carousel.Caption>
            <h3>April Month slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousal__item">
          <img
            className="carousal__march"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="This is the May slide"
          />
          <Carousel.Caption>
            <h3>May Month slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousal;
