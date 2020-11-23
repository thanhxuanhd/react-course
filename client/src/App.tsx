import React from 'react';
import './App.css';
import InfoCard from './components/info-card';
import ProcessBar from './components/process-bar';
import Sidebar from './components/side-bar';
import TaskList from './components/tasks-list';
import UserInfo from './components/user-info';
import { Process } from './core';

function App() {

  const process: Process = {
    percent: 65,
    title: 'Change Default'
  }

  return (
    <div className="App flex m-auto w-screen">
      <Sidebar />
      <div className="w-full h-screen bg-gray-200 text-gray-800">
        <UserInfo />
        <ProcessBar {...process} />
        <InfoCard />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
