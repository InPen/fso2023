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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const totalExer = [exercises1 + exercises2 + exercises3]
  return (
    <div>
      <Header course={course} />
      {/* Having difficulty displaying exercise # */}
      <Content parts={parts[0]} exercises1={exercises1}/>
      <Content parts={parts[1]} exercises2={exercises2}/>
      <Content parts={parts[2]} exercises3={exercises3}/>
      <Total totalExer={totalExer} />
    </div>
  )
}

export default App