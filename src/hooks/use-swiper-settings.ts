import { useMediaQuery, useTheme } from "@mui/material";
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function useSwiperSettings(): SwiperOptions & {
  style: { [key: string]: string | number };
} {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return {
    style: {
      paddingLeft: isLargeScreen ? 50 : 32,
      paddingRight: isLargeScreen ? 50 : 32,
      paddingTop: 50,
      paddingBottom: 50,
      "--swiper-navigation-color": "#FFF",
      "--swiper-pagination-color": "#FFF",
      "--swiper-pagination-bullet-inactive-color": "#FFF",
      "--swiper-pagination-bullet-inactive-opacity": "0.2",
      "--swiper-navigation-sides-offset": "0px",
    },
    cssMode: true,
    slidesPerView: "auto",
    centeredSlides: false,
    grabCursor: true,
    spaceBetween: 32,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      [theme.breakpoints.values.md]: {
        slidesPerView: 3,
      },
    },
    navigation: true,
    pagination: {
      clickable: true,
    },
    freeMode: true,
    modules: [Keyboard, Pagination, Navigation, FreeMode],
  };
}
