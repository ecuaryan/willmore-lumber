"use client";

import useSwiperSettings from "@/hooks/use-swiper-settings";

import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    imagePath: "/flooring.jpg",
    imageDescription: "Smooth Flooring",
    heading: "Smooth or Resawn, Durable Flooring",
    text: "Elevate your space with our smooth or reswan, durable flooring—designed for both beauty and lasting performance.",
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
  {
    imagePath: "/baled-shavings.jpg",
    imageDescription: "Baled Shavings",
    heading: "Premium Baled Shavings for Clean, Comfortable Bedding",
    text: "Keep your animals happy with our high-quality baled shavings, ideal for providing clean, soft, and absorbent bedding. Perfect for stables, coops, and more.",
    learnMorePath: "/baled-shavings",
  },
  {
    imagePath: "/firewood.jpg",
    imageDescription: "Firewood",
    heading: "Firewood for Cozy Nights and Warmth",
    text: "Stock up on premium firewood, cut and seasoned for efficient burning. Perfect for fireplaces, wood stoves, and outdoor fire pits.",
    learnMorePath: "/firewood",
  },
  {
    imagePath: "/railroad-ties.jpg",
    imageDescription: "Railroad Ties",
    heading: "Durable Railroad Ties for Your Next Project",
    text: "Our premium-grade railroad ties are perfect for landscaping, construction, and other heavy-duty applications. Built to last and versatile for a range of uses.",
    learnMorePath: "/railroad-ties",
  },
  {
    imagePath: "/wood-stain.webp",
    imageDescription: "Wood Stain",
    heading: "Protect and Enhance with Quality Wood Stain",
    text: "Bring out the natural beauty of your wood with our exceptional stains, offering long-lasting protection and rich, vibrant finishes.",
    learnMorePath: "/wood-stain",
  },
  {
    imagePath: "/custom-beams.webp",
    imageDescription: "Custom-Cut Beams",
    heading: "Custom-Cut Lumber for Every Project",
    text: "We custom-cut lumber to perfectly match your specifications.",
    learnMorePath: "/custom-cut-lumber",
  },
  {
    imagePath: "/delivery.webp",
    imageDescription: "Delivery",
    heading: "Fast and Reliable Delivery for Your Wood Products",
    text: "Get your wood products delivered straight to your home with our dependable delivery service. Convenient and hassle-free, saving you time and effort.",
    learnMorePath: "/delivery",
  },
];

export default function ProductShowcase() {
  const swiperProps = useSwiperSettings();

  return (
    <Box mt={"50px"}>
      <Typography variant="h4">The Goods From The Woods</Typography>
      <Typography variant="subtitle1">
        Browse our wide selection of high-quality wood products and services
      </Typography>
      <Swiper {...swiperProps}>
        {showcaseItems.map((s, index) => (
          <SwiperSlide key={`showcase-item-${index}`}>
            <ShowcaseItem {...s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
