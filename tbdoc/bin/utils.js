import {unified} from 'unified'
import {read} from 'to-vfile'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import { codeImport } from 'remark-code-import'
import fs from 'fs'
import path from 'path'
import glob from 'glob'

/**
 * Synchronously copy files, creating directories if they do not exist.
 * @param {string} filepath
 * @param {string} content
 */
 function copyFileSyncRecursive(src, dest) {
  fs.mkdirSync(path.dirname(dest), {recursive: true})
  fs.copyFileSync(src, dest)
}

/**
 * Find all images sub-directories.
 * @param {string} input_dir
 * @returns {string[]}
 */
 function findImages(dir) {
  return glob.sync(dir + '/**/images/*')
}

/**
 * Find all documentation Markdown (.md) files in a directory.
 * @param {string} input_dir
 * @returns {string[]}
 */
function findMarkdownDocs(dir) {
  return glob.sync(dir + '/**/*.md')
}

/**
 * Reads in from a filepath and creates a vfile.
 * @param {string} filename
 * @returns {Promise<VFile>}
 */
async function readFile(filepath) {
  return await read(filepath, 'utf8')
}

/**
 * Transforms Markdown VFile using specified plugins.
 * @param {VFile} doc
 * @returns {Promise<VFile>}
 */
function transform(doc) {
  return unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(codeImport)
  .use(remarkStringify)
  .process(doc)
}

/**
 * Synchronously writes content to file, creating directories if they do not exist.
 * @param {string} filepath 
 * @param {string} content 
 */
function writeFileSyncRecursive(filepath, content) {
  fs.mkdirSync(path.dirname(filepath), {recursive: true})
  fs.writeFileSync(filepath, content, 'utf-8')
}

export default { copyFileSyncRecursive, findImages, findMarkdownDocs, readFile, transform, writeFileSyncRecursive }