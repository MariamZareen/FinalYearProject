import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export default function AddResource() {
  const { username } = useAuth(); // Get username from auth context
  const [formData, setFormData] = useState({
    resourceName: '',
    description: '',
    techStack: '',
    coverImg: '',
    resourceLink: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/app/add-project', {
        usn: username,
        projectname: formData.resourceName,  // Using projectname field
        details: `${formData.description} (Tech: ${formData.techStack})`, // Merging details
        coverimg: formData.coverImg,
        projectlink: formData.resourceLink,
        type:"resource"
      });
      alert('Resource added successfully!');
    } catch (error) {
      console.error('Error adding resource:', error);
    }
  };

  return (
    <div className='flex flex-col'>
      <img src="https://img.freepik.com/premium-vector/game-developers-team-office-geeks-coworking-digital-entertainment-production-coders-designers-screenwriters-brainstorming-teamwork-meeting-vector-isolated-concept_176411-5097.jpg?w=2000" alt="top img" className='h-[350px]' />
      <div className="form flex items-center flex-col">
        <h2>Tell us more about your resource</h2>
        
        <div className="innercontainer">
          <h3>Resource Name</h3>
          <p className="gray">What are you calling it?</p>
          <input type="text" name="resourceName" className="input" onChange={handleChange} />
        </div>

        <div className="innercontainer">
          <h3>How does it help?</h3>
          <p className="gray">Describe the resource to people</p>
          <input type="text" name="description" className="input" onChange={handleChange} />
        </div>

        <div className="innercontainer">
          <h3>Technologies Explained</h3>
          <p className="gray">(Separated by commas)</p>
          <input type="text" name="techStack" className="input" onChange={handleChange} />
        </div>

        <div className="innercontainer">
          <h3>Cover Image Link</h3>
          <p className="gray">Please provide an image link</p>
          <input type="text" name="coverImg" className="input" onChange={handleChange} />
        </div>

        <div className="innercontainer">
          <h3>Link of the resource</h3>
          <p className="gray">YouTube, Articles, etc.</p>
          <input type="text" name="resourceLink" className="input" onChange={handleChange} />
        </div>

        <button className="addproj !m-auto !w-[350px]" onClick={handleSubmit}>
          Add Resource (10 Tokens)
        </button>
      </div>
    </div>
  );
}
