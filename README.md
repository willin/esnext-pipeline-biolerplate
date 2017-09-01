# esnext-pipeline-biolerplate
pipeline functional-programming with es next

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Follow)](https://github.com/willin)

TC39 Proposal: <https://github.com/tc39/proposal-pipeline-operator>

## Have a Try

```bash
git clone git@github.com:AirDwing/esnext-pipeline-biolerplate.git
cd esnext-pipeline-biolerplate
yarn
yarn start
```

```bash
yarn start
yarn start v0.27.5
$ yarn run build && node dist/

src/index.js → dist/index.js...
created dist/index.js in 95ms
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
Done in 2.70s.
```


## How To Use Your Own

### Step 1. Fork this project

```bash
git@github.com:AirDwing/esnext-pipeline-biolerplate.git YOUR_PROJECT_TNAME
cd YOUR_PROJECT_TNAME
rm -rf .git
```

### Step 2. Modify package.json

edit your project name, author, blabla...

and then:

```bash
git init
git remote add origin YOUR_GIT_REPO_PATH
git add .
git commit -m 'init'
git push -u origin master
```

## License

MIT
