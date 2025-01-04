import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function ShowcaseItem({
  imagePath,
  imageDescription,
  heading,
  text,
  learnMorePath,
}: {
  imagePath: string;
  imageDescription: string;
  heading: string;
  text: string;
  learnMorePath: string;
}) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={imagePath}
        alt={imageDescription}
        title={imageDescription}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={learnMorePath}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
