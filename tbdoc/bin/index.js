#! /usr/bin/env node
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { findMarkdownDocs, readFile, transform, writeFileSyncRecursive } from './utils.js'

yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command('build [input_dir] [output_dir]', 'transform Markdown files', (yargs) => {
      yargs
        .positional('input_dir', {
          describe: 'directory containing source docs',
          default: 'topics',
        })
        .positional('output_dir', {
          describe: 'output directory for transformed docs',
          default: 'build',
        });
    },
    async (argv) => {
      if (argv.verbose) console.info(`Searching ${argv.input_dir} for Markdown files...\n`)

      const docFiles = findMarkdownDocs(argv.input_dir)
      const docCount = docFiles.length
      
      for(const filepath of docFiles) {
        const inputMarkdown = await readFile(filepath)
        if (argv.verbose) console.info(`Transforming ${filepath}...`)
        const outputMarkdown = await transform(inputMarkdown)
        const outputPath = filepath.replace(argv.input_dir, argv.output_dir);
        writeFileSyncRecursive(outputPath, String(outputMarkdown))
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
