import React from 'react'

const Task = ({task, stretchFeatures, deleteButton, index}) => (
  
  <div className='task'>
    <div className ='label'>{task.category}</div>
    <div className ='text'>{task.text}</div>
    {stretchFeatures && <button onClick={()=>deleteButton(task)} className='delete'>X</button>}
  </div>
  
)
export default Task