import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export default function AddProjects() {
  const { username } = useAuth(); // Get username from auth context

  // State to store form input
  const [formData, setFormData] = useState({
    projectname: '',
    details: '',
    coverimg: '',
    projectlink: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    const projectData = {
      usn: username,
      projectname: formData.projectname,
      details: `${formData.details} - ${formData.techstack}`, // Combining problem & tech stack
      coverimg: formData.coverimg,
      projectlink: formData.projectlink,
      type:"project"
    };
    // console.log("the data enterned is : ",projectData)
    try {
      const response = await axios.post('http://localhost:5000/app/add-project', projectData);
      alert('Project added successfully!');
      // console.log(response.data);
      setFormData({ projectname: '', details: '', techstack: '', coverimg: '', projectlink: '' }); // Reset form
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Failed to add project');
    }
  };

  return (
    <div className='flex flex-col'>
      <img
        src="https://img.freepik.com/premium-vector/game-developers-team-office-geeks-coworking-digital-entertainment-production-coders-designers-screenwriters-brainstorming-teamwork-meeting-vector-isolated-concept_176411-5097.jpg?w=2000"
        alt="top img"
        className='h-[350px]'
      />
      <div className="form flex items-center flex-col">
        <h2>Tell us more about your project</h2>
        <div className="innercontainer">
          <h3>Project Name</h3>
          <p className="gray">What are you calling it? </p>
          <input type="text" name="projectname" className="input" value={formData.projectname} onChange={handleChange} />
        </div>
        <div className="innercontainer">
          <h3>The Problem It Solves</h3>
          <p className="gray">Describe what people can use</p>
          <input type="text" name="details" className="input" value={formData.details} onChange={handleChange} />
        </div>
        <div className="innercontainer">
          <h3>TechStack Used</h3>
          <p className="gray">What technologies are used to build it?</p>
          <input type="text" name="techstack" className="input" value={formData.techstack} onChange={handleChange} />
        </div>
        <div className="innercontainer">
          <h3>Cover Image Link</h3>
          <p className="gray">Provide a link to the cover image</p>
          <input type="text" name="coverimg" className="input" value={formData.coverimg} onChange={handleChange} />
        </div>
        <div className="innercontainer">
          <h3>GitHub Link</h3>
          <p className="gray">Provide your GitHub link</p>
          <input type="text" name="projectlink" className="input" value={formData.projectlink} onChange={handleChange} />
        </div>
        <button className="addproj !m-auto !w-[350px]" onClick={handleSubmit}>
          Add Project (20 Tokens)
        </button>
      </div>
    </div>
  );
}
