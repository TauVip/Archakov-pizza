import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setPizzas } from './redux/actions/pizzas'
import { Header } from './components'
import { Home, Cart } from './pages'

function App(props) {
  const dispatch = useDispatch()
  const { items } = useSelector(({ pizzas, filters }) => ({
    items: pizzas.items,
    sortBy: filters.sortBy
  }))

  React.useEffect(
    () =>
      axios
        .get('http://localhost:3000/db.json')
        .then(({ data }) => dispatch(setPizzas(data.pizzas))),
    []
  )

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route path='/' render={() => <Home items={items} />} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  )
}

/*
class App extends React.Component {
  componentDidMount() {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => this.props.setPizzas(data.pizzas))
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Route
            path='/'
            render={() => <Home items={this.props.items} />}
            exact
          />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    items: state.pizzas.items,
    filters: state.filters
  }),
  dispatch => ({
    setPizzas: items => dispatch(setPizzas(items))
  })
)(App)
*/

export default App
