# Aderinom's eslint-config

Since I keep on making new projects I needed some reusable eslint config. That's it.
As I assume only I will ever use this, i have not bothered uploading it to NPM.


# How to use?

1. Add this package, Eslint and Prettier as a devDependency
2. Add following line to your eslint config:
```javascript
module.exports = {
  extends: ["@aderinom/eslint-config/frontend"],
};
```

3. You can either use the "frontend" config, or the "nodejs" config depending on your usecase.

# Anything interesting here? 

One thing [eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch#rushstackeslint-patch) which allows this package to use eslint plugins without defining them as peerDependencies which would have to be installed by the user. 

Have to recommend this little package if you want your own reusable config, fiddled around way too trying to get this working in a monorepo. 