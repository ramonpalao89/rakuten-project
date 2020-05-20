import moxios from 'moxios'
import { retrieveMovieDetail } from '../../src/logic/retrieve-movie-detail'
import { movieDetailSuccess, movieDetailFailure } from '../../src/actions/movie-detail-actions'
import { makeMockStore } from '../../utils/mockstore'

describe('retrieveMovieDetail - Logic', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    test('Should call movieDetailSuccess when api request is succesfull', () => {

        const idMovie = 'idMovie'

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
        const expectedActions = movieDetailSuccess(movie)
        return store.dispatch(retrieveMovieDetail(idMovie))
        .then(() => {
            const actionsCalled = store.getActions()
            expect(actionsCalled[0].payload.data).toEqual(expectedActions.payload)
            expect(actionsCalled[0].type).toEqual(expectedActions.type)
        })
    })

    test('Should call movieDetailFailure when api request is not succesfull', () => {

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
        const expectedActions = movieDetailFailure(error)

        return store.dispatch(retrieveMovieDetail(idMovie))
        .then(() => {
            const actionsCalled = store.getActions()
            expect(actionsCalled[0].payload).toEqual(expectedActions.payload)
            expect(actionsCalled[0].type).toEqual(expectedActions.type)
        })
    })
})