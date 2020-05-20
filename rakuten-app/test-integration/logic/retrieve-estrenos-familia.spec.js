import moxios from 'moxios'
import { makeMockStore } from '../../utils/mockstore'
import { retrieveEstrenosFamilia } from '../../src/logic/retrieve-estrenos-familia'
import { estrenosFamiliaSuccess, estrenosFamiliaFailure } from '../../src/actions/estrenos-familia-actions'

describe('retrieveEstrenosFamilia - Logic', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    test('Should call estrenosFamiliaSuccess when api request is succesfull', () => {

        //expected response
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

        const expected = estrenosFamiliaSuccess(movie)

        return store.dispatch(retrieveEstrenosFamilia()).then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload.data).toEqual(expected.payload)
            expect(actionCalled[0].type).toEqual(expected.type)
        })
    })

    test('Should call estrenosFamiliaFailure when api request is not succesfull', () => {
        
        const error = 'Request failed with status code 404'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 404,
                response: error
            })
        })

        const store = makeMockStore(error)

        const expected = estrenosFamiliaFailure(error)

        return store.dispatch(retrieveEstrenosFamilia()).then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload).toEqual(expected.payload)
            expect(actionCalled[0].type).toEqual(expected.type)
        })
    })
})

