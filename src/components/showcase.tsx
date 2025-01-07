"use client";

import { Box, Typography, useTheme } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ShowcaseItem from "./showcase-item";

const showcaseItems = [
  {
    imagePath: "/rough-cut-lumber.webp",
    imageDescription: "Rough-Cut Lumber",
    heading: "Premium Rough-Cut Lumber",
    text: "We carry a wide variety of lengths and sizes in premium rough-cut lumber, ready to meet your project needs.",
    learnMorePath: "/rough-cut-lumber",
  },
  {
    imagePath: "/posts-and-beams.webp",
    imageDescription: "Posts and Beams",
    heading: "Posts and Beams",
    text: "Strong, durable, and customizable—our posts and beams are crafted to support and enhance your construction projects with the beauty of natural wood.",
    learnMorePath: "/posts-and-beams",
  },
  {
    imagePath: "/tongue-and-groove.webp",
    imageDescription: "Tongue and Groove Boards",
    heading: "Versatile Tongue and Groove Solutions",
    text: "Discover the natural beauty of knotty pine and Douglas fir tongue-and-groove boards, perfect for a wide range of applications.",
    learnMorePath: "/tongue-and-groove",
  },
  {
    imagePath: "/custom-beams.webp",
    imageDescription: "Custom-Cut Beams",
    heading: "Custom-Cut Lumber for Every Project",
    text: "We custom-cut lumber to perfectly match your specifications.",
    learnMorePath: "/custom-cut-lumber",
  },
  {
    imagePath: "/flooring.jpg",
    imageDescription: "Smooth Flooring",
    heading: "Smooth, Sleek, and Durable Flooring",
    text: "Elevate your space with our smooth, durable flooring—designed for both beauty and lasting performance.",
    learnMorePath: "/flooring",
  },
  {
    imagePath: "/decking.webp",
    imageDescription: "Decking",
    heading: "Create Your Perfect Outdoor Space with Durable Decking",
    text: "Enhance your outdoor living with our premium wood decking, designed for durability and style. Perfect for creating beautiful, long-lasting spaces.",
    learnMorePath: "/decking",
  },
  {
    imagePath: "/siding.webp",
    imageDescription: "Siding",
    heading: "Transform Your Home with Timeless Wood Siding",
    text: "Elevate your home's curb appeal with our high-quality wood siding, crafted for both durability and aesthetic appeal. Perfect for a lasting first impression.",
    learnMorePath: "/siding",
  },
];

// TODO: need to move these out of here so they apply site wide probably
// TODO: potentially move out the props too
const swiperCustomStyles = {
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 50,
  paddingBottom: 50,
  "--swiper-navigation-color": "#FFF",
  "--swiper-pagination-color": "#FFF",
  "--swiper-pagination-bullet-inactive-color": "#FFF",
  "--swiper-pagination-bullet-inactive-opacity": "0.2",
  "--swiper-navigation-sides-offset": "0px",
};

export default function ProductShowcase() {
  const theme = useTheme();

  return (
    <Box mt={"50px"}>
      <Typography variant="h4">The Goods From The Woods</Typography>
      <Typography variant="subtitle1">
        Browse our wide selection of high-quality wood products and services
      </Typography>
      <Swiper
        cssMode={true}
        style={{
          ...swiperCustomStyles,
        }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        spaceBetween={32}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          [theme.breakpoints.values.md]: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[Keyboard, Pagination, Navigation, FreeMode]}
      >
        {showcaseItems.map((s) => (
          <SwiperSlide key={s.heading}>
            <ShowcaseItem {...s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
