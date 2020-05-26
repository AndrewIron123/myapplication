import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import { Comments as MyComments } from './Pages/Comments/Comments';
import Posts from './Pages/Posts/Posts';
import 'antd/dist/antd.css';
import { Layout } from './Pages/Common/Layout/Layout';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  theme: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        theme: !state.theme
      }
    default:
      return state;
  }
}
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path="/comments">
              <Layout>
                <MyComments />
              </Layout>
            </Route>
            <Route path="/posts">
              <Layout>
                <Posts />
              </Layout>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
