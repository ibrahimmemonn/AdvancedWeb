import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import ProductItem from "./ProductItem";

const Products = () => {
  const item = [
    {
      src: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg",
      data: "dataaa1",
      image1:
        "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw",
      relatedImage:
        "https://global-uploads.webflow.com/624f3ea5855564752ba38fcb/62fc7c20e34d0ec3d643ebd3_10-plus-Project-Ideas-for-Computer-Vision.jpg",
    },
    {
      src: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg",
      data: "aadataaa2",
      image1: "https://www.w3schools.com/css/img_lights.jpg",
      relatedImage:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/A_Sunflower.jpg",
      relatedImage2:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/A_Sunflower.jpg",
      relatedImage3:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/A_Sunflower.jpg",
    },
    {
      src: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg",
      data: "sssdataaa3",
      image1:
        "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw",
      relatedImage:
        "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },
    {
      src: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg",
      data: "ddddataaa4",
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Oyh1_FLLWGE8f02pronOFT7TBbNFmyy3ow8tTJE-84_2_IQ95fqdfgWyLdw-tMXP4FM&usqp=CAU",
      relatedImage:
        "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  return (
    <Container>
      <Row>
        {item?.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
