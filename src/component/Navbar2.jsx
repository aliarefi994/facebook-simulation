import { AppBar, InputBase, Toolbar, Typography  } from "@mui/material";
import { red, green, blue, deepOrange } from '@mui/material/colors';
import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Search from "@mui/icons-material/Search";
import Autocomplete from '@mui/material/Autocomplete';

let theme=createTheme();

const sxToolbar={
    display:"flex",
    alignItems:"center",
    ml:10,
      backgroundColor:alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
      },
      borderRadius:theme.shape.borderRadius
}



const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: blue[500],
      border:5,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
      color:deepOrange[200]

    },
  }));
function Navbar2() {
    return (
      <div >
     <AppBar>
     <Toolbar sx={{display:"felex", justifyContent:"space-between"}} >
      <Root sx={{border:[5], borderRadius:[5]}}>Ali&Farah</Root>
      
    
   <div sx={{...theme.toolbar}}>
        <InputBase     placeholder="جستوجو کنید. . . " />
        <Search />
    </div>
    ایکون
      </Toolbar>
      
     </AppBar>
   
      </div>
    );
  }
  
  export default Navbar2;
  