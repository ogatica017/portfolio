import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Jokes from './components/Jokes';
import App from './components/App';
import Header from './components/Header';
import './index.css';
import Projects from './components/Projects';



ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch>
        <Route exact path='/' render={() => <Header><App /></Header>} />
        <Route path='/jokes' render= {() => <Header><Jokes /></Header>} />
    </Switch>
</Router>, 
    document.getElementById('root'));

// new Promise((resolve, reject) => {
//    return reject(new Error('No bears'));

//   setTimeout(() => {
//        console.log('Bears');
//        resolve('Bears, Beets, Battlestar Galactica');
//    }, 2000);
//})
//.then(quote => {
//   console.log(quote);
//})
//.catch(error => console.log('error', error));