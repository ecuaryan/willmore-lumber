import { useMediaQuery, useTheme } from "@mui/material";
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper/modules";

export default function useSwiperSettings() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return {
    cssMode: true,
    style: {
      paddingLeft: isLargeScreen ? 50 : 30,
      paddingRight: isLargeScreen ? 50 : 30,
      paddingTop: 50,
      paddingBottom: 50,
      "--swiper-navigation-color": "#FFF",
      "--swiper-pagination-color": "#FFF",
      "--swiper-pagination-bullet-inactive-color": "#FFF",
      "--swiper-pagination-bullet-inactive-opacity": "0.2",
      "--swiper-navigation-sides-offset": "0px",
    },
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    spaceBetween: 32,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      [theme.breakpoints.values.md]: {
        slidesPerView: 3,
        slidesPerGroup: 3,
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
