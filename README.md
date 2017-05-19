# Ignite Standard

An [Ignite](https://github.com/infinitered/ignite) wrapper for [Standard.js](https://github.com/feross/standard)

Adds the module, as well as the following npm scripts:

```
package.json

{
  "scripts": {
   ...
    "lint": "standard --verbose | snazzy",
    "lintdiff": "git diff --name-only --cached --relative | grep '\\.js$' | xargs standard | snazzy",
    "fixcode": "standard --fix"
    ...
  }
}
```

Also adds linting to the existing git-hook

## Example

If you don't currently have a linter installed in your Ignite project, run `ignite add standard`

If you are igniting a project from scratch using IR boilerplates (https://github.com/infinitered/ignite/blob/master/BOILERPLATES.md), this plugin is included by default.

## Contributing

Contributing

1. Clone this repo
2. Run yarn install
2. Run yarn test
2. Check out a branch and make your changes
2. Write tests for those changes
2. Submit a pull request back upstream

License

This plugin is licensed MIT
