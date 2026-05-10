import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import Score from './Score'
import Users from './Users'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

function App() {

const handleClick3 = () => {
  alert('You clicked the button 3!')
}

  function handleClick() {
    alert('You clicked the button 1!')
  }

  return (
    <>
      <section id="center">
      
          <h1>Get started</h1>

          <Suspense fallback={<h2>Loading...</h2>}>
            <Users fetchUsers={fetchUsers} />
          </Suspense>

          <Score />
          <Counter />

          <button onClick={handleClick}>Click Me</button>

          <button onClick={function handleClick2() { alert('You clicked the button 2!') }}>Click Me 2</button>

          <button onClick={handleClick3}>Click Me 3</button>
          
          <button onClick={() => alert('You clicked the button 4!')}>Click Me 4</button>

      </section>
    </>
  )
}

export default App