import { useState, useEffect } from 'react'

import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

import './App.css'


const App = () => {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  const onSearchChange = (e) => {
    if (e.target.value === '') {
      fetch('https://jsonplaceholder.cypress.io/users')
        .then(response  => response.json())
        .then(users => {setRobots(users)})
    } else {
      setSearchfield(e.target.value)
      const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      })

      setRobots(filteredRobots)
    }
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then(response  => response.json())
      .then(users => {setRobots(users)})
    
  }, [])

  return (
    <div className="tc">
      <header className="App-header">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={onSearchChange} />
      </header>
      <Scroll>
        {
          robots.length === 0
            ? <h1>Loading...</h1>
            : ( <article>
                  <CardList robots={robots} />
                </article>
              )
        }
      </Scroll>
    </div>
  )
}

export default App
