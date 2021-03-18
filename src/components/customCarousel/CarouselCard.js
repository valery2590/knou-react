import { useState, useEffect } from "react"
const CarouselCard = ({ possibleMatch }) => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/photo/${possibleMatch._id}/photos`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPhoto(json));
  }, []);

  const photoBuffer = photo.map((e) => {
    const src = `data:${e.mimetype};base64,${Buffer.from(e.photo.data).toString(
      "base64"
    )}`;
    return src;
  });

  return (
    <div className="profilePicture__container">
      <img src={photoBuffer[0]} className="profilePicture" />
    </div>
  )
};


export default CarouselCard;

/* import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const CustomCarousel = ({photos}) => {

    const photoBuffer = photos.map((e) => {
        const src = `data:${e.mimetype};base64,${Buffer.from(e.photo.data).toString(
          "base64"
        )}`;
        return src;
      });

    const carouselItem = () => {
        photoBuffer.map((photo) => (
         <div className="profilePicture__container">
            <img src={photo} className="profilePicture" />
          </div>
        ))
    }


    return (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
        </CarouselProvider>
      );
}



export default  CustomCarousel; */