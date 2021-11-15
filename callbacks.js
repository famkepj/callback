function MakeHomework(course, callback){
    console.log ("Okay, ok, im going to do my ${course} homework now");
    setTimeout(() => {
       callback();
    }, 5000);
}

function doneWithHomework(){
    console.log ("Look, Mom/Dad, I'm done with my homework!");
}

MakeHomework("math",doneWithHomework);