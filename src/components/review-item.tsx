import { Card, CardContent, Typography } from "@mui/material";

export default function ReviewItem({ text }: { text: string }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1" color="text.secondary" textAlign={"center"}>
          &quot;{text}&quot;
        </Typography>
      </CardContent>
    </Card>
  );
}
