import React from 'react'
import { NavBar } from './components'
import { Home, Recipes, Reviews, Contact } from './pages'
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Recipes" component={Recipes} />
        <Route exact path="/Reviews" component={Reviews} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </>
  )
    
}

export default App