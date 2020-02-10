'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyWithoutFormatting', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const document = editor.document;
        if (!document) return;

        const selectedTexts = editor.selections.map((selection) => document.getText(selection));
        if (!selectedTexts) return;

        // I don't see any simple way in the API to get the current EOL...
        let eol = '\n';
        if (document.eol === vscode.EndOfLine.CRLF) {
            eol = '\r\n';
        }

        await vscode.env.clipboard.writeText(selectedTexts.join(eol));
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
