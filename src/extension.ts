'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const clipboardy = require('clipboardy');

    let disposable = vscode.commands.registerCommand('extension.copyWithoutFormatting', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const document = editor.document;
        if (!document) return;

        const selectedText = document.getText(editor.selection);
        if (!selectedText) return;

        clipboardy.writeSync(selectedText);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
