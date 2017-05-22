const sinon = require('sinon')
const plugin = require('../plugin')

test('removes Standard', async () => {
  const removeModule = sinon.spy()
  const removePluginComponentExample = sinon.spy()
  const read = sinon.spy(() => { return { scripts: {}, config: {} } })
  const write = sinon.spy()

  const context = {
    ignite: { removeModule, removePluginComponentExample },
    filesystem: { read, write }
  }

  await plugin.remove(context)

  expect(removeModule.calledWith('standard', { unlink: true })).toBe(true)
  expect(removeModule.calledWith('snazzy')).toBe(true)
  expect(removeModule.calledWith('babel-eslint')).toBe(true)
  expect(read.calledOnce).toBe(true)
  expect(write.calledOnce).toBe(true)
})
