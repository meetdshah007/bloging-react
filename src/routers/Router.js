import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../component/HomePage';
import BlogListPage from '../component/BlogListPage';
import BlogDetailPage from '../component/BlogDetailPage';
import HelpPage from '../component/HelpPage';
import NotFoundPage from '../component/NotFoundPage';
import App from '../App';

const Router = ()=>(
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/blogs" component={BlogListPage} />
                <Route path="/blog/:id" component={BlogDetailPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Router;
