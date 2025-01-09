"use client";

import useSwiperSettings from "@/hooks/use-swiper-settings";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import ReviewItem from "./review-item";

const reviewItems = [
  {
    text: "Excellent quality Douglas Fir at a great price and quick turn around. These guys beat other mills in every category. I purchased 8x8 and 8x12 beams for my timber frame home and couldn't be more happy.",
    author: "Tim Johnson",
  },
  {
    text: "Beautiful wood at a great price! We got some 6x6 untreated posts for our covered patio project and we were not disappointed.",
    author: "Kelly Boyd",
  },
  {
    text: "I have bought lumber and wood shavings at this business, and can't speak highly enough about the experience. The price on the lumber was competitive and fair, especially considering the cost of lumber at the large box stores. They have great people who are willing to help you and understand what would be the best solution to your situation based on budget, project, and overall goals. Very good buying experience!",
    author: "Food Critic",
  },
  {
    text: "I have made two orders with them for my basement remodel. The wood is a great quality, way better than what you'd get at Lowe's or Home Depot. Also the price is pretty comparable as well. Both times I went they were quick to help and get my lumber loaded up and I was back on the road quickly.",
    author: "Malcolm Bathke",
  },
  {
    text: "I love this place. The lumber is beautiful, the price very reasonable and the service is great. It seems it is a family run operation where everyone works together in a very calm and coordinated way. The fragrance of all the lumber being cut is heavenly. :)",
    author: "Diane Arnold",
  },
  {
    text: "Wow! Very high quality lumber and great service...add in a fair price! We are very pleased. We will tell family and friends. Our round trip was a bit over 200 miles but worth it!",
    author: "Lianne Kubs",
  },
  {
    text: "Anyone who's ever done business here knows this already but for those that don't, these are some of the nicest people you'll ever do business with. You'd expect a lumber mill to be run by gruff, grizzled, leathernecked old guys that make you nervous to look at let alone talk to but everyone at Willmore Lumber is friendly, helpful and a pleasure to work with... oh and they are a pretty good mill too.",
    author: "Dana Denney",
  },
  {
    text: "Ordered a couple buckets of log home stain. They got it in later in the week. I thought they were open on Saturday until 12. Nope, I had called and left a message. Rod called me back and said if I wanted to come up and get it he would meet me there... it was my only day I could get it. Thank you for going above and beyond.",
    author: "Paul Williams",
  },
];

export default function Reviews() {
  const swiperProps = useSwiperSettings();

  return (
    <Box mt={"50px"}>
      <Typography component="h2" variant="h4">
        What Our Customers Say
      </Typography>
      <Typography variant="subtitle1">
        See why our customers choose us for their wood product needs
      </Typography>
      <Swiper {...swiperProps}>
        <SwiperSlide>
          <Card>
            <CardHeader title="Share Your Experience" />
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                We&apos;d love to hear from you! Click below to leave a review
                or read what others are saying about us.
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                href={"https://g.page/r/CaW6YsC7A_erEAE/review"}
                target="_blank"
              >
                <Button size="small">Write a Review on Google</Button>
              </Link>
            </CardActions>
          </Card>
        </SwiperSlide>
        {reviewItems.map((r) => (
          <SwiperSlide key={r.text}>
            <ReviewItem text={r.text} author={r.author} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
