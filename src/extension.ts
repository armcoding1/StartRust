import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.workspace.onDidChangeTextDocument((event) => {
        const document = event.document;

        if (document.languageId === "rust") {
            const text = document.getText().trim();

            if (text === "io") {
                insertBoilerplate(document, "use std::io;\n\nfn main() {\n    // Your code here\n}\n");
            } else if (text === "arr") {
                insertBoilerplate(document, "fn main() {\n    let arr = [0; 10];\n    // Your code here\n}\n");
            } else if (text === "vec") {
                insertBoilerplate(document, "fn main() {\n    let vec = Vec::new();\n    // Your code here\n}\n");
            } else if (text === "str") {
                insertBoilerplate(document, "fn main() {\n    let s = String::from(\"Hello, World!\");\n    // Your code here\n}\n");
            } else if (text === "math") {
                insertBoilerplate(document, "use std::f64;\n\nfn main() {\n    let x = 2.0_f64.sqrt();\n    // Your code here\n}\n");
            } else if (text === "file") {
                insertBoilerplate(document, "use std::fs;\n\nfn main() {\n    // Your code here\n}\n");
            } else if (text === "ptr") {
                insertBoilerplate(document, "fn main() {\n    let x = Box::new(5);\n    // Your code here\n}\n");
            } else if (text === "time") {
                insertBoilerplate(document, "use std::time::{Instant, Duration};\n\nfn main() {\n    // Your code here\n}\n");
            } else if (text === "cont") {
                insertBoilerplate(document, "fn main() {\n    let vec = vec![1, 2, 3, 4];\n    let set: std::collections::HashSet<_> = vec.into_iter().collect();\n    // Your code here\n}\n");
            }
        }
    });

    context.subscriptions.push(disposable);
}

async function insertBoilerplate(document: vscode.TextDocument, boilerplate: string) {
    const edit = new vscode.WorkspaceEdit();
    const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(document.getText().length)
    );

    edit.replace(document.uri, fullRange, boilerplate);
    await vscode.workspace.applyEdit(edit);
}

export function deactivate() { }
