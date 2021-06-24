import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';


export default function MainContainer() {
  
  return (
    <div className="MC">
      <Switch>
        <Route exact path="/">
        <Landing />
        </Route>
        <Route exact path="/home">
        <Homescreen />
        </Route>
        <Route exact path="/lists">
        <IndexList />
        </Route>
        <Route>
        <ShowList exact path="/lists/:id"/>
        </Route>
        <Route exact path="/add-list">
        <CreateList />
        </Route>
        <Route exact path="/lists/:id/edit">
        <EditList />
        </Route>
        <Route exact path="/meditation">
        <Meditation />
        </Route>
        <Route exact path="/yoga">
        <Yoga />
        </Route>

      </Switch>
    </div>
  )
}