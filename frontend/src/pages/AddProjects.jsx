import React from 'react'



export default function AddProjects() {
  return (
    <div className='flex flex-col'>
    <img src="https://img.freepik.com/premium-vector/game-developers-team-office-geeks-coworking-digital-entertainment-production-coders-designers-screenwriters-brainstorming-teamwork-meeting-vector-isolated-concept_176411-5097.jpg?w=2000" alt="top img" className='h-[350px]' />
    <div className="form flex items-center flex-col">
      <h2>Tell us more about your project</h2>
      <div className="innercontainer">
        <h3>Project Name</h3>
        <p className="gray">What are you calling it? </p>
        <input type="text" className="input" />
      </div>
      <div className="innercontainer">
        <h3>The Problem It Solves</h3>
        <p className="gray">Describe what can people use</p>
        <input type="text" className="input" />
      </div>
      <div className="innercontainer">
        <h3>Technologies I Used</h3>
        <p className="gray">What are you calling it? </p>
        <input type="text" className="input" />
      </div>
      <div className="innercontainer">
        <h3>Cover Image Link</h3>
        <p className="gray">Please provide us with your GitHub Link</p>
        <input type="text" className="input" />
      </div>
      <div className="innercontainer">
        <h3>GitHub Link</h3>
        <p className="gray">Please provide us with your GitHub Link</p>
        <input type="text" className="input" />
      </div>
      <button className="addproj !m-auto">Add Project</button>
    </div>
  </div>
  
  )
}
