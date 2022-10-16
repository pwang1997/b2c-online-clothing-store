import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {Button, Link} from "@mui/material";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import Grid from "@mui/material/Unstable_Grid2";
import NavBar from "../NavBar";

export default function Header() {

    return (
        <Box sx={{flexGrow: 1, mb : 2}}>
            <AppBar position="static">
                {/*<Toolbar>*/}
                <Grid container>
                    <Grid item xs={0.5} md={0.5}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={1} md={1} display={{xs: "none", md: "block"}}>
                        <Link href="/" underline="none" color="white">
                            <Button variant="secondary">B2C-G8</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={8} sx={{flex: 1}}>
                        <SearchBar />
                    </Grid>
                    <Grid item xs={1}>
                        <UserMenu/>
                    </Grid>
                </Grid>
                {/*</Toolbar>*/}
            </AppBar>
        </Box>
    );
}
