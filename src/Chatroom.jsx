import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Chatroom = () => {
    
    <div className="flex bg-gray-50">
        <div className="bg-indigo-600 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:translate-x-0 md:inset-0 transition-transform duration-200 ease-in-out">
            <h1 className="text-2xl font-extrabold text-white tracking-tight">KK Voice Chat</h1>
                <hr></hr>
                <h2 className="text-2xl font-extrabold text-white tracking-tight">Participant List</h2>
                <nav>
                    <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
                        a
                    </a>
                    <a onClick={handleInfoClick} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
                        b
                    </a>
                    <a onClick={handleLogout} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
                        c
                    </a>
                </nav>
        </div>
    </div>
};

export default Chatroom;
