import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Chatroom = (chatroomID) => {
    return(
        <div className="flex flex-col h-screen">
            <div className="w-64bg-indigo-600 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:translate-x-0 md:inset-0 transition-transform duration-200 ease-in-out bg-indigo-600 text-white p-4">
                <h1 className="text-2xl font-extrabold text-white tracking-tight">KK Voice Chat</h1>
                <hr></hr>
                <h2 className="text-xl mb-4">KK's Chatroom</h2>
                <h2 className="text-xl mb-4">9 Participants</h2>
                <hr></hr>
                <ul>
                    <li className="mb-2">a</li>
                    <li className="mb-2">at</li>
                    <li className="mb-2">act</li>
                </ul>
            </div>
            <div className="flex-grow p-4">
                {/* Your chatroom content goes here */}
            </div>
            <footer className="w-full bg-indigo-600 text-white text-center p-4" style={{width: '100% !important'}}>
                {/* Your footer content goes here */}
                <p>Button 1 Button 1</p>
            </footer>
        </div>
    );
}

export default Chatroom;
