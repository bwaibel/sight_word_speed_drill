var _ = require('underscore');
var addition = _.range(1,13).map(function(a){
  return _.uniq(_.range(1,13).map(function(b){
    return [b + "+" + a];
  }));
});

var subtraction = _.range(1,13).map(function(a){
  return _.uniq(_.range(12).map(function(b){
    return [(b+a) + "-" + a];
  }));
});

// in speed order derived from http://www.theguardian.com/news/datablog/2013/may/31/times-tables-hardest-easiest-children
var multiplication = [
  ["1x1","1x5","5x1","1x4","9x1","6x1","1x8","8x1","1x9","4x1","7x1","10x8"],
  ["3x1","1x7","1x3","8x10","1x6","2x1","5x10","10x4","6x10","1x2","2x2","10x1"],
  ["10x5","7x10","10x9","10x7","4x10","2x10","1x10","10x3","3x3","10x6","3x10","9x10"],
  ["11x1","10x2","11x5","1x11","2x4","10x10","11x7","2x3","3x2","12x1","11x6","4x2"],
  ["2x5","5x2","11x8","1x12","5x5","11x2","6x11","9x11","2x11","2x7","3x5","8x11"],
  ["2x6","11x4","4x11","6x2","7x2","5x11","11x9","3x11","11x3","2x9","5x3","4x5"],
  ["2x8","5x4","7x11","9x2","8x2","4x4","10x12","3x4","4x3","2x12","6x5","9x9"],
  ["5x9","6x6","11x10","12x2","5x6","7x7","8x5","5x7","3x7","12x10","5x8","9x5"],
  ["10x11","7x3","11x11","7x5","3x6","8x8","6x3","4x7","8x3","12x12","3x9","7x6"],
  ["4x9","6x7","5x12","8x7","9x3","6x4","9x7","7x4","12x5","3x12","9x6","6x9"],
  ["7x8","4x6","3x8","7x9","12x3","9x4","8x9","4x12","9x8","12x11","12x4","8x6"],
  ["11x12","4x8","8x4","9x12","6x12","6x8","12x6","7x12","8x12","12x7","12x8","12x9"]
];

var words = [
  ["a","and","away","big","blue","can","come","down","find","for"],
  ["funny","go","help","here","I","in","is","it","jump","little"],
  ["look","make","me","my","not","one","play","red","run","said"],
  ["see","the","three","to","two","up","we","where","yellow","you"],
  ["all","am","are","at","ate","be","black","brown","but","came"],
  ["did","do","eat","four","get","good","have","he","into","like"],
  ["must","new","no","now","on","our","out","please","pretty","ran"],
  ["ride","saw","say","she","so","soon","that","there","they","this"],
  ["too","under","want","was","well","went","what","white","who","will"],
  ["with","yes","after","again","an","any","as","ask","by","could"],
  ["every","fly","from","give","giving","had","has","her","him","his"],
  ["how","just","know","let","live","may","of","old","once","open"],
  ["over","put","round","some","stop","take","thank","them","then","think"],
  ["walk","were","when","always","around","because","been","before","best","both"],
  ["buy","call","cold","does","don't","fast","first","five","found","gave"],
  ["goes","green","its","made","many","off","or","pull","read","right"],
  ["sing","sit","sleep","tell","their","these","those","upon","us","use"],
  ["very","wash","which","why","wish","work","would","write","your","about"],
  ["better","bring","carry","clean","cut","done","draw","drink","eight","fall"],
  ["far","full","got","grow","hold","hot","hurt","if","keep","kind"],
  ["laugh","light","long","much","myself","never","only","own","pick","seven"],
  ["shall","show","six","small","start","ten","today","together","try","warm"],
  ["apple","baby","back","ball","bear","bed","bell","bird","birthday","boat"],
  ["box","boy","bread","brother","cake","car","cat","chair","chicken","children"],
  ["Christmas","coat","corn","cow","day","dog","doll","door","duck","egg"],
  ["eye","farm","farmer","father","feet","fire","fish","floor","flower","game"],
  ["garden","girl","good-bye","grass","ground","hand","head","hill","home","horse"],
  ["house","kitty","leg","letter","man","men","milk","money","morning","mother"],
  ["name","nest","night","paper","party","picture","pig","rabbit","rain","ring"],
  ["robin","Santa Claus","school","seed","sheep","shoe","sister","snow","song","squirrel"],
  ["stick","street","sun","table","thing","time","top","toy","tree","watch"],
  ["water","way","wind","window","wood","water","way","wind","window","wood"]
]

module.exports = addition;
