# Workflow Summary App

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## VS Code configuration

As this is a Vue 3 project, you should use Volar and disable Vetur for the workspace.

There is additional setup to make DX even better, by enabling Takeover mode. You can read more here: <https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode>.

It consists of those steps:
1. In your project workspace, bring up the command palette with Ctrl + Shift + P (macOS: Cmd + Shift + P).
2. Type `built` and select "Extensions: Show Built-in Extensions".
3. Type `typescript` in the extension search box (do not remove @builtin prefix).
4. Click the little gear icon of "TypeScript and JavaScript Language Features", and select "Disable (Workspace)".
5. Reload the workspace. Takeover mode will be enabled when you open a Vue or TS file.

## Setup

Make sure you have the correct version of node. You can easily check, and automatically install the right version by running

```bash
nvm install
```


To install the dependencies, run:

```bash
make install
```

It will automatically pick the right version.

## Development server

You can run the development server by running

```bash
make start
```

This will run the development server in debug mode with the `9244` inspection port.

You can also run the server through the VSCode workflows tab. Two options are available:

- **Attach workflow-summary-app** will attach to the node process you previously launched
- **Run workflow-summary-app in Debug mode** will run and auto attach to the process.