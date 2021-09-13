import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Layout from './layouts/Layout';
import Search from "./components/Search";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact><Home/></Route>
                    <Route path="/search"><Search/></Route>
                    <Route path="/detail/:id"><Detail/></Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
