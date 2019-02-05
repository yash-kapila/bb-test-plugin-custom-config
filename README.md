# BB-TEST Custom Config

Provides support for having a custom karma configuration file which is merged with the default ont.

## Sample custom config file

```
const karmaConfig = {
  browserDisconnectTimeout: 3000,
  
  browsers: ['ChromeHeadlessNoSandbox'],
  
  customLaunchers: {
    ChromeHeadlessNoSandbox: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox'],
    },
  },
};

module.exports = karmaConfig;


```

## Usage

Clone the repo, navigate inside the directory and execute following:

```bash
npm link
```

This creates a symlink in the global `node_modules` folder that links to this package.

Next, navigate inside your project's statics directory and execute the following:

```
npm link @bb-cli/bb-test-plugin-custom-config
```

This will create a symbolic link from the previously globally linked package to statics `node_modules`.

#### Note that package-name is taken from package.json, not from directory name.
