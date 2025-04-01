# StartRust

StartRust is a Visual Studio Code extension that automatically adds standard boilerplate code when certain keywords are typed in a .rs file. It simplifies the process of starting new Rust files by eliminating the need to manually insert standard imports and the main function.

## Features

### Auto-insert Boilerplate Code for .rs Files:

The extension inserts boilerplate code based on the following trigger keywords:

- **io**: Adds basic `std::io` boilerplate.
- **arr**: Adds boilerplate for working with arrays.
- **vec**: Adds boilerplate for working with vectors.
- **str**: Adds boilerplate for string handling in Rust.
- **math**: Adds boilerplate for mathematical operations and standard math functions.
- **file**: Adds boilerplate for file input/output operations.
- **ptr**: Adds boilerplate for working with pointers and memory management.
- **time**: Adds boilerplate for working with time and the `std::time` module.
- **cont**: Adds boilerplate for working with containers like vectors and sets.

Each keyword triggers the insertion of appropriate imports and a basic main function template.

## Requirements

- **Visual Studio Code**: You need to have Visual Studio Code installed to use this extension.
- **Rust Development Setup**: It's recommended to have the Rust toolchain installed, including `cargo` and `rustc`, for full functionality.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions section by clicking on the Extensions icon in the sidebar.
3. Search for StartRust in the search box.
4. Click **Install**.

Alternatively, you can install it from the command line using the following command:

```bash
code --install-extension zyntrax.start-rust
