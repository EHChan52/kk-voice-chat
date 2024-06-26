import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import userLogo from './assets/react.svg';



const Dashboard = ({ username, onLogout, onJoin}) => {
  const [showPeople, setShowPeople] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [chatroomID, setChatroomID] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  const handleLogout = () => {
    onLogout();
  };

  const handleChatroomsClick = () => {
    setShowPeople(true);
    setShowInfo(false);
  };

  const handleInfoClick = () => {
    setShowInfo(true);
    setShowPeople(false);
  };



  const handleJoinClick = (chatroomID) => {
    setChatroomID(chatroomID);
    onJoin(chatroomID);
  };


  const people = [
    {
      name: 'KK1 Alexander',
      description: 'Opened by KK1',
      number: '6',
      logo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Dummy KK2',
      description: 'Opened by KK2',
      number: '0',
      logo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'k',
      description: '1',
      number: 'NaN',
      logo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

  return (
    <div className="flex bg-gray-50">
      <div className="bg-indigo-600 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:translate-x-0 md:inset-0 transition-transform duration-200 ease-in-out">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">KK Voice Chat</h1>
        <hr></hr>
        <nav>
          <a onClick={handleChatroomsClick} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
            Chatrooms
          </a>
          <a onClick={handleInfoClick} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
            Info 
          </a>
          <a onClick={handleLogout} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
            Logout
          </a>
        </nav>
      </div>

      {/* Content area */}
      <div className="h-screen w-screen flex-1 flex flex-col overflow-hidden md:pl-64 transition-all duration-200 ease-in-out">
      <header className="flex-shrink-0 flex items-center justify-between p-2 border-2">
        <div className="flex items-center">
          <img src={userLogo} alt="User Logo" className="h-8 w-8 rounded-full mr-2"/>
          <span className="mr-2">{username}</span>
        </div>
        <div className="flex w-150">
          <input
            type="text"
            className="flex-grow px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Search by Room Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700">
            Search
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-2">
      {showPeople && people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase())).map((person,index) => (
        <ul role="list" className="divide-y divide-gray-100">
            <li key={person.email} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.logo} alt="" />
                    <div className="min-w-0 flex-auto text-left">
                      <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}'s Chatroom</p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end text-right">
                      <p className="text-sm leading-6 text-gray-900">{person.number} Joined</p>
                        <div className="mt-1 flex items-center gap-x-1.5">
                          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <p className="text-xs leading-5 text-gray-500">Room ID:{index}</p>
                        </div>
                    </div>
                    <button onClick={() => {handleJoinClick(index); onJoin(person.chatroomID);}} className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700">Join</button>
                  </div>
            </li>
        </ul>
      ))}
      {showInfo && (
        <h1>{chatroomID}</h1>
      )}
    </main>
      </div>
    </div>
  );
};

export default Dashboard;
