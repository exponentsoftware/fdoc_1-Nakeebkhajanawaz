const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function wordcounts(paragraph,love,you) {
    var count1 = paragraph.search("love");
    var count2 = paragraph.search("you");
    if(count1>count2){
        return "The word "+love+" more frequently occurred than "+you;
    }
    else if(count1<count2){
        return "The word "+you+" more frequently occurred than "+love;
    }
    else{
        return "both occured equally";
    }


    //return paragraph.split(' ').length
}
console.log(wordcounts(paragraph,'love','you' ))
