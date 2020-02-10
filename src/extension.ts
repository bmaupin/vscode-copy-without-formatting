'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyWithoutFormatting', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const document = editor.document;
        if (!document) return;

        const selectedText = document.getText(editor.selection);
        if (!selectedText) return;

        await vscode.env.clipboard.writeText(selectedText);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
