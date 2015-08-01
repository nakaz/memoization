module.exports = {
  memoId: memoId(),
  memoQuery: memoQuery()
};

function memoId(id) {
  var cache = [];
  return function (id) {
    if (id in cache){
      console.log('id exists');
      return cache[id];
    }else{
      console.log('does not exist... adding to cache');
      return cache[id] = document.getElementById(id).id;
    }
  };
}

function memoQuery(){
  var cache = {};
  return function (el){
    if (el in cache){
      console.log('class exists');
      return cache[el];
    }else{
      console.log('does not exist... adding to cache');
      return cache[el] = document.querySelector(el).className;
    }
  };
}