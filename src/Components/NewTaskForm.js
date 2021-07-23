import React from 'react'

const NewTaskForm = ({handleSubmit, handleChange, newTaskForm}) => (
  <form onSubmit={handleSubmit} className="new-task-form">
    <input onChange={e=>handleChange(e)} value={newTaskForm.taskDetail} name='taskDetail' placeholder="New task details" type="text"></input>
    <select onChange={e=>handleChange(e)} value={newTaskForm.taskCategory} name={'taskCategory'}>
      <option>Code</option>
      <option>Food</option>
      <option>Money</option>
      <option>Misc</option>
    </select>
    <input type="submit" value="Add task"></input>
  </form>
)

export default NewTaskForm