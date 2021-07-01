// service packages 
import { useState, useEffect, Redirect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// custom componet screens to be rendered
import Homescreen from "../Screens/Homescreen/Homescreen";
import IndexList from "../Screens/IndexList/IndexList";
import ShowList from "../Screens/ShowList/ShowList";
import CreateList from "../Screens/CreateList/CreateList";
import EditList from "../Screens/EditList/EditList";
import Meditation from "../Screens/Meditation/Meditation";
import Yoga from "../Screens/Yoga/Yoga";

// api back end services to be import 
import { getAllComments, postComment } from "../Services/comments";
import { getAllLists, deleteList, postList, putList } from "../Services/lists";


export default function MainContainer({currentUser}) {
  
  const [lists, setLists] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

  const fetchLists = async () => {
    const gratList = await getAllLists();
    setLists(gratList);
  }; 

  useEffect(() => {
    if (currentUser) fetchLists();
  }, [currentUser]);

  useEffect(() => {
    const fetchComments = async () => {
      const commList = await getAllComments();
      setComments(commList);
    };
    if (currentUser) fetchComments();
  }, [currentUser]);

  

  const handleCreate = async (formData) => {
    const oneList = await postList(formData);
    setLists((prevState) => [...prevState, oneList]);
    history.push("/lists");
  };

  const handleCreateComm = async (id, contentData) => {
    const oneComment = await postComment(id, contentData);
    setComments((prevState) => [...prevState, oneComment]);
    history.push("/lists");
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
    fetchLists()
    history.push("/lists");
  };

  return (
    <div className="MC">
      <Switch>
        <Route exact path="/lists/:id/edit">
            <EditList
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            currentUser={currentUser}
            lists={lists}
            />
          
        </Route>

        <Route exact path="/lists/:id">
            <ShowList
              handleCreateComm={handleCreateComm}
              comments={comments}
              currentUser={currentUser}/>
        </Route>

        <Route exact path="/add-list">
          <CreateList handleCreate={handleCreate} currentUser={currentUser} />
        </Route>

        <Route exact path="/lists">
         { user ? <IndexList lists={lists} currentUser={currentUser} /> : <Redirect to="/sign-up"/>}
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
