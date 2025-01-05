"use client";

import { Box, Typography, useTheme } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ReviewItem from "./review-item";

const reviewItems = [
  {
    text: "Excellent quality Douglas Fir at a great price and quick turn around. These guys beat other mills in every category. I purchased 8x8 and 8x12 beams for my timber frame home and couldn't be more happy.",
  },
  {
    text: "Beautiful wood at a great price! We got some 6x6 untreated posts for our covered patio project and we were not disappointed.",
  },
  {
    text: "I have bought lumber and wood shavings at this business, and can't speak highly enough about the experience. The price on the lumber was competitive and fair, especially considering the cost of lumber at the large box stores. They have great people who are willing to help you and understand what would be the best solution to your situation based on budget, project, and overall goals. Very good buying experience!",
  },
  {
    text: "I have made two orders with them for my basement remodel. The wood is a great quality, way better than what you'd get at Lowe's or Home Depot. Also the price is pretty comparable as well. Both times I went they were quick to help and get my lumber loaded up and I was back on the road quickly.",
  },
  {
    text: "I love this place. The lumber is beautiful, the price very reasonable and the service is great. It seems it is a family run operation where everyone works together in a very calm and coordinated way. The fragrance of all the lumber being cut is heavenly. :)",
  },
  {
    text: "Wow! Very high quality lumber and great service...add in a fair price! We are very pleased. We will tell family and friends. Our round trip was a bit over 200 miles but worth it!",
  },
  {
    text: "Anyone who's ever done business here knows this already but for those that don't, these are some of the nicest people you'll ever do business with. You'd expect a lumber mill to be run by gruff, grizzled, leathernecked old guys that make you nervous to look at let alone talk to but everyone at Willmore Lumber is friendly, helpful and a pleasure to work with... oh and they are a pretty good mill too.",
  },
  {
    text: "Ordered a couple buckets of log home stain. They got it in later in the week. I thought they were open on Saturday until 12. Nope, I had called and left a message. Rod called me back and said if I wanted to come up and get it he would meet me there... it was my only day I could get it. Thank you for going above and beyond.",
  },
];

const swiperCustomStyles = {
  "--swiper-navigation-color": "white",
  "--swiper-pagination-color": "white",
  "--swiper-pagination-bullet-inactive-color": "#FFF",
  "--swiper-pagination-bullet-inactive-opacity": "0.2",
};

export default function Reviews() {
  const theme = useTheme();

  return (
    <Box mt={"50px"}>
      <Typography variant="h4">What Our Customers Say</Typography>
      <Typography variant="subtitle1">
        See why our customers choose us for their wood product needs
      </Typography>
      <Swiper
        cssMode={true}
        style={{
          padding: 50,
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
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[Keyboard, Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
        {reviewItems.map((r) => (
          <SwiperSlide key={r.text}>
            <ReviewItem text={r.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
