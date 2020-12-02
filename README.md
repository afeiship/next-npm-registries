# next-npm-registries
> Npm reigistries for aric.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-npm-registries
```

## usage
```js
import '@jswork/next-npm-registries';


nx.npmRegisties('npm');
// nx.npmRegisties('npm');
// nx.npmRegisties('github');

// results
{
  publish: 'https://registry.npmjs.org',
  install: 'https://registry.npmjs.org',
  private: false,
  access: 'restricted'
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-npm-registries/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-npm-registries
[version-url]: https://npmjs.org/package/@jswork/next-npm-registries

[license-image]: https://img.shields.io/npm/l/@jswork/next-npm-registries
[license-url]: https://github.com/afeiship/next-npm-registries/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-npm-registries
[size-url]: https://github.com/afeiship/next-npm-registries/blob/master/dist/next-npm-registries.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-npm-registries
[download-url]: https://www.npmjs.com/package/@jswork/next-npm-registries
