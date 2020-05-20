import moxios from 'moxios'
import { makeMockStore } from '../../utils/mockstore'
import { retrieveMayMovies } from '../../src/logic/retrieve-may-movies'
import { mayMoviesSuccess, mayMoviesFailure } from '../../src/actions/may-movies-actions'

describe('retrieveMayMovies - Logic', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    test('Should call mayMoviesSuccess when api request is succesfull', () => {

        const movie = {
            title: 'title1',
            year: 'year1',
            artwork: 'artwork1'
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: movie
            })
        })

        const store = makeMockStore(movie)
        const expectedAction = mayMoviesSuccess(movie)

        return store.dispatch(retrieveMayMovies()).then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload.data).toEqual(expectedAction.payload)
            expect(actionCalled[0].type).toEqual(expectedAction.type)
        })
    })

    test('Should call mayMoviesFailure when api request is not succesfull', () => {

        const error = 'Request failed with status code 500'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 500,
                response: error
            })
        })

        const store = makeMockStore(error)
        const expectedAction = mayMoviesFailure(error)

        return store.dispatch(retrieveMayMovies())
        .then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload).toEqual(expectedAction.payload)
            expect(actionCalled[0].type).toEqual(expectedAction.type)
        })
    })
})