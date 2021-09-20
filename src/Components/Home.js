import './Home.css';
import Button from '@mui/material/Button';
import { useContext, createContext, useState } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
  
const themes = {
  light: {
    text: "light",
    background: "#ededed",
    color: "#282c34",
    navbarBg: "#0a1d45",
  },
  dark: {
    text: "dark",
    background: "#282c34",
    color: "#ededed",
    navbarBg: "#0f2e6e",
  },
};

const ThemeContext = createContext();

export default function Home() {
    const [valueTheme, setValueTheme] = useState(themes.dark);
    return (
        <ThemeContext.Provider value={valueTheme}>
          <AppBar style={{ padding: "10px", marginBottom: "100px", backgroundColor: valueTheme.navbarBg }}>
            <Typography style={{ margin: "auto", color: "#ededed", fontWeight: "bold" }}>RECIPES LIST APP</Typography>
          </AppBar>
          <div className="Home" style={{ backgroundColor: valueTheme.background}}>
              <Grid container>
                <Grid item md={12}>
                    <Typography style={{ color: valueTheme.color, fontSize: 56, fontWeight: "bold" }}>
                        Welcome to your very own recipes list app
                    </Typography>
                    <Button style={{ color: valueTheme.color }} href="/list">Jump into recipes list</Button>
                </Grid>
                <Grid item md={12} style={{ padding: "50px" }}>
                  <img src="./logoKel8-trans.svg" alt="Logo kelompok 8" height="200px" width="200px"/>
                </Grid>                
                <Grid item md={12}>
                  <Button
                  style={{ color: valueTheme.color, fontWeight: "bold" }}
                  onClick={() =>
                    setValueTheme(
                      valueTheme === themes.light ? themes.dark : themes.light
                    )
                  }>Change theme</Button>  
                </Grid>
                <Grid item md={12}>
                  <Content />
                </Grid>
              </Grid>
          </div>
        </ThemeContext.Provider>
    );
}

function Content(props) {
  const theme = useContext(ThemeContext);
  return (
    <Typography style={{ color: theme.color  }}>
      current theme is {theme.text}
    </Typography>
  );
}
