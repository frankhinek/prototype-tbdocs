# TBD Docs Prototyping

Prototyping utilities for a proposed docs-as-code approach to authoring, reviewing, and publishing
technical documentation on [develop.tbd.website](https://developer.tbd.website).

_Note_: The Live Preview and Markdown Process utilities can be combined into a single command line utility with
significantly less verbose commands.  For the MVP, these will be accessed separately to accelerate progress and simplify
iterating towards an improved user experience.

## tbdoc Live Preview

As contributors are authoring or updating documentation it is helpful to see how the content will appear when published
on the [TBD Developer Site](https://tbd.developer.website).  A Live Preview utility has been provided, packaged as a
Docker image, to enable contributors to experience how published content will appear in real time as Markdown files
are edited.

To build the image:

```sh
docker build -t tbdoc-preview:1.0.0 tbdoc-preview
```

To live preview changes to the pre-processed Markdown (.md) files (without inline command/code examples):

```sh
docker run --rm --init -it -p 3000:3000 -v "$PWD/docs":/home/node/app/docs tbdoc-preview:1.0.0
```

To live preview changes to the post-processed Markdown (.md) files AFTER running the Markdown Process utility:

```sh
docker run --rm --init -it -p 3000:3000 -v "$PWD/build":/home/node/app/docs tbdoc-preview:1.0.0
```

## tbdoc Markdown Processor Utility

This utility takes as input a local directory structure containing markdown formatted text files, image files,
and command/code examples and outputs processed markdown content ready for contribution to the
[TBD Developer Site](https://developer.tbd.website).

To minimize dependencies, the `tbdoc` Node.js CLI package can be used through an executable Docker
image.

To build the image:

```sh
docker build -t tbdoc:1.0.0 tbdoc
```

To process all Markdown (.md) files in your local `docs` directory and output the transformed
Markdown and associated images to your local `build` directory:

```sh
docker run --rm -v "$PWD/docs":/home/node/app/docs -v "$PWD/build":/home/node/app/build tbdoc:1.0.0
```

Another example to demonstrate changing the source files directory to `input` and the
directory to store transformed documents to `output`:

```sh
docker run --rm -v "$PWD/input":/home/node/app/docs -v "$PWD/output":/app/build tbdoc:1.0.0
```