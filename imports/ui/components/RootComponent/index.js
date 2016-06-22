import React, { PropTypes } from 'react'


const Comp = ({
  name
}) => {
  return (
    <div className='btn btn-primary'>
      {name}
    </div>
  )
}



const MyComponent = React.createClass({
  render () {
    return (
      <div>
        <Comp name="rafasssssfasdasgasdsadsagasfasdfasdasasdasssel" />
        <Comp name="rafasssssfasdasgasdsadsagasfasdfasdasasdasssel" />
        <Comp name="rafasssssfasdasgasdsadsagasfasdfasdasasdasssel" />
        <Comp name="rafasssssfasdasgasdsadsagasfasdfasdasasdasssel" />
        <Comp name="rafasssssfasdasgasdsadsagasfasdfasdasasdasssel" />
        <Comp name="rafasssssfasdasgasdsadsagasfasdfasdasasdasssel" />
      </div>
    )
  }
})

export default MyComponent
