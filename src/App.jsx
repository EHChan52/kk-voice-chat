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
    setChatroomID(null);
  };

  const handleLogout = () => {
    setIsJoinedIn(false);
    setIsLoggedIn(false);
    setUsername('');
    setChatroomID(null);
  };

  const handleJoin = (chatroomID) => {
    setIsLoggedIn(true);
    setIsJoinedIn(true);
    setUsername('1');
    setChatroomID(chatroomID);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        isJoinedIn ? (
          <Chatroom chatroomID={chatroomID}/>
        ) : (
          <Dashboard username={username} onLogout={handleLogout} onJoin={handleJoin} />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
