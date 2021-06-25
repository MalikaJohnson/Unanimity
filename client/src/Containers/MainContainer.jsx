import { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Landing from "../Screens/Landing/Landing";
import Homescreen from "../Screens/Homescreen/Homescreen";
import IndexList from "../Screens/IndexList/IndexList";
import ShowList from "../Screens/ShowList/ShowList";
import CreateList from "../Screens/CreateList/CreateList";
import EditList from "../Screens/EditList/EditList";
import Meditation from "../Screens/Meditation/Meditation";
import Yoga from "../Screens/Yoga/Yoga";
import { getAllComments, postComment } from "../Services/comments";
import { getAllLists, deleteList, postList, putList } from "../Services/lists";
import { verifyUser } from "../Services/auth";

export default function MainContainer() {
  const [user, setUser] = useState(null);
  const [lists, setLists] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchLists = async () => {
      const gratList = await getAllLists();
      setLists(gratList);
    };
    fetchLists();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commList = await getAllComments();
      setComments(commList);
    };
    fetchComments();
  }, []);

  useEffect(() => {
    const grabUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    grabUser();
  }, []);

  const handleCreate = async (formData) => {
    const oneList = await postList(formData);
    setLists((prevState) => [...prevState, oneList]);
    history.push("/lists");
  };

  const handleCreateComm = async (contentData) => {
    const oneComment = await postComment(contentData);
    setComments((prevState) => [...prevState, oneComment]);
    history.push("/comments");
  };

  const handleUpdate = async (id, formData) => {
    const oneList = await putList(id, formData);
    setLists((prevState) =>
      prevState.map((list) => {
        return list.id === Number(id) ? oneList : list;
      })
    );
    history.push("/lists");
  };

  const handleDelete = async (id) => {
    await deleteList(id);
    setLists((prevState) => prevState.filter((list) => list.id !== id));
  };

  return (
    <div className="MC">
      <Switch>
        <Route exact path="/lists/:id/edit">
          {user ? (
            <EditList
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              user={user}
            />
          ) : (
            <Redirect to="/sign-up" />
          )}
        </Route>

        <Route exact path="/lists/:id">
          {user ? (
            <ShowList
              handleCreateComm={handleCreateComm}
              comments={comments}
              user={user}
            />
          ) : (
            <Redirect to="/sign-up" />
          )}
        </Route>

        <Route exact path="/add-list">
          <CreateList handleCreate={handleCreate} user={user} />
        </Route>

        <Route exact path="/lists">
          <IndexList lists={lists} user={user} />
        </Route>

        <Route exact path="/meditation">
          <Meditation />
        </Route>

        <Route exact path="/yoga">
          <Yoga />
        </Route>

        <Route exact path="/home">
          <Homescreen />
        </Route>
        
      </Switch>
    </div>
  );
}
