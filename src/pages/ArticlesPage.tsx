import { Box, ImageList } from "@mui/material";
// import { Typography } from "@mui/material";
// import MarkdownComponent from "../components/MarkdownComponent";
// import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { Grid } from "@mui/material";
import RecipeBox from "../components/RecipeBox";
import { getArticles } from "../recipes/recipes";
// import { theme } from "../components/theme";
/**
 *
 * @return {div} home element
 */
function ArticlesPage() {
  const articlesList = getArticles();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        flexGrow: 1,
        textAlign: "left",
        alignContent: "flex-start",
      }}>
      <h1>Articles</h1>
      <ImageList
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr) !important", // 1 column on mobile
            sm: "repeat(2, 1fr) !important", // 2 columns on tablet
            md: "repeat(3, 1fr) !important", // 3 columns on desktop
          },
        }}>
        {articlesList.map((article) => (
          <RecipeBox
            key={article.link}
            title={article.title}
            author={article.author}
            link={article.link}
            image={article.image}
          />
        ))}
      </ImageList>

      <Outlet />
    </Box>
  );
}

export default ArticlesPage;
