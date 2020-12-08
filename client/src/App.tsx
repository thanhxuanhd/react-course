import React from "react";
import "./App.css";
import InfoCard from "./components/info-card";
import Sidebar from "./components/side-bar";
import TaskList from "./components/tasks-list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserInfo from "./components/user-info";
import PersonForm from "./components/person-form";
import { TaskItemDetai } from "./components/task-item-detail";
function App() {
  return (
    <div className="App flex m-auto w-full">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <div className="w-full bg-gray-200 text-gray-80 m-auto ml-16 min-h-screen">
              <InfoCard />
              <TaskList />
            </div>
          </Route>
          <Route
            exact
            path="/task/:id"
            render={(props) => {
              return (
                <div className="w-full bg-gray-200 text-gray-80 m-auto ml-16 h-screen">
                  <TaskItemDetai {...props} />
                </div>
              );
            }}
          />
          <Route path="/user">
            <div className="w-full bg-gray-200 text-gray-80 m-auto ml-16 h-screen">
              <UserInfo />
              <PersonForm />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
