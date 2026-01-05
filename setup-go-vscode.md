# Installing Go

The most recent version of Go is 1.25.5, while Go 1.26 is expected in early February 2026.
You will need at least Go 1.25.x for this course.

If you have previously installed Go, please make sure to update to the latest version.
To check your currently installed version of Go, run the following command in a terminal:

```sh
go version
```

If not, please see install instructions on the [Go website](https://go.dev/doc/install).

## Getting Started

To get started with Go, you should read the [Getting Started](https://go.dev/doc/tutorial/getting-started) tutorial on the Go website.

## Visual Studio Code (VSCode)

For writing Go code we recommend using the cross-platform editor **[Visual Studio Code](https://code.visualstudio.com/)**.
The teaching staff mainly use VSCode for Go programming.

VSCode also has good support for interacting with various AI coding assistants, such as GitHub Copilot and ChatGPT.

### Installing and Setting Up VSCode

Simply follow the instructions to install the program for your desired system.

For Go language support, use the **[Go extension](https://code.visualstudio.com/docs/languages/go)**, which gives you things such as intellisense (autocompletion, etc.) and linter (check code for errors).
You install the Go extension from the marketplace within VSCode.

### Configuring VSCode

To configure VSCode, open the settings by pressing `Ctrl+,` (or `Cmd+,` on macOS).
You can also open the settings by clicking the gear icon in the lower left corner of the window.

We recommend to use the following settings:

```json
  "go.useLanguageServer": true,
  "gopls": {
    "formatting.gofumpt": true,
    "ui.semanticTokens": true,
    "staticcheck": true
  },
```

### Developing in WSL with VSCode

If you are developing with WSL on Windows you can use VSCode for interacting with the WSL environment.
The VSCode documentation has [detailed instructions](https://code.visualstudio.com/docs/remote/wsl) for this use case.
