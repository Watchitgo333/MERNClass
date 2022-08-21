// import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();
    const {gotoPage, setGotoPage} = props
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        
    };
    const menuButton = () => {
        if(gotoPage == "Home"){
            navigate("/")
        }

        if(gotoPage == "Add Author"){
            navigate("/authors/create")
        }

    }


    return (
            <div>
                <div >
                    <Typography variant="h4">Favorite Authors</Typography>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Menu
                    </Button>
                </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={menuButton}>
                    {gotoPage}
                </MenuItem>
            </Menu>
            </div>
    );
    }

export default Navbar;
