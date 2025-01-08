import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
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
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Card>
      <CardMedia
        component="img"
        height={isLargeScreen ? 300 : 200}
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
