import * as React from 'react'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import BlockIcon from '@mui/icons-material/Block';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

const Navbar = () => {
    const [value, setValue] = React.useState("all");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ display: "flex", minWidth: "fit-content", justifyContent: "center" }}>
            <Paper
                elevation={3}
                sx={{
                    m: 2,
                    display: "flex",
                    direction: "row",
                    justifyContent: "center",
                    borderRadius: "2rem",
                    minWidth: "fit-content",
                }}
            >
                <BottomNavigation
                    sx={{ width: "50%" }}
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction
                        label="All"
                        value="all"
                        icon={<Link to='/'><DensitySmallIcon /></Link>}
                    />

                    <BottomNavigationAction
                        label="Accept"
                        value="accept"
                        icon={<Link to='/accept'><CheckCircleOutlineSharpIcon /></Link>}
                    />

                    <BottomNavigationAction
                        label="Reject"
                        value="reject"
                        icon={<Link to='/reject'><RemoveCircleOutlineSharpIcon /></Link>}
                    />

                    <BottomNavigationAction
                        label="Block"
                        value="block"
                        icon={<Link to='/block'><BlockIcon /></Link>}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}

export default Navbar;

