# syn.rsvim

<a href="https://www.npmjs.com/package/syn.rsvim"><img alt="rsvim" src="https://img.shields.io/npm/v/%40rsvim%2Fsyn.rsvim" /></a>
<a href="https://github.com/rsvim-dev/syn.rsvim/actions/workflows/ci.yml"><img alt="ci.yml" src="https://img.shields.io/github/actions/workflow/status/rsvim-dev/syn.rsvim/ci.yml?branch=main&label=ci" /></a>

## About

Tree-sitter parsers for Rsvim syntax and highlights.

## Installation

First go to Rsvim config home directory:

```bash
cd $XDG_CONFIG_HOME/rsvim
# or
cd $HOME/.rsvim
```

Then install with either `git` or `npm`.

> Plugin version is compatible with the Rsvim version, e.g. `syn.rsvim 0.1` for `Rsvim 0.1`.

### git

```bash
# tag
git clone --branch=v0.2.1 https://github.com/rsvim/syn.rsvim

# develop
git clone --branch=main https://github.com/rsvim/syn.rsvim
```

### npm

```bash
# specific version
npm install syn.rsvim@0.2.1

# latest version
npm install syn.rsvim
```

## Setup

Setup in your config entry script:

```javascript
import syn from "syn.rsvim";
syn.setup();
```

The `setup` function accepts an optional object, by default is:

```typescript
const DefaultSetupOptions: SetupOptions = {
  force: true,
};
```

You can pass your custom options when setup:

```javascript
import syn from "syn.rsvim";
syn.setup({
  // Your configurations here...
});
```
