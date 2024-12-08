import React from 'react'

export default function Announcements() {
  return (
    <div className="bdy">
  <div className="plain" />
  <div className="xlbox">
    <h1>Announcements</h1>
    <div className="downbox">
      <div className="prjcts">
        <div className="pqx">
          <img src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png" alt="post" className="ps  rounded" />
        </div>
        <div className="infor">
          <h4 className='!w-[400px]'>Blockchain: A Bootcamp for beginners</h4>
          <ul>
            <li>Date of Conduction: 28/12/2024</li>
           <div className='flex justify-around'>
           <li className='btns !my-auto'>Pay ₹150</li>
            <li className="font-bold m-auto bg-yellow-400 text-slate-100 rounded-[50%] w-9 flex justify-center items-center">OR</li>
            <li className="btns">35 Tokens</li>
           </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
