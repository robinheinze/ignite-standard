# Ignite Standard

An ignite wrapper for [Standard.js](https://github.com/feross/standard)

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

If you are igniting a project from scratch using the `ignite-ir-next` boilerplate, this plugin is included by default.

