Array.prototype.mergeSort = function (comparator) {
  if (this.length < 2){
    return this;
  }

  if (typeof comparator !== "function"){
    comparator = function(x,y){
      if (x === y){
        return 0;
      } else if (x < y){
        return -1;
      } else if (x > y){
        return 1;
      }
    }
  }

  var mid = Math.floor(this.length / 2);
  var left = this.slice(0,mid).mergeSort(comparator);
  var right = this.slice(mid).mergeSort(comparator);
  return merge(left, right, comparator);
};

function merge(left,right,comparator){
  var results = [];

  while(left.length > 0 && right.length > 0){
    if (comparator(left[0], right[0]) === -1){
      results.push(left.shift());
    } else if (comparator(left[0], right[0]) === 0){
      results.push(left.shift());
    } else if (comparator(left[0], right[0]) === 1){
      results.push(right.shift())
    }
  }

  return results.concat(left,right)
}

console.log([8,7,6,5,4,3,2,3,4,5,6,7,65,54,3].mergeSort(function(x,y){
  if (x === y){
    return 0;
  } else if (x < y){
    return 1;
  } else if (x > y){
    return -1;
  }
}))
