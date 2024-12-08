import React from 'react'


export default function AddResource() {
  return (
    <div className='flex flex-col'>
    <img src="https://img.freepik.com/premium-vector/game-developers-team-office-geeks-coworking-digital-entertainment-production-coders-designers-screenwriters-brainstorming-teamwork-meeting-vector-isolated-concept_176411-5097.jpg?w=2000" alt="top img" className='h-[350px]' />
    <div className="form flex items-center flex-col">
      <h2>Tell us more about your resource</h2>
      <div className="innercontainer">
        <h3>Resource Name</h3>
        <p className="gray">What are you calling it? </p>
        <input type="text" className="input" />
      </div>
      <div className="innercontainer">
        <h3>How does it help?</h3>
        <p className="gray">Describe the resource to people</p>
        <input type="text" className="input" />
      </div>
      <div className="innercontainer">
        <h3>Technologies Explained</h3>
        <p className="gray">(Seperated by commas)</p>
        <input type="text" className="input" />
      </div>
      <div className="innercontainer">
        <h3>Cover Image Link</h3>
        <p className="gray">Please provide us with your GitHub Link</p>
        <input type="text" className="input" />
      </div>
      <div className="innercontainer">
        <h3>Link of the resource</h3>
        <p className="gray">Youtube, Articles etc</p>
        <input type="text" className="input" />
      </div>
      <button className="addproj !m-auto">Add Project</button>
    </div>
  </div>
  
  )




  
}
