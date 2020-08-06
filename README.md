# next-npm-registries
> Npm reigistries for aric.

## installation
```bash
npm install -S @feizheng/next-npm-registries
```

## usage
```js
import '@feizheng/next-npm-registries';


nx.npmRegisties('npm');
// nx.npmRegisties('npm');
// nx.npmRegisties('github');


// resutls
{
  publish: 'https://registry.npmjs.org',
  install: 'https://registry.npmjs.org',
  private: false
}
```
