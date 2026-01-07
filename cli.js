#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Plop, run } from 'plop';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Plop.prepare({
  // Always resolves to the plopfile in this package directory
  configPath: path.join(__dirname, 'plopfile.js'),
  import: []
}, env => Plop.execute(env, run));
