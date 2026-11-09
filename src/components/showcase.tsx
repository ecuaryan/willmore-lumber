import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";

const showcaseItems = [
  {
    imagePath: "/rough-cut-lumber.webp",
    imageDescription: "Rough-Cut Lumber",
    text: "We carry a wide variety of lengths and sizes in premium rough-cut lumber, ready to meet your project needs.",
    learnMorePath: "/rough-cut-lumber",
  },
  {
    imagePath: "/posts-and-beams.webp",
    imageDescription: "Posts and Beams",
    text: "Strong, durable, and customizable—our posts and beams are crafted to support and enhance your construction projects with the beauty of natural wood.",
    learnMorePath: "/posts-and-beams",
  },
  {
    imagePath: "/framing-lumber-1.jpg",
    imageDescription: "Framing Lumber",
    text: "Reliable and durable framing lumber for all your construction needs, crafted to provide strength and stability for every project.",
    learnMorePath: "/framing-lumber",
  },
  {
    imagePath: "/tongue-and-groove.webp",
    imageDescription: "Tongue and Groove Boards",
    text: "Discover the natural beauty of knotty pine and Douglas fir tongue-and-groove boards, perfect for a wide range of applications.",
    learnMorePath: "/tongue-and-groove",
  },
  {
    imagePath: "/flooring.jpg",
    imageDescription: "Resawn Flooring",
    text: "Elevate your space with our smooth or resawn, durable flooring—designed for both beauty and lasting performance.",
    learnMorePath: "/flooring",
  },
  {
    imagePath: "/decking.webp",
    imageDescription: "Decking",
    text: "Enhance your outdoor living with our premium wood decking, designed for durability and style. Perfect for creating beautiful, long-lasting spaces.",
    learnMorePath: "/decking",
  },
  {
    imagePath: "/siding.webp",
    imageDescription: "Siding",
    text: "Elevate your home's curb appeal with our high-quality wood siding, crafted for both durability and aesthetic appeal. Perfect for a lasting first impression.",
    learnMorePath: "/siding",
  },
  {
    imagePath: "/baled-shavings.jpg",
    imageDescription: "Baled Shavings",
    text: "Keep your animals happy with our high-quality baled shavings, ideal for providing clean, soft, and absorbent bedding. Perfect for stables, coops, and more.",
    learnMorePath: "/baled-shavings",
  },
  {
    imagePath: "/firewood.jpg",
    imageDescription: "Firewood",
    text: "Stock up on premium firewood, cut and seasoned for efficient burning. Perfect for fireplaces, wood stoves, and outdoor fire pits.",
    learnMorePath: "/firewood",
  },
  {
    imagePath: "/railroad-ties.jpg",
    imageDescription: "Railroad Ties",
    text: "Our #1/#2 grade used railroad ties are perfect for landscaping, construction, and other heavy-duty applications. Built to last and versatile for a range of uses.",
    learnMorePath: "/railroad-ties",
  },
  {
    imagePath: "/wood-stain.webp",
    imageDescription: "Wood Stain",
    text: "Bring out the natural beauty of your wood with our exceptional stains, offering long-lasting protection and rich, vibrant finishes.",
    learnMorePath: "/wood-stain",
  },
  {
    imagePath: "/custom-beams.webp",
    imageDescription: "Custom-Cut Beams",
    text: "We custom-cut lumber to match your specifications.",
    learnMorePath: "/custom-cut-lumber",
  },
  {
    imagePath: "/delivery.webp",
    imageDescription: "Delivery",
    text: "Get your wood products delivered straight to your home with our dependable delivery service. Convenient and hassle-free, saving you time and effort.",
    learnMorePath: "/delivery",
  },
];

export default function ProductShowcase() {
  return (
    <Box id="products" mt={"60px"} sx={{ scrollMarginTop: 100 }}>
      <Typography component="h2" variant="h4">
        The Goods From The Woods
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={3}>
        Browse our wide selection of high-quality wood products and services
      </Typography>
      <Grid container spacing={3}>
        {showcaseItems.map((item) => (
          <Grid key={item.learnMorePath} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card sx={{ height: "100%" }}>
              <CardActionArea
                component={Link}
                href={item.learnMorePath}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  justifyContent: "flex-start",
                }}
              >
                <Box sx={{ position: "relative", aspectRatio: "16 / 9" }}>
                  <Image
                    src={item.imagePath}
                    alt={item.imageDescription}
                    fill
                    sizes="(min-width: 1200px) 27vw, (min-width: 600px) 40vw, 90vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography component="h3" variant="h6" gutterBottom>
                    {item.imageDescription}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    px: 2,
                    pb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "primary.main",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  Learn more <ArrowForwardIcon fontSize="small" />
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
