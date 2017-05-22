const sinon = require('sinon')
const plugin = require('../plugin')

test('adds the proper npm module and component example', async () => {
  // spy on few things so we know they're called
  const addModule = sinon.spy()
  const addPluginComponentExample = sinon.spy()
  const read = sinon.spy(() => { return { scripts: {}, config: {} } })
  const write = sinon.spy()

  // mock a context
  const context = {
    ignite: { addModule, addPluginComponentExample },
    filesystem: { read, write }
  }

  await plugin.add(context)

  expect(addModule.calledWith('standard', { link: true, dev: true, version: '10.0.2' })).toBe(true)
  expect(addModule.calledWith('snazzy', { dev: true })).toBe(true)
  expect(addModule.calledWith('babel-eslint', { dev: true, version: '7.1.1' })).toBe(true)
  expect(read.calledOnce).toBe(true)
  expect(write.calledOnce).toBe(true)
})
