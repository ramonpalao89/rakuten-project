import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route} from 'react-router-dom'
import store from '../store'
import '../style.css'
import { Landing, MovieDetail, MovieTrailer } from '../components'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path='/' component={Landing} />
                    <Route path='/movies/:id' component={MovieDetail} />
                    <Route path='/movie/:id/trailer' component={MovieTrailer} />
                </div>
            </Router>
        </Provider>
    )
}

export default App
