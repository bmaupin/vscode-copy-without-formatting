Visual Studio Code extension to copy text without formatting

## ⚠️ You may not need this extension

After this extension was first published, Visual Studio Code added a new setting:

```json
  // Controls whether syntax highlighting should be copied into the clipboard.
  "editor.copyWithSyntaxHighlighting": true,
```

(https://code.visualstudio.com/docs/getstarted/settings#_default-settings)

If you set that to `false`, then the _Copy_ command will copy without formatting and you can use the
_Copy With Syntax Highlighting_ command when needed.

## Features

- Adds the ability to copy text without formatting (syntax highlighting, font, etc)
- Accessible from the right-click context menu or these keyboard shortcuts:
  - Linux/Windows: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>
  - Mac: <kbd>Shift</kbd>+<kbd>⌘</kbd>+<kbd>C</kbd>

![screenshot](screenshot.png)

## Development

1. Clone this project

1. Install dependencies

   ```
   npm i
   ```

1. Open this project in its own window in Visual Studio Code

   ```
   code .
   ```

1. Run the extension

   Press <kbd>F5</kbd> in Visual Studio Code
