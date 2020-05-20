import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

export const makeMockStore = (state = { }) => { //receives an object to be passed as initial state to our mockStore
    return mockStore({
        ...state
    })
}