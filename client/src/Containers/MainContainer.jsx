import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Landing from '../Screens/Landing/Landing';
import Homescreen from '../Screens/Homescreen/Homescreen';
import IndexList from '../Screens/IndexList/IndexList';
import ShowList from '../Screens/ShowList/ShowList';
import CreateList from '../Screens/CreateList/CreateList';
import EditList from '../Screens/EditList/EditList';
import Meditation from '../Screens/Meditation/Meditation';
import Yoga from '../Screens/Yoga/Yoga';
import { getAllComments, postComment} from '../Services/comments';
import { getAllList, deleteList, postList, putList, getOneList} from '../Services/lists'
import { verifyUser } from '../Services/auth';


export default function MainContainer() {
  const [user, setUser] = useState(null);
  const [lists, setLists] = useState([]);
  const [comments, setComments] = useState([]);



  useEffect(() => {
    const grabUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    grabUser();
  }, []);
  
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
          {user ? <IndexList user={user}/> : <Redirect to="/sign-up" />}
        </Route>

        <Route exact path="/lists/:id">
          {user ? <ShowList  user={user}/> : <Redirect to="/sign-up" />}
        </Route>

        <Route exact path="/add-list">
          {user ? <CreateList user={user}/> : <Redirect to="/sign-up" />}
        </Route>

        <Route exact path="/lists/:id/edit">
          {user ? < EditList user={user}/> : <Redirect to="/sign-up" />}
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