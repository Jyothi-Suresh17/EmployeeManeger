import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
 
  return (
    <>

    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex flex-nowrap  items-center justify-start gap-5 mt-10'>

    {data.tasks.map((e, idx) => {
  console.log(`Task ${idx}:`, e);
  if (e.active) {
    return <AcceptTask key={idx} data={e} />;
  }
  if (e.newTask) {
    return <NewTask key={idx} data={e} />;
  }
  if (e.completed) {
    return <CompleteTask key={idx} data={e} />;
  }
  if (e.failed) {
    return <FailedTask key={idx} data={e} />;
  }
})}

       
       

    </div>

    </>
  )
}

export default TaskList