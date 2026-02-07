import type { ImageListItemProps } from "@mui/material";
// import CustomCard from "./Card";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";

interface RecipeProps extends ImageListItemProps {
  image: string;
  title: string;
  link: string;
  author: string;
}

function RecipeBox({ image, title, link, author }: RecipeProps) {
  return (
    <Link to={link}>
      <ImageListItem
        key={image}
        sx={{
          width: "100%",
          aspectRatio: "1 / 1", // square (use 16 / 9 if you want)
          overflow: "hidden",
        }}>
        <img
          srcSet={`${image}`}
          src={`${image}`}
          alt={title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: "8px",
          }}
        />
      </ImageListItem>
      <ImageListItemBar
        title={title}
        subtitle={<span>by: {author}</span>}
        position="below"
      />
    </Link>
  );
}

export default RecipeBox;
