const nx = require('@feizheng/next-js-core2');
require('../src/next-npm-registries');

describe('api.basic test', () => {
  test('npm/github publish and installed should be equal', function () {
    var res1 = nx.npmRegistries('npm');
    var res2 = nx.npmRegistries('github');

    expect(res1).toEqual({
      publish: 'https://registry.npmjs.org',
      install: 'https://registry.npmjs.org',
      private: false
    });

    expect(res2).toEqual({
      publish: 'https://npm.pkg.github.com',
      install: 'https://npm.pkg.github.com',
      private: true
    });
  });

  test('alo7 publish and installed should not be equal', function () {
    var res = nx.npmRegistries('alo7');

    expect(res).toEqual({
      publish: 'https://repos.saybot.net/repository/alo7-private-npm/',
      install: 'https://repos.saybot.net/repository/alo7npm/',
      private: true
    });
  });

  test('nil respositry', () => {
    var res = nx.npmRegistries(null);

    expect(res).toEqual({
      publish: 'DO_NOT_PUBILSH_TO_ANY_WHERE',
      install: 'DO_NOT_PUBILSH_TO_ANY_WHERE',
      private: true
    });
  });
});
