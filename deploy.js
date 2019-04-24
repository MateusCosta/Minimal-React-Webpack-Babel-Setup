var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "gnar@mateuscosta.dev",                   // NOTE that this was username in 1.x 
    password: "gnarapp",           // optional, prompted if none given
    host: "ftp.mateuscosta.dev",
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '',
    // include: ['*', '**/*'],      // this would upload everything except dot files
    include: ['*'],
    // exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
    deleteRemote: true,              // delete ALL existing files at destination before uploading, if true
    forcePasv: true                 // Passive mode is forced (EPSV command is not sent)
}
 
// // use with promises
// ftpDeploy.deploy(config)
//     .then(res => console.log('finished:', res))
//     .catch(err => console.log(err))
    
// use with callback
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});