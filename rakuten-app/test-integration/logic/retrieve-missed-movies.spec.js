import moxios from 'moxios'
import { retrieveMissedMovies } from '../../src/logic/retrieve-missed-movies'
import { siTePerdisteSuccess, siTePerdisteFailure } from '../../src/actions/si-te-perdiste-actions'
import { makeMockStore } from '../../utils/mockstore'

describe('retrieveMissedMovies - Logic', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    test('Should call siTePerdisteSuccess when api request is succesfull', () => {

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
        const expectedActions = siTePerdisteSuccess(movie)

        return store.dispatch(retrieveMissedMovies())
        .then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload.data).toEqual(expectedActions.payload)
            expect(actionCalled[0].type).toEqual(expectedActions.type)
        })
    })

    test('Should call siTePerdisteFailure when api request is not succesfull', () => {

        const error = 'Request failed with status code 500'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 500,
                response: error
            })
        })

        const store = makeMockStore(error)
        const expectedActions = siTePerdisteFailure(error)

        return store.dispatch(retrieveMissedMovies())
        .then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload).toEqual(expectedActions.payload)
            expect(actionCalled[0].type).toEqual(expectedActions.type)
        })
    })
})