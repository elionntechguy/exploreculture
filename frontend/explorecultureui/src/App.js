import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import Layout from './components/Layout';
import ArticleListView from './components/ArticleListView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import Events from './components/Events';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavigationBar from './components/NavigationBar';
import { Jumbotron } from 'react-bootstrap';
import Footer from './components/Footer';
import Cifteli from './components/Cifteli';


function App() {


  const [culturalphotography, setCulturalphotography] = useState([]);
  const [view360, setView360] = useState([]);
  const [eightdaudio, setEightdaudio] = useState([]);
  const [ar, setAr] = useState([]);
  const [traditionalfood, setTraditionalfood] = useState([]);

  useEffect(() => {
    axios.all([
      axios.get('http://127.0.0.1:8000/api/culturalphotography'),
      axios.get('http://127.0.0.1:8000/api/view360'),
      axios.get('http://127.0.0.1:8000/api/eightdaudio'),
      axios.get('http://127.0.0.1:8000/api/ar'),
      axios.get('http://127.0.0.1:8000/api/traditionalfood')
    ])
    .then(axios.spread((culturalphotographyRes, view360Res, eightdaudioRes, arRes, traditionalfoodRes) => {
      setCulturalphotography(culturalphotographyRes.data);
      setView360(view360Res.data);
      setEightdaudio(eightdaudioRes.data);
      // var data = JSON.stringify(arRes.data);
      // data = JSON.parse(data);
      // data.forEach(function(element){
      //     setAr(element.arfile);
      // });
      setAr(arRes.data);
      setTraditionalfood(traditionalfoodRes.data);
    }));
  }, []);
  

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/view360')
  //   .then(res => {
  //       setView360(res.data);
  //   })
  // }, []);

  useEffect(() => {
    console.log(ar)
  }, [ar])
  



  return (
    <React.Fragment>

        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/explore" render={(props) => <Explore {...props} culturalphotography={culturalphotography} view360={view360} eightdaudio={eightdaudio} ar={ar} traditionalfood={traditionalfood} />} />
              {/* <Route path="/explore" component={Explore} /> */}
              <Route path="/events" component={Events} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>

    </React.Fragment>

  );
}

export default App;
