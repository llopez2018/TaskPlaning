import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProjectDetail from './pages/ProjectDetail';
import TaskDetail from './pages/TaskDetail';
import NotificationComponent from './components/NotificationComponent';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <NotificationComponent />
                <Switch>
                    <Route path="/projects/:id" component={ProjectDetail} />
                    <Route path="/tasks/:id" component={TaskDetail} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Dashboard} />
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
};

export default App;
