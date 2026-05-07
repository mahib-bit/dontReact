import './App.css'
import ToDo from './Todo';
import Actor from './Actor';
import Bands from './Bands';

function App() {

  // const actors = ['Brad Pitt', 'Leonardo DiCaprio', 'Scarlett Johansson'];

  const bands = [
    {name: "Tame Impala", genre: "Psychedelic Rock", members: 1},
    {name: "Cigarettes After Sex", genre: "Dream Pop", members: 4},
    {name: "The Smiths", genre: "Alternative Rock", members: 4}
  ]

  // const time = 50;

  return (
    <>
      <h1>React Core Concepts</h1>

      {
        bands.map(band => <Bands key={band.name} name={band.name} genre={band.genre} members={band.members} />)
      }

      {/* {
        actors.map(actors => <Actor name={actors} />)
      } */}

      {/* <ToDo name="Buy groceries" isDone={true} time={time} />
      <ToDo name="Walk the dog" isDone={false}  time={time}/>
      <ToDo name="Read a book" isDone={true} />
      <ToDo name="Buy a bottle of milk" isDone={false} />

      <Component />
      <Component />
      <Fruits />
      <Student name="Alice" />
      <Student name="Bob" />    
      <Flower color="purple" number={5} />
      <Flower color="green" number={3} />
      <Salami taka={1000} />  */}
    </>
  )
}

function Component() {
  const num = 1;
  const obj = { name: 'John', age: 30 };
  const dynamic = "These aren't dynamic yet";

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

function Flower({color , number}) {
  return (
    <div className='student'>
      <h3>Flower</h3>
      <p style={{ color: 'purple', fontWeight: 'bold' }}>{number} {color} petals</p>
      <p style={{ color: 'green', fontWeight: 'bold' }}>{color} {number} leaves</p>
    </div>
  )
}

function Salami({ taka }) {
  return (
    <div className='salami'>
      <h3 style={{ color: 'aquamarine' }}>Salami</h3>
      <p style={{ color: 'aquamarine', fontWeight: 'bold' }}>He got {taka}taka salami this EID</p>
    </div>
  )
}

export default App
