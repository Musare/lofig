# lofig

> [npmjs.com/package/config](https://npmjs.com/package/config) for client side JavaScript

[![Known Vulnerabilities](https://snyk.io//test/github/jonathan-grah/lofig/badge.svg?targetFile=package.json)](https://snyk.io//test/github/jonathan-grah/lofig?targetFile=package.json)

## Installation

`npm install lofig --save --production`

You can also use https://unpkg.com/lofig@latest/dist/lofig.min.js.

## Usage

```js
import 'lofig' from 'lofig'; // not necessary if using CDN Link

// change config folder
lofig.folder = 'config/default.json';

// check if property exists
await lofig.has('secret');

// return property
await lofig.get('secret');

// NOTE: You can also use callbacks e.g.
lofig.get('secret', res => {
	console.log('secret', res);
})
```

See the [example](https://github.com/jonathan-grah/lofig/tree/master/example) folder for more details.