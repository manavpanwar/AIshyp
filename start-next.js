const {spawn} = require('child_process'); const p = spawn('node', ['node_modules/next/dist/bin/next', 'start', '-p', '7878'], {stdio: 'inherit'}); p.on('exit', process.exit);
