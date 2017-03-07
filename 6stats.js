function capitalise(string){
//return a string which is the concatination of caps string[0]and string[1:]
thing=string.charAt(0).toUpperCase() +string.slice(1);
return thing;
}

function titlecaps(manyWords){
  manyWords=capitalise(manyWords);
  x=0;
  while (x!=-1){
    x=manyWords.indexOf(" ", x+1);
    manyWords=manyWords.slice(0,x+1)+manyWords.charAt(x+1).toUpperCase()+manyWords.slice(x+2);
  }
  return manyWords;
}
function sentencecaps(sentences){
  var newsentences="";
var splitsentences=sentences.split('. ');

for (var i = 0; i < splitsentences.length; i++) {
  if (i!=splitsentences.length-1){
newsentences=newsentences+capitalise(splitsentences[i])+". ";
}
else{
  newsentences=newsentences+capitalise(splitsentences[i]);


}
}
  return newsentences;
}
