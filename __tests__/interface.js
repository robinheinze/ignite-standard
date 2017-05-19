const plugin = require('../plugin')

test('has the right interface', async () => {
  expect(typeof plugin.add).toEqual('function')
  expect(typeof plugin.remove).toEqual('function')
})
