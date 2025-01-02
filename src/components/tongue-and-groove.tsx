import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function TongueAndGroove() {
  return (
    <Card>
      <CardMedia
        sx={{ height: 250 }}
        image="/tongue-and-groove.jpg"
        title="tongue and groove"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Versatile Tongue and Groove Solutions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discover the natural beauty of knotty pine and Douglas fir
          tongue-and-groove panels, perfect for a wide range of applications.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="/products">
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
