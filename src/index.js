import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to='/'>Home</Link><br/>
                    <Link to='/posts'>Posts</Link><br/>
                    <Link to='/profile'>Profile</Link><br/>
                    <hr/>
                </header>
                <Switch>
                    <Route path='/posts/:id' component={PostItem} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/posts' exact component={Posts} />
                    <Route path='/' exact component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)