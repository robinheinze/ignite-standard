// Ignite CLI plugin for Standard
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'standard'

const APP_PATH = process.cwd()
const PLUGIN_PATH = __dirname

const patches = require(`${PLUGIN_PATH}/patches`)

const add = async function (context) {
  const { ignite, filesystem } = context

  await ignite.addModule(NPM_MODULE_NAME, { link: true, dev: true })

  let pkg = filesystem.read(`${APP_PATH}/package.json`, 'json')

  pkg.scripts['lint'] = patches.lint
  pkg.scripts['lintdiff'] = patches.lintdiff
  pkg.scripts['fixcode'] = patches.fixcode
  pkg.scripts['git-hook'] = patches['git-hook']
  pkg.standard = patches.standard

  filesystem.write(`${APP_PATH}/package.json`, pkg)
}

const remove = async function (context) {
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  let pkg = filesystem.read(`${APP_PATH}/package.json`, 'json')

  delete pkg.scripts['lint']
  delete pkg.scripts['lintdiff']
  delete pkg.scripts['fixcode']
  pkg.scripts['git-hook'] = patches.noLintHook
  delete pkg['standard']

  filesystem.write(`${APP_PATH}/package.json`, pkg)
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }
