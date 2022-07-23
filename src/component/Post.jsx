import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Ali Arefi"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        میلیاردها انسان در جهان متولد شده اند؛ اما هیچ یک اثر انگشت مشابه نداشته‌اند. اثر انگشت تو، امضای خداوند است که اتفاقی به دنیا نیامده‌ای و دعوت شده‌ای تو منحصر به فردی مشابه یا بدل نداری تو اصل اصل هستی و تکرار نشدنی وقتی انتخاب شده بودن و منحصر به فرد بودنت را یادآوری کنی؛ دیگر خودت را با هیچکس مقایسه نمی‌کنی و احساس حقارت یا برتری که حاصل مقایسه کردن است از وجودت محو می‌شود.

حسین الهی قمشه‌ای
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;