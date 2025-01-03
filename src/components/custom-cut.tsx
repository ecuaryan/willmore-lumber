import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function CustomCut() {
  return (
    <Card>
      <CardMedia
        sx={{ height: 250 }}
        image="/custom-beams.jpg"
        title="custom beams"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Custom-Cut Lumber for Every Project
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We custom-cut lumber to perfectly match your specifications.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="/custom-cut-lumber">
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
