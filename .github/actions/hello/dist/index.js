/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = required('@actions/core');
//const github = required('@actions/github');

try{
    const name = core.getInput('who-to-greet')
    console.log(`Hello ${name}`);
    
    const time = new Date();
    core.setOutput("time", time.toTimeString());
} catch (error){
    core.setFailed(error.message);
}


//console.log(JSON.stringify(github, null, '\t'));
module.exports = __webpack_exports__;
/******/ })()
;