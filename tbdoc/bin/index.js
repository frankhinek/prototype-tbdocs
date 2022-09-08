#! /usr/bin/env node
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import utils from './utils.js'

yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command('build [input_dir] [output_dir]', 'transform Markdown files', (yargs) => {
      yargs
        .positional('input_dir', {
          describe: 'directory containing source docs',
          default: 'docs',
        })
        .positional('output_dir', {
          describe: 'output directory for transformed docs',
          default: 'build',
        });
    },
    async (argv) => {
      if (argv.verbose) console.info(`Searching ${argv.input_dir} for Markdown files...\n`)
      
      // Parse, transform, and serialize Markdown docs to the output directory.
      const docFiles = utils.findMarkdownDocs(argv.input_dir)
      const docCount = docFiles.length
      for(let filepath of docFiles) {
        let inputMarkdown = await utils.readFile(filepath)
        let outputMarkdown = await utils.transform(inputMarkdown)
        let outputPath = filepath.replace(argv.input_dir, argv.output_dir);
        utils.writeFileSyncRecursive(outputPath, String(outputMarkdown))
        if (argv.verbose) console.info(`Transformed ${filepath}`)
      }
      
      // Copy image files to the output directory.
      const imageFiles = utils.findImages(argv.input_dir)
      for(let srcPath of imageFiles) {
        let destPath = srcPath.replace(argv.input_dir, argv.output_dir);
        utils.copyFileSyncRecursive(srcPath, destPath)
        if (argv.verbose) console.info(`Copied ${srcPath}`)
      }

      console.info(`\nCompleted building ${docCount} documents.`)
    }
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
  })
  .parse();
