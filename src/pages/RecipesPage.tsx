import { Box } from "@mui/material";
import { Typography } from "@mui/material";
// import MarkdownComponent from "../components/MarkdownComponent";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
/**
 *
 * @return {div} home element
 */
function RecipesPage() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <Typography variant="h4">Recipes</Typography>
      <Grid container spacing={2}>
        <Link to="recipe1">Cozy Chai Latte Cookie Recipe</Link>
        <Link to="recipe2">Cozy Chai Latte Cookie Recipe 2</Link>
        <Link to="recipe1">Cozy Chai Latte Cookie Recipe</Link>
      </Grid>

      <Outlet />
    </Box>
  );
}

export default RecipesPage;
