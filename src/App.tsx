import { Header } from './components'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import SearchPage from './pages/Search'
import Movie from './pages/Movie'

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/movie'>
          <Movie />
        </Route>
        <Route path='/'>
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
