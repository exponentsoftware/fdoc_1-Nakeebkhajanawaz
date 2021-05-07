const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleantext(sentence){
    return sentence.replace(/[^a-zA-Z ]/g, "");
    //sentence.clean(' ', extra_spaces=True, lowercase=True, numbers=True, punct=True)
}
console.log(cleantext(sentence));