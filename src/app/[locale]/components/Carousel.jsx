import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function CustomSlide(props) {
  const { index, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      style={{
        width: "100%",
        height: "40vh",
        backgroundColor: "rgba(217, 217, 217, 1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      }}
    >
      <h3>{index}</h3>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        /* ...style */ display: "block",
        color: "black",
        position: "absolute",
      }}
      onClick={onClick}
    />
  );
}
export default function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    lazyLoad: true,

    /*    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ], */
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box
      //className="slider-container"
      sx={{
        width: "100%",

        display: "block",
      }}
    >
      <Slider {...settings}>
        <CustomSlide index={0} />
        <CustomSlide index={1} />
        <CustomSlide index={2} />
      </Slider>
    </Box>
  );
}
