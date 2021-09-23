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