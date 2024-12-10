import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <>
    <div className='flex screen mt-10  justify-between gap-5'>

      <div className='px-9 w-[45%] py-6 rounded-xl bg-blue-400'>
    <h2 className='text-3xl font-medium'>{data.taskNumbers.newTask}</h2>
    <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
      <div className='px-9 w-[45%] py-6 rounded-xl bg-green-400'>
    <h2 className='text-3xl font-medium'>{data.taskNumbers.completed}</h2>
    <h3 className='text-xl font-semibold'>Completed Task</h3>
      </div>
      <div className='px-9 w-[45%] py-6 rounded-xl bg-yellow-400'>
    <h2 className='text-3xl font-medium'>{data.taskNumbers.active}</h2>
    <h3 className='text-xl font-semibold'>Accepted Task</h3>
      </div>
      <div className='px-9 w-[45%] py-6 rounded-xl bg-red-400'>
    <h2 className='text-3xl font-medium'>{data.taskNumbers.failed}</h2>
    <h3 className='text-xl font-semibold'>Failed Task</h3>
      </div>

    </div>
    
    </>
  )
}

export default TaskListNumbers