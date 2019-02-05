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

## Install alongside bb-test

```bash
npm install -g @bb-cli/bb-test-plugin-custom-config
```

## Usage

```bash
bb-test unit --test-plugins custom-config
```
