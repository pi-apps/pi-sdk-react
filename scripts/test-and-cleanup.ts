import { execSync } from 'child_process';
import { existsSync, unlinkSync } from 'fs';

let failed = false;
try {
  execSync('jest', { stdio: 'inherit' });
} catch (err) {
  failed = true;
}

if (failed && existsSync('./PiButton.jsx')) {
  unlinkSync('./PiButton.jsx');
  console.log('Cleaned up PiButton.jsx after failed test.');
}

process.exit(failed ? 1 : 0);
