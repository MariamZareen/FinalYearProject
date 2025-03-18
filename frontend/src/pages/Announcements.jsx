import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useAuth } from '../AuthContext';

export default function Announcements() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [booked, setBooked] = useState(new Set()); // Store booked events in a Set for fast lookup
  const [loading, setLoading] = useState(true);
  const [userTokens, setUserTokens] = useState(0);
  const { username } = useAuth();

  useEffect(() => {
    const fetchEventsAndUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/app/announcements/${username}`);
        
        if (response.data) {
          setData(response.data.events.reverse());
          setUserTokens(response.data.user.creditpoint);
          
          // Convert booked events array into a Set for quick lookup
          setBooked(new Set(response.data.bookedEvents.map(event => event.eventname)));
        }
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventsAndUser();
  }, [username]);

  const handlePayWithRupees = async (event) => {
    const isConfirmed = window.confirm(`Are you sure you want to buy a ticket for "${event.eventname}" using ${event.rupees} rupees?`);
    if (!isConfirmed) return;
    setBooked((prev) => new Set([...prev, event.eventname]));


    try {
      await axios.post('http://localhost:5000/app/book-ticket', {
        user: username,
        eventname: event.eventname,
        date: event.date,
        coverimg: event.coverimg,
        paymentmode: 'rupees',
        amount: event.tokens
      });
    } catch (err) {
      console.error('Error booking ticket:', err);
    }
  };

  const handlePayWithTokens = async (event) => {
    if (userTokens < event.tokens) return;
    
    const isConfirmed = window.confirm(`Are you sure you want to buy a ticket for "${event.eventname}" using ${event.tokens} tokens?`);
    if (!isConfirmed) return;

    setBooked((prev) => new Set([...prev, event.eventname]));
    setUserTokens((prevTokens) => prevTokens - event.tokens);

    try {
      await axios.post('http://localhost:5000/app/book-ticket', {
        user: username,
        eventname: event.eventname,
        date: event.date,
        coverimg: event.coverimg,
        paymentmode: 'tokens',
        amount: event.tokens
      });
      
      await axios.put(`http://localhost:5000/app/update-tokens/${username}`, {
        tokens: userTokens - event.tokens,
      });
    } catch (err) {
      console.error('Error processing token payment:', err);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="bdy">
      <div className="plain" />
      <div className="xlbox">
        <h1 className="text-2xl font-bold text-center !mt-4">Announcements</h1>
        <div className="downbox">
          {error && <p className="text-red-500 text-center">Error: {error}</p>}
          {data.length > 0 ? (
            data.map((event) => {
              const isRedeemed = booked.has(event.eventname);
              return (
                <div key={event._id} className="prjcts !mt-[60px]">
                  <div className="pqx">
                    <img src={event.coverimg || 'https://via.placeholder.com/150'} alt="post" className="ps rounded" />
                  </div>
                  <div className="infor">
                    <h4 className="text-lg font-semibold !w-[400px]">{event.eventname}</h4>
                    <ul>
                      <li className="my-2">Date of Conduction: {event.date}</li>
                      <div className="flex justify-around items-center">
                        <li
                          className={`btns my-auto cursor-pointer ${isRedeemed ? 'bg-gray-500 text-white' : ''}`}
                          onClick={() => handlePayWithRupees(event)}
                          disabled={isRedeemed}
                        >
                          {isRedeemed ? 'Redeemed' : `Pay ₹${event.rupees}`}
                        </li>

                        <li className="font-bold bg-yellow-400 text-white rounded-full w-9 h-9 flex justify-center items-center">
                          OR
                        </li>

                        <li
                          className={`btns cursor-pointer ${userTokens < event.tokens ? 'opacity-50 cursor-not-allowed' : ''} ${isRedeemed ? 'bg-gray-500 text-white' : ''}`}
                          onClick={() => handlePayWithTokens(event)}
                          disabled={isRedeemed || userTokens < event.tokens}
                        >
                          {isRedeemed ? 'Redeemed' : `${event.tokens} Tokens`}
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-slate-600 text-center">No announcements available</p>
          )}
        </div>
      </div>
    </div>
  );
}