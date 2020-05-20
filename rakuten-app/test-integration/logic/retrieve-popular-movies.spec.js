import moxios from 'moxios'
import { retrievePopularMovies } from '../../src/logic/retrieve-popular-movies'
import { makeMockStore } from '../../utils/mockstore'
import { popularMovieSuccess, popularMovieFailure } from '../../src/actions/populares-actions'

describe('retrievePopularMovies - Logic', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    test('Should call popularMovieSuccess when api request is succesfull', () => {

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
        const expectedActions = popularMovieSuccess(movie)

        return store.dispatch(retrievePopularMovies())
        .then(() => {
            const actionsCalled = store.getActions()
            expect(actionsCalled[0].payload.data).toEqual(expectedActions.payload)
            expect(actionsCalled[0].type).toEqual(expectedActions.type)
        })
    })

    test('Should call popularMoviesFailure when api request is not succesfull', () => {

        const error = 'Request failed with status code 404'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 404,
                response: error
            })
        })

        const store = makeMockStore(error)
        const expectedActions = popularMovieFailure(error)

        return store.dispatch(retrievePopularMovies())
        .then(() => {
            const actionsCalled = store.getActions()
            expect(actionsCalled[0].payload).toEqual(expectedActions.payload)
            expect(actionsCalled[0].type).toEqual(expectedActions.type)
        })
    })
})