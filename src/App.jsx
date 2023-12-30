import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './client/components/Navbar/Navbar';
import Banner from './client/pages/Banner/Banner';
import Card from './client/components/Card/Card';
import CardComponent from './client/components/CardComponenet/CardComponet';
import { mockData } from './client/data/data';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Banner />} />
          <Route exact path="/" render={() => <Card data={mockData.data} />} />
          <Route path="/card/:id" render={(props) => <CardComponent {...props} data={mockData.data} />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
