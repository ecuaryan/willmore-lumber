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
    linkText: "Learn More about Rough-Cut Lumber",
  },
  {
    imagePath: "/posts-and-beams.webp",
    imageDescription: "Posts and Beams",
    heading: "Posts and Beams",
    text: "Strong, durable, and customizable—our posts and beams are crafted to support and enhance your construction projects with the beauty of natural wood.",
    learnMorePath: "/posts-and-beams",
    linkText: "Learn More about Posts and Beams",
  },
  {
    imagePath: "/framing-lumber-1.jpg",
    imageDescription: "Framing Lumber",
    heading: "Build Strong Structures with Quality Framing Lumber",
    text: "Reliable and durable framing lumber for all your construction needs, crafted to provide strength and stability for every project.",
    learnMorePath: "/framing-lumber",
    linkText: "Learn More about Framing Lumber",
  },
  {
    imagePath: "/tongue-and-groove.webp",
    imageDescription: "Tongue and Groove Boards",
    heading: "Versatile Tongue and Groove Solutions",
    text: "Discover the natural beauty of knotty pine and Douglas fir tongue-and-groove boards, perfect for a wide range of applications.",
    learnMorePath: "/tongue-and-groove",
    linkText: "Learn More about Tongue and Groove",
  },
  {
    imagePath: "/flooring.jpg",
    imageDescription: "Resawn Flooring",
    heading: "Smooth or Resawn, Durable Flooring",
    text: "Elevate your space with our smooth or resawn, durable flooring—designed for both beauty and lasting performance.",
    learnMorePath: "/flooring",
    linkText: "Learn More about Flooring",
  },
  {
    imagePath: "/decking.webp",
    imageDescription: "Decking",
    heading: "Create Your Perfect Outdoor Space with Durable Decking",
    text: "Enhance your outdoor living with our premium wood decking, designed for durability and style. Perfect for creating beautiful, long-lasting spaces.",
    learnMorePath: "/decking",
    linkText: "Learn More about Decking",
  },
  {
    imagePath: "/siding.webp",
    imageDescription: "Siding",
    heading: "Transform Your Home with Timeless Wood Siding",
    text: "Elevate your home's curb appeal with our high-quality wood siding, crafted for both durability and aesthetic appeal. Perfect for a lasting first impression.",
    learnMorePath: "/siding",
    linkText: "Learn More about Siding",
  },
  {
    imagePath: "/baled-shavings.jpg",
    imageDescription: "Baled Shavings",
    heading: "Premium Baled Shavings for Clean, Comfortable Bedding",
    text: "Keep your animals happy with our high-quality baled shavings, ideal for providing clean, soft, and absorbent bedding. Perfect for stables, coops, and more.",
    learnMorePath: "/baled-shavings",
    linkText: "Learn More about Baled Shavings",
  },
  {
    imagePath: "/firewood.jpg",
    imageDescription: "Firewood",
    heading: "Firewood for Cozy Nights and Warmth",
    text: "Stock up on premium firewood, cut and seasoned for efficient burning. Perfect for fireplaces, wood stoves, and outdoor fire pits.",
    learnMorePath: "/firewood",
    linkText: "Learn More about Firewood",
  },
  {
    imagePath: "/railroad-ties.jpg",
    imageDescription: "Railroad Ties",
    heading: "Durable Railroad Ties for Your Next Project",
    text: "Our #1/#2 grade used railroad ties are perfect for landscaping, construction, and other heavy-duty applications. Built to last and versatile for a range of uses.",
    learnMorePath: "/railroad-ties",
    linkText: "Learn More about Railroad Ties",
  },
  {
    imagePath: "/wood-stain.webp",
    imageDescription: "Wood Stain",
    heading: "Protect and Enhance with Quality Wood Stain",
    text: "Bring out the natural beauty of your wood with our exceptional stains, offering long-lasting protection and rich, vibrant finishes.",
    learnMorePath: "/wood-stain",
    linkText: "Learn More about Wood Stain",
  },
  {
    imagePath: "/custom-beams.webp",
    imageDescription: "Custom-Cut Beams",
    heading: "Custom-Cut Lumber for Every Project",
    text: "We custom-cut lumber to match your specifications.",
    learnMorePath: "/custom-cut-lumber",
    linkText: "Learn More about Custom-Cut Lumber",
  },
  {
    imagePath: "/delivery.webp",
    imageDescription: "Delivery",
    heading: "Fast and Reliable Delivery for Your Wood Products",
    text: "Get your wood products delivered straight to your home with our dependable delivery service. Convenient and hassle-free, saving you time and effort.",
    learnMorePath: "/delivery",
    linkText: "Learn More about Delivery",
  },
];

export default function ProductShowcase() {
  const swiperProps = useSwiperSettings();

  return (
    <Box mt={"50px"}>
      <Typography component="h2" variant="h4">
        The Goods From The Woods
      </Typography>
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
