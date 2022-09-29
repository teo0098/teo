/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 * */
const moduleFederationConfig = {
  name: 'registration',
  exposes: {
    './Registration': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
