/*!
 * name: @afeiship/next-npm-registries
 * description: Npm reigistries for aric.
 * homepage: https://github.com/afeiship/next-npm-registries
 * version: 1.0.0
 * date: 2020-06-18T14:45:06.321Z
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
    var value = NPM_REGISTIES.hooks[inRole] || NPM_REGISTIES.default[inRole];

    return {
      publish: value,
      install: NPM_REGISTIES.default[inRole]
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.npmRegistries;
  }
})();

//# sourceMappingURL=next-npm-registries.js.map
