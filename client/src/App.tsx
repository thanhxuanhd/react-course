import React from 'react';
import './App.css';
import InfoCard from './components/info-card';
import Sidebar from './components/side-bar';
import TaskList from './components/tasks-list';
import UserInfo from './components/user-info';

function App() {
  return (
    <div className="App flex m-auto w-screen">
      <Sidebar />
      <div className="w-full h-screen bg-gray-200 text-gray-800">
        <UserInfo />
        <InfoCard />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
