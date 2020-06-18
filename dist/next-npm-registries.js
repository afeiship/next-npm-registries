/*!
 * name: @afeiship/next-npm-registries
 * description: Npm reigistries for aric.
 * homepage: https://github.com/afeiship/next-npm-registries
 * version: 1.0.1
 * date: 2020-06-18T15:30:45.773Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NPM_REGISTIES = {
    default: {
      npm: 'https://registry.npmjs.org',
      github: 'https://npm.pkg.github.com',
      alo7: 'https://repos.saybot.net/repository/alo7npm/'
    },
    hooks: {
      alo7: 'https://repos.saybot.net/repository/alo7-private-npm/'
    }
  };

  nx.npmRegistries = function (inRole) {
    var install = NPM_REGISTIES.default[inRole];
    var publish = NPM_REGISTIES.hooks[inRole] || install;

    return { publish: publish, install: install };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.npmRegistries;
  }
})();

//# sourceMappingURL=next-npm-registries.js.map
