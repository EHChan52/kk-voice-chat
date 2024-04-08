import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Chatroom from './chatroom'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isJoinedIn, setIsJoinedIn] = useState(false);
  const [chatroomID, setChatroomID] = useState(null);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    setIsJoinedIn(false);
  };

  const handleLogout = () => {
    setIsJoinedIn(false);
    setIsLoggedIn(false);
    setUsername('');
    setChatroomID(null);
  };

  const handleJoin = (chatroomID) => {
    setIsJoinedIn(true);
    setChatroomID(chatroomID);
  };

  return (
    <div className="App">
      {isLoggedIn && !isJoinedIn ? <Dashboard username={username} onLogout={handleLogout} onJoin={handleJoin} /> : <Login onLogin={handleLogin} />}
      {isLoggedIn && isJoinedIn && <Chatroom chatroomID={chatroomID} onLogout={handleLogout} />}
    </div>
  );
}

export default App;
