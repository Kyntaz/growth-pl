# 🌱 Growth

A programing language for gardeners.

## 🔧 Setup

This project is structured as an npm package.
In order to set it up start by cloning this repository.

```bash
git clone https://github.com/Kyntaz/growth-pl.git
```

Move to the project's root and install its dependencies.

```bash
npm install
```

## ▶️ Running the Growth Interpreter

The main product of this project is an interpreter for the Growth language.
In order to run the interpreter, run the following npm script:

```bash
npm run compile <input>.grow
```

This will execute the Growth program described by the input file.

## 🧪 Testing the Growth Interpreter

Tests are found in the `src/*/**/tests` folders, close to the code they are testing.
We use the jest framework for the tests.
You can run all tests through an npm script.

```bash
npm run test
```

## 🔨 Building the Growth Interpreter

Building the interpreter requires a single npm script.

```bash
npm run build
```

This will result in the interpreter artifact being produced and placed inside the `build` folder.
The artifact contains an executable -- `growth.exe` -- which can be called with the following command:

```bash
growth <input>.grow
```

This will execute the Growth program described in the input file.

## 📜 More Documentation

* [Growth language specification](docs/Language.md)

## ℹ️ License

Still pondering it...
For now I (Pedro Quintas, the author) hold all rights to this, but I probably won't bother you if you fork this and make something from it.
