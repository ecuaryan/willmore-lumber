import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function RoughCut() {
  return (
    <Card>
      <CardMedia
        sx={{ height: 250 }}
        image="/rough-cut-lumber.jpg"
        title="rough cut lumber"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Premium Rough-Cut Lumber
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We carry a wide variety of lengths and sizes in premium rough-cut
          lumber, ready to meet your project needs.
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
