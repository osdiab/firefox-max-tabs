# firefox-max-tabs

Extension for setting the max tabs per window.

### Flags/Continuous Integration

* CircleCI: [![CircleCI](https://circleci.com/gh/osdiab/webextension-max-tabs.svg?style=svg)](https://circleci.com/gh/osdiab/webextension-max-tabs)

## Development

**NOTE:** the following instructions are only tested on
a Mac, but it should apply to any Unix system. If you're on
Windows, try using the Linux subsystem, or submit PRs to
update these docs and procedures for Windows systems.

Accordingly, I don't know how well this works on Microsoft
Edge just yet. I will likely test that soon.

### Before you begin...

1. Ensure Firefox is installed, at least version 48 (since
that's when Web Extensions were introduced).
1. Ensure you have `npm` installed.
1. `cd` into the directory
1. Run `npm install`

### Running the extension

Run `npm start`. It should open in Firefox automatically.

This does not run lint and test.

### Building the extension

Run `npm run-script build-ext`. The extension will be
outputted to `web-ext-artifacts/`.

This runs lint and test first, so those must pass before
the artifact will be built.

### Testing and linting

Write tests using Jest. To run them, run `npm test`.

Ensure your code passes `tslint`. To check, run
`npm run-script lint`. Even better, however, is to set up
your text editor or IDE to automatically run tslint.

### Structure of the extension

I wrote this extension as a Node project in Typescript.
I used Webpack to combine the modular code into a bundled
script.

The source code is in `src/`, which Webpack outputs to the
`__build/` directory.

## Credits

### Icon

The icon uses the Overpass font, created by Red Hat under
the SIL open source license. It can be found here:
https://www.fontsquirrel.com/fonts/overpass
