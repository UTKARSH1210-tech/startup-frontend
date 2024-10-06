import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputBase placeholder="Search..." sx={{ marginRight: '8px', background: '#f1f1f1', padding: '4px 8px', borderRadius: '4px' }} />
                    <IconButton><SearchIcon /></IconButton>
                    <IconButton><NotificationsIcon /></IconButton>
                    <IconButton><SettingsIcon /></IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
