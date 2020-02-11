'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'extension.copyWithoutFormatting',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      if (editor.selections.length === 1) {
        const document = editor.document;
        if (!document) return;

        const selectedText = document.getText(editor.selection);
        if (!selectedText) return;

        await vscode.env.clipboard.writeText(selectedText);
      } else {
        // When there are multiple selections (due to multiple cursors), vscode doesn't seem to copy the formatting.
        // So just cheat and use the default built-in copy functionality.
        vscode.commands.executeCommand('editor.action.clipboardCopyAction');
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
