// src/components/SearchBar.tsx
import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "20px 20px 20px 20px",
    // backgroundColor: alpha(theme.palette.common.black, 0.15),
    // '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.black, 0.25),
    // },
    marginLeft: 0,
    width: '50rem',
    top: '1rem',
    left: '2rem',
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust alignment to space-between
    padding: '0 1rem',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <Box display="flex" alignItems="center" position="relative">
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => onSearch(e.target.value)}
                />
            </Search>
            <Box display="flex" alignItems="center" position="absolute" right={"-15rem"} top="1rem">
                <IconButton color="inherit" sx={{ position: "absolute", right: "5rem" }}>
                    <NotificationsIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
                <Avatar alt="User Avatar" src="/path-to-avatar.jpg" />
            </Box>
        </Box>
    );
};

export default SearchBar;
