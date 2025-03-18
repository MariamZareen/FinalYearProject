import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useParams,Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

export default function Profile() {
  const { username: loggedInUsername } = useAuth();
  const { username: routeUsername } = useParams(); // Correct parameter name
  const username = routeUsername || loggedInUsername; // Use routeUsername if available, otherwise fallback to logged-in user

  const [profile, setProfile] = useState();
  const [booked, setBooked] = useState([]);
  const [posts,setPosts]=useState([])
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/profile/${username}`)
      .then((res) => {
        setUser(res.data.user);
        setProfile(res.data.profile);
        setBooked(res.data.booked);
        setPosts(res.data.posts)
        // console.log("this is from profile",booked)
        setLoading(false);
      })
      .catch((err) => {
        setError('Error loading profile data');
        console.error("Error receiving profile data:", err);
        setLoading(false);
      });
  }, [username]); // Ensure effect runs when username changes

  if (loading) return <Spinner/>;
  return (
    <div>
      <div className="container flex flex-col">

        <nav>
          <div className="details">
            
            <img src="https://cdn-icons-png.freepik.com/256/12594/12594345.png?semt=ais_hybrid" alt="myprofilepic" className="profilepic" />
         
            <ul>
              <li>
                <h2 className='font-bold'>{user.fullname}</h2>
              </li>
              <li className="li">Department: {user.dept}</li>
              <li className="li">Passout Year: {user.passout}</li>
              <div className="creditsdiv">
                {" "}
                <li className="credits">Available Tokens: {user.creditpoint}</li>
              </div>
            </ul>
          </div>
         <div className='flex flex-col '>
          <Link to={'/app/editprofile'} >
          <button className='ml-[350px] bg-[#179c52] p-4 rounded-[10px] !text-white font-bold text-xl w-[140px] '>Edit Profile</button>
          </Link>
         <img src="https://www.sxswedu.com/wp-content/uploads/2020/02/EDU-20-Google-Cloud-EdTech-Developers.jpg"alt="developers img"className="devs"/>

         </div>
        </nav>
        <div className="con2">
          <div className="achievements">
            <h4>Rankings</h4>
            <ul>
              <li>LeetCode: {profile.leetcode} </li>
              <li>CodeChef: {profile.codechef}</li>
              <li>Codeforces: {profile.codeforce}</li>
             
            </ul>
          </div>
          <div className="achievements">
            <h4>Skill Set</h4>
            <ul>
              {profile.skills.length !== 0 ? (
                profile.skills.map((unit, key) => (
                  <li key={key}>{unit}</li>
                ))
              ) : (
                <p>No skills acquired</p>
              )}
            </ul>
          </div>
          <div className="achievements">
            <h4>Internships</h4>

            <ul>
              {profile.internships.length !== 0 ? (
                profile.internships.map((unit, key) => (
                  <li key={key}>{unit}</li>
                ))
              ) : (
                <p>No internships completed</p>
              )}
            </ul>

          </div>
        </div>
      </div>
      <section className="section2">
        <div className="boxout">
          <h2>Upcoming Events</h2>
          {
            booked.length!==0 ? (
              booked.map((unit,key)=>(
                <div className="jets">
            <div className="picsml">
              <img src={unit.coverimg} alt="post" className="sssp w-[350px]" />
            </div>
            <div className="informat">
              <h4 className="">{unit.eventname}</h4>
              <ul>
                <li>Date of Event: {unit.date}</li>
                <li>Payment Mode: {unit.paymentmode}</li>
                <li className="grn">Amount: {unit.amount}</li>

                {/* <li>Redeemed</li> */}
              </ul>
            </div>
          </div>
              ))
              
            ):(
              <center className="text-[40px] font-bold blue">No Upcoming Events Booked</center>
            )
          }
      
        </div>





        <div className="boxout">
  <h2>Recent Posts</h2>
  {posts.length > 0 ? (
    posts.map((post, index) => (
      <div className="projects" key={index}>
        <div className="smallpic">
          <img src={post.coverimg} alt={post.projectname} className="sp" />
        </div>
        <div className="info">
          <h4>{post.projectname}</h4>
          <ul>
            <li>Date of Upload: {new Date(post.uploadDate).toLocaleDateString()}</li>
            <li>Number of likes: {post.likes}</li>
          </ul>
        </div>
      </div>
    ))
  ) : (
    <p>No recent posts available.</p>
  )}
</div>

      </section>
    </div>


  )
}
