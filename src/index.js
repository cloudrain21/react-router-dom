import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    useParams
} from 'react-router-dom';
import './index.css';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}

let contents = [
    {id:1, title:'HTML', description:'HTML is...'},
    {id:2, title:'JS', description:'JS is...'},
    {id:3, title:'React', description:'React is...'},
]

function Topic() {
    let params = useParams();
    let topic_id = params.topic_id;
    let selected_topic = {
        title: 'Sorry',
        description: 'Not Found'
    }
    for(let i=0; contents.length; i++) {
        if(contents[i].id === Number(topic_id)) {
            selected_topic = {
                title: contents[i].title,
                description: contents[i].description
            }
            break;
        }
    }
    return(
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}

function Topics() {
    let lis = [];
    for(let i=0; i<contents.length; i++) {
        lis.push(<li><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>);
    }
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {lis}
            </ul>
            <Switch>
                <Route path={"/topics/:topic_id"}><Topic></Topic></Route>
            </Switch>
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

function App() {
    return(
        <div>
            <h1>React Router DOM Example</h1>
            <ul>
                <li><NavLink exact to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/topics"}>Topics</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route path={"/topics"}><Topics></Topics></Route>
                <Route path={"/contact"}><Contact></Contact></Route>
                <Route path={"/"}>Not Found</Route>
            </Switch>
        </div>
    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
