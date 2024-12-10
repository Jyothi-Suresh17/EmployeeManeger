import React from 'react'

const CompleteTask = ({data}) => {
  // console.log(data);
  
  return (
    <div className='flex-shrink-0 h-full w-[400px] bg-green-400 rounded-xl'>

    <div className='flex justify-between items-center p-3 '>
      <h3 className="bg-red-700 px-3 py-1 rounded text-sm">{data.category}</h3>
      <h4 className='text-base'>{data.taskDate}</h4>
    </div>

    <h2 className='text-2xl font-semibold m-5'>{data.taskTitle}😁</h2>
    <p className='text-sm m-1 text-center'>{data.taskDescription}</p>

    <div className=" mt-4 m-3">
        <button className="bg-green-500 w-full rounded-lg hover:bg-green-600 py-1 px-2 text-sm"> Completed</button>
        
      </div>

  </div>
  )
}

export default CompleteTask