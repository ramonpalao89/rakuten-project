import moxios from 'moxios'
import { movieTrailerSuccess, movieTrailerFailure } from '../../src/actions/movie-trailer-actions'
import { retrieveMovieTrailer } from '../../src/logic/retrieve-movie-trailer'
import { makeMockStore } from '../../utils/mockstore'

describe('retrieveMovieTrailer - Logic', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    test('Should call movieTrailerSuccess when api request is succesfull', () => {

        const idMovie = 'idMovie'

        const movieTrailer = {
            title: 'title1',
            year: 'year1',
            stream: 'stream'
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: movieTrailer
            })
        })

        const store = makeMockStore(movieTrailer)
        const expectedActions = movieTrailerSuccess(movieTrailer)

        return store.dispatch(retrieveMovieTrailer(idMovie))
        .then(() => {
            const actionsCalled = store.getActions()
            expect(actionsCalled[0].payload.data).toEqual(expectedActions.payload)
            expect(actionsCalled[0].type).toEqual(expectedActions.type)
        })
    })

    test('Should call movieTrailerFailure when api request is not succesfull', () => {

        const idMovie = 'idMovie'
        const error = 'Request failed with status code 500'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 500,
                response: error
            })
        })

        const store = makeMockStore(error)
        const expectedActions = movieTrailerFailure(error)

        return store.dispatch(retrieveMovieTrailer(idMovie))
        .then(() => {
            const actionsCalled = store.getActions()
            expect(actionsCalled[0].payload).toEqual(expectedActions.payload)
            expect(actionsCalled[0].type).toEqual(expectedActions.type)
        })
    })
})