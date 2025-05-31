import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function Header(){
    return (
        <Box sx={{flexGrow:1}}>
            <Grid container spacing={0}>
                <Grid container size={4} justifyContent="center">
                    <Button variant="contained" >Researh, Projects, Math</Button>
                </Grid>
                <Grid container size={4} justifyContent="center">
                    <Button variant="contained">Alex Karduna</Button>
                </Grid>                
                <Grid container size={4} justifyContent="center">
                    <Button variant="contained">Resume, About, Contact</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;