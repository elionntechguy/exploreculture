import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import Layout from './components/Layout';
import ArticleListView from './components/ArticleListView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import Events from './components/Events';
import NoMatch from './components/NoMatch';
import NavigationBar from './components/NavigationBar';
import { Jumbotron } from 'react-bootstrap';
import Footer from './components/Footer';


function App() {


  const [culturalphotography, setCulturalphotography] = useState([]);
  const [view360, setView360] = useState([]);
  const [eightdaudio, setEightdaudio] = useState([]);

  useEffect(() => {
    axios.all([
      axios.get('http://127.0.0.1:8000/api/culturalphotography'),
      axios.get('http://127.0.0.1:8000/api/view360'),
      axios.get('http://127.0.0.1:8000/api/eightdaudio')
    ])
    .then(axios.spread((culturalphotographyRes, view360Res, eightdaudioRes) => {
      setCulturalphotography(culturalphotographyRes.data);
      setView360(view360Res.data);
      setEightdaudio(eightdaudioRes.data);
    }));
  }, []);

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/view360')
  //   .then(res => {
  //       setView360(res.data);
  //   })
  // }, []);

  useEffect(() => {
    console.log(culturalphotography)
  }, [culturalphotography])

  // useEffect(() => {
  //   console.log(view360)
  // }, [view360])

  return (
    <React.Fragment>

        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/explore" render={(props) => <Explore {...props} culturalphotography={culturalphotography} view360={view360} eightdaudio={eightdaudio} />} />
              {/* <Route path="/explore" component={Explore} />     */}
              <Route path="/events" component={Events} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>

    </React.Fragment>
  );
}

export default App;
