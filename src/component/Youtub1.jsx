import {Button, Typography} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import Settings from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";
function Youtub1() {
    const BlueButton=styled(Button)({
        backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
            backgroundColor:"lightblue"
        }

    })
    return (
      <div >
  
  <Button variant="text">Text</Button>
<Button  startIcon={<Settings />} variant="contained" color="secondary" size="small"> Contained</Button>
<Button variant="outlined">Outlined</Button>
  <Typography variant="h1" component="p">
h1 is a one content
  </Typography>

<BlueButton>My Button</BlueButton>
<BlueButton>My Button</BlueButton>

      </div>

    );
  }
  
  export default Youtub1;