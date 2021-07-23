import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './Components/Categories';
import TasksManager from './Containers/TasksManager';


class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    stretchFeatures: false,
    categoryFiltersSelected: ['selected',...new Array(CATEGORIES.length-1).fill(null)],
    categorySelected: 'All',
    newTaskForm: {
      taskDetail: '',
      taskCategory: 'Code'
    }
  }

  componentDidMount =() => {
    CATEGORIES.map((category, idx) => (
      <button onClick={(e)=>this.handleSelectedCategory(e,idx)} key={idx} className={this.state.categoryFiltersSelected[idx]}>{category}</button>)
    )
  }

  render() {
    return (
      <div className="App">
        <button 
          onClick={this.handleStretchFeaturesClick} 
          className={this.state.stretchFeatures ? 'toggle on' : 'toggle off'}> 
          Stretch features {this.state.stretchFeatures ? 'enabled' : 'disabled'}
        </button>
        <h2>My tasks</h2>
        <Categories renderCategories={this.renderCategories} />
        <TasksManager 
          tasks={this.state.tasks} 
          stretchFeatures={this.state.stretchFeatures} 
          categorySelected={this.state.categorySelected}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newTaskForm={this.state.newTaskForm}
          deleteButton={this.deleteButton}/>
      </div>
    );
  }
  handleStretchFeaturesClick = () => {
    this.setState(prevState => {
      return {
        stretchFeatures: !prevState.stretchFeatures
      }
    })
  }
  
  renderCategories = () => (
    CATEGORIES.map((category, idx) => (
      <button onClick={(e)=>this.handleSelectedCategory(e,idx)} key={idx} className={this.state.categoryFiltersSelected[idx]}>{category}</button>)
    )
  )
  
  handleSelectedCategory = (e, index) => {
    const copyOfCategoryFiltersSelected = new Array(CATEGORIES.length).fill(null)
    copyOfCategoryFiltersSelected[index] = 'selected'
    this.setState({
      categoryFiltersSelected: copyOfCategoryFiltersSelected,
      categorySelected: e.target.innerText
    })
  }

  handleChange = (e) => {
    this.setState({
      newTaskForm: {
        ...this.state.newTaskForm,
        [e.target.name]:e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      text: this.state.newTaskForm.taskDetail,
      category: this.state.newTaskForm.taskCategory
    }
    const copyOfTasks = [...this.state.tasks]
    copyOfTasks.push(newTask)
    this.setState({
      tasks: copyOfTasks
    })
    this.setState({
      newTaskForm: {
        taskDetail: '',
        taskCategory: 'Code'
      }
    })
  }

  deleteButton = (task) => {
    const copyOfTasks = [...this.state.tasks.filter(item => item !== task)]
    this.setState({
      tasks: copyOfTasks
    })
  }
}


export default App;
