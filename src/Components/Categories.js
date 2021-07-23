import React from 'react'

class Categories extends React.Component {
  render() {
    const {renderCategories} = this.props
    return (
      <div className='categories'>
        <h5>Category filters</h5>
        {renderCategories()}
      </div>
    )
  }
}

export default Categories