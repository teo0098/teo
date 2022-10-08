/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 * */
const moduleFederationConfig = {
  name: 'chatRegistration',
  exposes: {
    './ChatRegistration': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
