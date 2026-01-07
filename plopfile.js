import { join, isAbsolute } from 'path';

/**
 * Plopfile: PiButton Generator for testing
 * Always generates PiButton.tsx (with name) in the specified location for contract tests
 * Usage:
 *   yarn plop pi-sdk:install --dest src/tmp/PiButton.tsx
 *   yarn plop pi-sdk:install --dest src/tmp
 */
export default function (plop) {
  plop.setGenerator('pi-sdk:install', {
    description: 'Generate PiButton.tsx (always named PiButton)',
    prompts: [],
    actions: function () {
      const destFlagIdx = process.argv.findIndex(arg => arg === '--dest');
      let outputPath = 'PiButton.tsx';
      if (destFlagIdx !== -1 && process.argv[destFlagIdx + 1]) {
        let arg = process.argv[destFlagIdx + 1];
        // Remove any trailing slash
        arg = arg.replace(/[/\\]$/, '');
        if (arg.endsWith('.tsx') || arg.endsWith('.ts')) {
          outputPath = isAbsolute(arg) ? arg : join(process.cwd(), arg);
        } else {
          outputPath = isAbsolute(arg)
            ? join(arg, 'PiButton.tsx')
            : join(process.cwd(), arg, 'PiButton.tsx');
        }
      } else {
        outputPath = join(process.cwd(), outputPath);
      }
      return [
        {
          type: 'add',
          path: outputPath,
          templateFile: 'plop-templates/PiButton.tsx.hbs',
          force: true,
          data: { componentName: 'PiButton' }
        }
      ];
    }
  });
}
