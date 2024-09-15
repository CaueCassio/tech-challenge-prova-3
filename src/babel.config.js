module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    transformIgnorePatterns: [
        '/node_modules/(?!(bson|other-module-to-transform)/)',
      ],
  };