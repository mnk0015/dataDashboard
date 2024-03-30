// src/App.jsx
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DetailView from './components/DetailView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/detail/:id" component={DetailView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
