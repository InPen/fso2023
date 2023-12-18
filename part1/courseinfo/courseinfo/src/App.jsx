// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14


const Header = (props) => {
  return (
    <div>
      <h1> Header {props.course} </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <h2> Content: {props.parts}</h2>
      <p>{props.exercises1}</p>
      <p>{props.exercises2}</p>
      <p>{props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h3> Total: {props.totalExer}</h3>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const totalExer = [part1.exercises + part2.exercises + part3.exercises]
  return (
    <div>
      <Header course={course} />
      {/* Having difficulty displaying exercise # */}
      <Content parts={parts[0]} exercises1={part1.exercises}/>
      <Content parts={parts[1]} exercises2={part2.exercises}/>
      <Content parts={parts[2]} exercises3={part3.exercises}/>
      <Total totalExer={totalExer} />
    </div>
  )
}

export default App