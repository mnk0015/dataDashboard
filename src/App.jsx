import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import './App.css';

const App = () => {
    const handleSearch = (query) => {
        // Implement search functionality
    };

    const handleFilter = (filter) => {
        // Implement filter functionality
    };

    return (
        <Router>
            <div className="container">
                <h1>Weather App</h1>
                <SearchBar onSearch={handleSearch} />
                <Filters onFilter={handleFilter} />
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route exact path="/list">
                        <ListView />
                    </Route>
                    <Route path="/detail/:id">
                        <DetailView />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
