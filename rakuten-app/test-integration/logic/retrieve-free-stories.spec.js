import moxios from 'moxios'
import { retrieveFreeStories } from '../../src/logic/retrieve-free-stories'
import { freeStoriesSuccess, freeStoriesFailure } from '../../src/actions/free-stories-actions'
import { makeMockStore } from '../../utils/mockstore'

describe('retrieveFreeStories - Logic', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    test('Should call freeStoriesSuccess when api request is succesfull', () => {

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
        const expectedAction = freeStoriesSuccess(movie)

        return store.dispatch(retrieveFreeStories())
        .then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload.data).toEqual(expectedAction.payload)
            expect(actionCalled[0].type).toEqual(expectedAction.type)
        })
    })

    test('Should call freeStoriesFailure when api request is not succesfull', () => {

        const error = 'Request failed with status code 500'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 500,
                response: error
            })
        })

        const store = makeMockStore(error)
        const expectedAction = freeStoriesFailure(error)

        return store.dispatch(retrieveFreeStories())
        .then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0].payload).toEqual(expectedAction.payload)
            expect(actionCalled[0].type).toEqual(expectedAction.type)
        })
    })
})