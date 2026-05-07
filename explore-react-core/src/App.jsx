import './App.css'

function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Component />
      <Component />
      <Fruits />
      <Student name="Alice" />
      <Student name="Bob" />
    </>
  )
}

function Component() {
  const num = 1;
  const obj = { name: 'John', age: 30 };
  const dynamic = 'These arent dynamic yet';

  const personStyle = {
    color: 'aquamarine',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '10px',
    backgroundColor: 'darkred',
    margin: '10px',
    padding: '10px',
  }

  return (
    <>
      <p style={personStyle}> This is a component {num} JSON: {JSON.stringify(obj)}</p>
      <Fruits />
      <p>{dynamic}</p>
    </>
  )
}

function Student(props) {
  return (
    <div className='student'>
      <h3>Student : {props.name} </h3>
      <p>Dept : Computer Science</p>
    </div>
  )
}

function Fruits() {
  return (
    <div style={{
      border: '2px solid darkgreen',
      padding: '10px',
      margin: '10px'
    }}>
      <h3>Fruits</h3>
    </div>
  )
}

export default App
