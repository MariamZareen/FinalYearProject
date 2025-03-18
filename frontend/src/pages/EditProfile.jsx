import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
    const nav=useNavigate()
  const [profile, setProfile] = useState({
    profilepic: '',
    internships: '',
    leetcode: '',
    codechef: '',
    codeforce: '',
    skills: '',
  });

  const {username : userId } = useAuth(); // Replace with actual user ID or get from auth context
  console.log('this is from edit page '+ userId)
  // Fetch existing profile data on component mount
  useEffect(() => {
    axios.get(`http://localhost:5000/app/editprofile/${userId}`)
      .then(response => {
        const data = response.data;
        setProfile({
          profilepic: data.profilepic || '',
          internships: data.internships?.join(', ') || '',
          leetcode: data.leetcode || '',
          codechef: data.codechef || '',
          codeforce: data.codeforce || '',
          skills: data.skills?.join(', ') || '',
        });
      })
      .catch(error => console.error('Error fetching profile:', error));
  }, [userId]);

  // Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert comma-separated values to arrays
    const updatedProfile = {
      ...profile,
      internships: profile.internships.split(',').map(item => item.trim()),
      skills: profile.skills.split(',').map(item => item.trim()),
    };

    axios.put(`http://localhost:5000/app/update-tokens/${userId}`, updatedProfile)
      .then(response => {
        
          alert('Profile updated successfully!');
        setTimeout(()=>{
            nav(`/app/profile/${userId}`)
        },3000)
      })
      .catch(error => console.error('Error updating profile:', error));
  };

  return (
    <div className="flex h-screen w-full">
      <div className="form flex items-center flex-col">
        <h2>Edit Profile</h2>

        <div className="innercontainer">
          <h3>Profile Pic Link</h3>
          <input type="text" name="profilepic" className="input" value={profile.profilepic} onChange={handleChange} />
        </div>

        <div className="innercontainer">
          <h3>Rankings</h3>
          <p className="gray">LeetCode</p>
          <input type="number" name="leetcode" className="input" value={profile.leetcode} onChange={handleChange} />
        </div>

        <div className="innercontainer">
          <p className="gray">CodeForces</p>
          <input type="number" name="codeforce" className="input" value={profile.codeforce} onChange={handleChange} />
        </div>

        <div className="innercontainer">
          <p className="gray">CodeChef</p>
          <input type="number" name="codechef" className="input" value={profile.codechef} onChange={handleChange} />
        </div>

        <div className="innercontainer">
          <h3>Skill Set</h3>
          <p className="gray">Add Your Technical Skill Set (Separated By Commas)</p>
          <input type="text" name="skills" className="input" value={profile.skills} onChange={handleChange} />
        </div>

        <div className="innercontainer">
          <h3>Internships</h3>
          <p className="gray">Add the Companies that you have worked for (Separated By Commas)</p>
          <input type="text" name="internships" className="input" value={profile.internships} onChange={handleChange} />
        </div>

        <button className="addproj !m-auto !w-[350px]" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
