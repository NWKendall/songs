# Development Notes

## Steps

- create an empty repo
- clone it
- open in code editor
- create a default package.json `npm init -y`
- install dependencies (e.g `npm i express`)
- `git status` => `node_modules` shows on list
- npx enables to run package without installing package
  * `npx gitignore node` generates  `.gitignore`
- change scripts `test:` => scripts `start: node index.js`
- set up server on index.js
- `npm start` will run index.js which will run the server (don't need to use `npm run server` )
  * only scripte `start` and `test` don't require `run`
- `-D` is a devDependency. Won't get uploaded to Heroku 
- install nodemon `npm i -D nodemon`

