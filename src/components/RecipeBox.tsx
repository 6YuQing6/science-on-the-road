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
    <ImageListItem key={image}>
      <Link to={link}>
        <img
          srcSet={`${image}`}
          src={`${image}`}
          alt={title}
          loading="lazy"
          style={{
            width: "auto",
            maxWidth: "100%",
            height: "auto",
            maxHeight: "100%",
          }}
        />
        <ImageListItemBar
          title={title}
          subtitle={<span>by: {author}</span>}
          position="below"
        />
      </Link>
    </ImageListItem>
  );
}

export default RecipeBox;
