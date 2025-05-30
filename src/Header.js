import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function Header(){
    return (
        <div className="App">
        <Box sx={{flexGrow:1}}>
            <Grid container spacing={2}>
            <Grid size={8}>
                <Button variant="contained">In Header</Button>
            </Grid>
            <Grid size={4}>
                <Button variant="contained">Hello world</Button>
            </Grid>
            </Grid>
        </Box>
        </div>
    );
}

export default Header;