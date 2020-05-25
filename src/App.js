import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import { Albums as MyAlbums } from './Pages/Albums/Albums';
import { Comments as MyComments } from './Pages/Comments/Comments';
import Photos from './Pages/Photos/Photos';
import Posts from './Pages/Posts/Posts';
import Tasks from './Pages/Tasks/Tasks';
import 'antd/dist/antd.css';
import Layout from './Pages/Common/Layout/Layout';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/albums">
            <Layout>
              <MyAlbums />
            </Layout>
          </Route>
          <Route path="/comments">
            <Layout>
              <MyComments />
            </Layout>
          </Route>
          <Route path="/photos">
            <Layout>
              <Photos />
            </Layout>
          </Route>
          <Route path="/posts">
            <Layout>
              <Posts />
            </Layout>
          </Route>
          <Route path="/tasks">
            <Layout>
              <Tasks />
            </Layout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
