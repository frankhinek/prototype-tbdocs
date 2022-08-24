# TBD Docs Prototyping

Prototyping utilities for a proposed docs-as-code approach to authoring, reviewing, and publishing
technical documentation on [develop.tbd.website](https://developer.tbd.website).

## tbdoc Markdown Processor Utility

To minimize dependencies, the `tbdoc` Node.js CLI package can be used through an executable Docker
image.

To build the image:

```sh
docker build -t tbdoc:1.0.0 tbdoc
```

To process all Markdown (.md) files in your local `topics` directory and output the transformed
Markdown and associated images to your local `build` directory:

```sh
docker run --rm -v "$PWD/topics":/app/topics -v "$PWD/build":/app/build tbdoc:1.0.0
```

Another example to demonstrate changing the source files directory to `input` and the
directory to store transformed documents to `output`:

```sh
docker run --rm -v "$PWD/input":/app/topics -v "$PWD/output":/app/build tbdoc:1.0.0
```