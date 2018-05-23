module.exports = {
  'lint': 'standard --verbose | snazzy',
  'lintdiff': 'git diff --name-only --cached --relative | grep \'\\.js$\' | xargs standard | snazzy',
  'fixcode': 'standard --fix',
  'standard': {
    'parser': 'babel-eslint',
    'globals': [
      'describe',
      'test',
      'jest',
      'expect',
      'fetch',
      'navigator',
      '__DEV__',
      'XMLHttpRequest',
      'FormData',
      'React$Element'
    ]
  },
  'noLintHook': 'npm run test -s'
}
