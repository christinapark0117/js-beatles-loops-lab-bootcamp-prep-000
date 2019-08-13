function theBeatlesPlay(musicians, instruments) {
  var music = [] 
  for (let i = 0; i < musicians.length; i++) {
    music.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return music
}

function johnLennonFacts(facts) {
  var i = 0
  var john = []
  while (i < facts.length) {
    john.push(`${facts[i]}!!!`);
    i++;
  }
  return john
}

function iLoveTheBeatles(number){
  var love = []
  var i = 0
  do { 
    i = i + 1
  love.push("I love the Beatles!");
  } while (i < 15)
  return love
}