# firefox-max-tabs

Extension for setting the max tabs per window.

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

### Building the extension

Run `npm build`. The extension will be outputted to
TODO: fill in where it gets outputted

### Structure of the extension

I wrote this extension as a Node project in Typescript.
I used Webpack to combine the modular code into a bundled
script.

The source code is in `src/`, which Webpack outputs to the
`__build/` directory.