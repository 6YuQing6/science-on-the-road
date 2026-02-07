import { Box } from "@mui/material";
// import { Typography } from "@mui/material";
// import MarkdownComponent from "../components/MarkdownComponent";
// import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { getIngredients } from "../recipes/recipes";
import { IngredientItem } from "../components/Ingredient";
// import { Grid } from "@mui/material";

// import { theme } from "../components/theme";
/**
 *
 * @return {div} home element
 */
function IngredientsPage() {
  const ingredients = getIngredients();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        flexGrow: 1,
        textAlign: "left",
        alignContent: "flex-start",
      }}>
      <h1>All Ingredients</h1>
      {Object.entries(ingredients).map(([name, value]) => (
        <IngredientItem
          key={name}
          name={name}
          description={value.description}
          summary={value.summarized_description}
        />
      ))}
      <Outlet />
    </Box>
  );
}

export default IngredientsPage;
