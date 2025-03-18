import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';

export default function SuggestionBox() {
    const { username } = useAuth(); // Logged-in user's username
    const [data, setData] = useState([]); // Initialize state as an array
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/app/users'); // Fetch data using Axios
                const filteredUsers = response.data.filter(user => user.username !== username); // Exclude self
                setData(filteredUsers); // Update state with filtered data
            } catch (err) {
                setError(err.response ? err.response.data : err.message); // Capture error
                console.error('Could not get users:', err);
            }
        };
        fetchUsers();
    }, [username]); // Re-run effect if `username` changes

    return (
        <div className='suggestions w-[45%]'>
            <div className='flex m-10 p-5 font-semibold'>
                <span className="material-symbols-outlined">person</span>
                {username}
                {/* <p className='text-blue-900 ml-auto'>Current User</p> */}
                <Link to={`/app/profile/${username}`} className='text-blue-900 ml-auto'> Current User
                </Link>
            </div>
            <p className="text-slate-600 font-semibold ml-10">Suggested for you</p>
            <div>
                {error && <p className="text-red-500 ml-10">Error: {error}</p>}
                {data.length > 0 ? (
                    data.map((user, index) => (
                        <div key={index} className='flex mx-10 my-2 p-5 font-semibold'>
                            <span className="material-symbols-outlined">person</span>
                            {user.username}
                            <Link to={`/app/profile/${user.username}`} className='text-blue-900 ml-auto'>View Profile
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-slate-600 ml-10">No suggestions available</p>
                )}
            </div>
        </div>
    );
}
