# Aderinom's eslint-config

Since I keep on making new projects I needed some reusable eslint config. That's it.
As I assume only I will ever use this, i have not bothered uploading it to NPM.

Anyways, if you are still curious - i think this + vscode is a pretty well working setup.

This uses:
Eslint
Prettier
React-Refresh
React-Hooks
Unicorn


# How to use?

1. Add this package, Eslint and Prettier as a devDependency
2. Add following lines to your eslint config:
```javascript
require("@rushstack/eslint-patch/modern-module-resolution"); //changes eslint's packet resolution to allow a monorepo setup

module.exports = {
  extends: ["@aderinom/eslint-config/frontend"],
};
```
If using Vscode - to get linting errors, automatic formatting and auto format on save:
3. Add this package, [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to vscode
4. Add this to your vsconfig:
```json
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

5. You can either use the "frontend" config, or the "nodejs" config depending on your usecase.

# Anything interesting here? 

One thing [eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch#rushstackeslint-patch) which allows this package to use eslint plugins without defining them as peerDependencies which would have to be installed by the user. 

Have to recommend this little package if you want your own reusable config, fiddled around way too trying to get this working in a monorepo. 