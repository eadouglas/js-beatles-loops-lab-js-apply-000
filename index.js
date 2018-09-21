// add solution here
function theBeatlesPlay(musicians, instruments){
  var array1 = []
    for (var i = 0; i < 4; i++) {
    array1.push(musicians[i] + " plays " + instruments[i])
    }
  return array1
}

function johnLennonFacts(facts) {
  var factString = [];
  var index = 0;
  while (facts.length > factString.length) {
    factString.push(facts[index++] + "!!!")
  }
  return factString
}