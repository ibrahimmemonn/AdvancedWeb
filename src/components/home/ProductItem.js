import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";

const ProductItem = ({ item }) => {
  const { Meta } = Card;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = ({ item }) => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Col lg={3} style={{ borderRadius: 25 }}>
        <Card
          hoverable
          style={{ width: "100%", marginBottom: 20 }}
          cover={
            <LazyLoadImage
              src={item?.src}
              onClick={() => {
                showModal(item);
              }}
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Modal
        style={{ marginTop: 0 }}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <LazyLoadImage
          style={{ width: "100%", marginBottom: 20 }}
          src={item?.image1}
        />
        <p>{item?.data}</p>
        <p>{item?.data}</p>
        <Row>
          <Slider {...settings}>
            <LazyLoadImage
              style={{ width: "35%", marginBottom: 20 }}
              src={item?.relatedImage}
            />

            <LazyLoadImage
              style={{ width: "35%", marginBottom: 20 }}
              src={item?.relatedImage2}
            />

            <LazyLoadImage
              style={{ width: "35%", marginBottom: 20 }}
              src={item?.relatedImage3}
            />

            <LazyLoadImage
              style={{ width: "35%", marginBottom: 20 }}
              src={item?.relatedImage3}
            />

            <LazyLoadImage
              style={{ width: "35%", marginBottom: 20 }}
              src={item?.relatedImage3}
            />

            <LazyLoadImage
              style={{ width: "35%", marginBottom: 20 }}
              src={item?.relatedImage3}
            />
          </Slider>
        </Row>
      </Modal>
    </>
  );
};

export default ProductItem;
