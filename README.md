# markdown-it-twitter

very wip markdown parsing for twitter hashtags/mentions

forked from https://github.com/flowdock/markdown-it-flowdock

> flowdock hashtag (`#tag`), mentions (`@user`) and relaxed autolink plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

* `@user` => `<a class="mention" href="https://twitter.com/user" target="_blank">@user</a>`
* `#hashtag` => `<span class="hashtag">#hashtag</span>`

## Install

```bash
npm install markdown-it-twitter --save
```

```js
var md = require('markdown-it')().use(require('markdown-it-twitter'));

md.render('Test #hashtag @user'); 
// 'Test <span class="hashtag">#hashtag</span> <a class="mention" href="https://twitter.com/user" target="_blank">@user</a>'
```

## Tests

Tests are run with npm:

```bash
npm install
npm test
```
