import StarIcon from "@mui/icons-material/Star";
import { Card, CardContent, Stack, Typography } from "@mui/material";

export default function ReviewItem({
  text,
  author,
}: {
  text: string;
  author: string;
}) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1} direction={"row"} justifyContent={"center"}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Stack>
        <Typography variant="body1" color="text.secondary" mt={2}>
          &quot;{text}&quot;
        </Typography>
        <Typography
          variant="body2"
          mt={2}
          color="text.secondary"
          textAlign={"right"}
        >
          - {author}
        </Typography>
      </CardContent>
    </Card>
  );
}
