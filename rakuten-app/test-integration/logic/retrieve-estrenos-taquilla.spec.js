import moxios from 'moxios'
import { makeMockStore } from '../../utils/mockstore'
import { retrieveEstrenosTaquilla } from '../../src/logic/retrieve-estrenos-taquilla'
import { estrenosTaquillaSuccess, estrenosTaquillaFailure } from '../../src/actions/estrenos-taquilla-actions'

describe('retrieveEstrenosTaquilla - Logic', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    test('Should call estrenosTaquillaSucces when api request is succesfull', () => {

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
        const expected = estrenosTaquillaSuccess(movie)

        return store.dispatch(retrieveEstrenosTaquilla())
        .then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload.data).toEqual(expected.payload)
            expect(actionCalled[0].type).toEqual(expected.type)
        })
    })

    test('Should call estrenosTaquillaFailure when api request is not succesfull', () => {

        const error = 'Request failed with status code 500'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 500,
                response: error
            })
        })

        const store = makeMockStore(error)
        const expected = estrenosTaquillaFailure(error)

        return store.dispatch(retrieveEstrenosTaquilla())
        .then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload).toEqual(expected.payload)
            expect(actionCalled[0].type).toEqual(expected.type)
        })
    })
})