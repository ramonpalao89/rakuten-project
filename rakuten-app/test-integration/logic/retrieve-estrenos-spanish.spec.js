import moxios from 'moxios'
import { makeMockStore } from '../../utils/mockstore'
import { retrieveEstrenosSpanish } from '../../src/logic/retrieve-estrenos-spanish'
import { estrenosSpanishSuccess, estrenosSpanishFailure } from '../../src/actions/estrenos-spanish-actions'

describe('retrieveEstrenosSpanish - Logic', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    test('Should call estrenosSpanishSuccess when api request is succesfull', () => {

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

        const expectedActions = estrenosSpanishSuccess(movie)

        return store.dispatch(retrieveEstrenosSpanish())
        .then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload.data).toEqual(expectedActions.payload)
            expect(actionCalled[0].type).toEqual(expectedActions.type)
        })
        
    })

    test('Should call estrenosSpanishFailure when api request is not succesfull', () => {

        const error = 'Request failed with status code 404'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 404,
                response: error
            })
        })

        const store = makeMockStore(error)
        
        const expected = estrenosSpanishFailure(error)

        return store.dispatch(retrieveEstrenosSpanish())
        .then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload).toEqual(expected.payload)
            expect(actionCalled[0].type).toEqual(expected.type)
        })
    })
})