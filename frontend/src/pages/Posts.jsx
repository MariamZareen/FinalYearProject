import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import SuggestionBox from '../components/SuggestionBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from '../components/Spinner'

export default function Posts() {
    const [data, setData] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/app/home'); // Use axios to fetch data
                const reversedData = response.data.reverse(); // Reverse the order of posts
                setData(reversedData); 
                setLoading(false); // Set loading to false
            } catch (err) {
                setError(err.response ? err.response.data : err.message);
                setLoading(false); // Set loading to false
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <Spinner/>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className='maincontent w-[80%]'>
                <div className="posts flex flex-col items-center my-5">
                    {data.map((post, index) => (
                        <div key={index} className="box w-[500px] h-auto p-3 my-3 border-b-2 border-slate-300">
                            <div className="name flex">
                                <div className="rounded-[50%] border-slate-900 border-2 w-12 bg-slate-300 mx-2"></div>
                                <div>
                                    <p className='font-bold text-blue-500 text-lg'>
                                        {post.usn} <span className='text-slate-500 text-semibold'>1d</span>
                                    </p>
                                    <p>{post.projectname}</p>
                                </div>
                            </div>
                            <img src={post.coverimg} alt="Post cover" className='h-[500px] mx-auto mt-3' />
                            <div className="likes flex w-[90%] my-3">
                                <span className="material-symbols-outlined cursor-pointer text-red-900">favorite</span>
                                <div className="likesNo font-bold ">{post.likes} likes</div>
                                <FontAwesomeIcon icon="fa-solid fa-heart" />
                               
                            </div>
                            <div className="comments">{post.details}</div>
                            <a href={post.projectlink} target="_blank" className='underline text-sky-800' >{post.projectlink}</a>
                        </div>
                    ))}
                </div>
            </div>
            <SuggestionBox />
        </>
    );
}
