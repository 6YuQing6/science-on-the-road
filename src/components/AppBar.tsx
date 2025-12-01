import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { IconButton } from '@mui/material';
import FlatwareIcon from "@mui/icons-material/Flatware";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

export default function ResponsiveAppBar() {
  // const [title, setTitle] = React.useState('Posts');

  // React.useEffect(() => {
  //   if (mainContext.home == false) {
  //     setTitle("Friends");
  //   } else {
  //     setTitle("Posts");
  //   }
  // }, [mainContext.home])

  // const back = () => {
  //   mainContext.setHome(true);
  // }

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };

  const pagesText = ["Home", "Recipes", "About Us"];
  const pagesLink = ["/", "/sunny-portfolio/recipes", "/sunny-portfolio/about"];

  const Pages = (
    <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
      {pagesText.map((page, index) => (
        <Button
          variant="text"
          color="inherit"
          key={page}
          href={pagesLink[index]}
          onClick={handleCloseNavMenu}>
          {page}
        </Button>
      ))}
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button variant="text" color="inherit" href="/">
              <FlatwareIcon />
              <Typography> Taste Without Trouble </Typography>
            </Button>

            {Pages}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
