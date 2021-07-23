import React from 'react'
import Task from '../Components/Task'
import NewTaskForm from '../Components/NewTaskForm'

export default class TasksManager extends React.Component {
  
  render() {
    const {stretchFeatures, handleChange, handleSubmit, newTaskForm} = this.props
    return (
      <div className='tasks'>
        <h5>Tasks</h5>
        {stretchFeatures && <NewTaskForm handleChange={handleChange} handleSubmit={handleSubmit} newTaskForm={newTaskForm}/>}
        <div>
          {this.renderTasks()}
        </div>
      </div>
    )
  }

  renderTasks = () => {
    const {stretchFeatures, tasks, categorySelected, deleteButton} = this.props
    if (categorySelected === 'All') {
      return tasks.map((task,idx) => <Task key={idx} task={task} stretchFeatures={stretchFeatures} deleteButton={deleteButton}/>)
    } else {
      return tasks.filter(task=>task.category === categorySelected).map((task,idx) => (
        <Task key={idx} task={task} stretchFeatures={stretchFeatures} deleteButton={deleteButton}/>))
    }
  }
}