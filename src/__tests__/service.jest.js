import { getHouses } from '../service';


global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ })
}))

beforeEach(() => {
  fetch.mockClear();
});

describe('service test', () => {
  test('Should call correct api path', async () => {
    const correctApiPath = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72a'

    await getHouses()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(correctApiPath)
  })
})
