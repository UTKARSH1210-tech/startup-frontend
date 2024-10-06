'use client';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/sidebar';
import Header from './components/header';
import MainContent from './components/mainContent';
import "./dashboard.css"
import { Container, Typography } from '@mui/material';
import SearchBar from './components/searchbar';
import MainCard from './components/cards';
import MetricsDisplay from './components/metricsDisplay';


const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [metrics, setMetrics] = useState<any>(null);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // Handle the search logic here
        console.log('Search query:', query);
    };

    const handleMetricsReceived = (metrics: any) => {
        setMetrics(metrics);
    };

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Container className='search-bar'>
                        <SearchBar onSearch={handleSearch} />
                    </Container>
                    <Box sx={{ marginTop: "1rem" }}>
                        <Box sx={{ display: "flex" }}>
                            {metrics ? (
                                <MetricsDisplay metrics={metrics} />
                            ) : (
                                <>
                                    <MainCard onMetricsReceived={handleMetricsReceived} />
                                    <MainContent />
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;
