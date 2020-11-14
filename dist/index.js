/*!
 * name: @jswork/next-npm-registries
 * description: Npm reigistries for aric.
 * homepage: https://github.com/afeiship/next-npm-registries
 * version: 1.0.0
 * date: 2020-11-14T08:13:25.116Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NPM_REGISTIES = {
    default: {
      npm: 'https://registry.npmjs.org',
      github: 'https://npm.pkg.github.com',
      alo7: 'https://repos.saybot.net/repository/alo7npm/',
      null: 'DO_NOT_PUBILSH_TO_ANY_WHERE'
    },
    hooks: {
      alo7: 'https://repos.saybot.net/repository/alo7-private-npm/'
    }
  };

  nx.npmRegistries = function (inRole) {
    var install = NPM_REGISTIES.default[inRole];
    var publish = NPM_REGISTIES.hooks[inRole] || install;

    return { publish: publish, install: install, private: inRole !== 'npm' };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.npmRegistries;
  }
})();
