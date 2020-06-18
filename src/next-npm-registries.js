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
