var args, basedir, config, msg, path, runcmd;

path = require('path');

runcmd = require('run-command');

basedir = path.join(process.env.PWD);

config = require(path.join(basedir, 'doris.json'));

runcmd.set('info', false);

msg = "Hello, this is doris";

args = process.argv.slice(2);

args.map(function(arg, i) {
  return config.tasks[arg].map(function(cmd, i) {
    cmd = cmd.split(' ');
    return runcmd.run.apply(this, [cmd[0], cmd.slice(1)]);
  });
});

return console.log(msg);

module.exports = {};
