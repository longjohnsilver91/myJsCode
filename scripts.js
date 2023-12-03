// first programm, it is not perfect operations, tbh, but it works

function solution(str){
  const len = str.length;
  let x = len % 2;

  if (x = 1) {
    str = str + '_'

  };

  let y = len / 2;

  const bigArray = str.split('');

  o = 0

  for (let i = 0; i < y; i++){
    temp = bigArray.slice(o,2+o);
    temp = temp.toString();
    temp = temp.replace(',','');
    bigArray.push(temp);
    o = o + 2;
    
  }

  biggestArray = bigArray.slice(len+1);

  return biggestArray;
};

solution('asert')


// Programm which checks for prime numbers


function isPrime(num) {
  if (num <= 1){
    return false;
  } else {
    let i = 2;
    while (i<num){
      result = num % i;
      i++;
      if (result == 0){
        return false;
        break;
      }
    }
    return true;
  }
}




// This programm counts 'walking', each direaction walk counts as a 1 minute, your walk has to be 10 minutes, and 
// you also need to return to your starting position

function isValidWalk(walk) {
  const coordinates = [0,0];
  if (walk.length != 10){
    return false
  }
  for (let i in walk){
    if (walk[i] == 'n'){
      coordinates[0] += 1;
    }
    if (walk[i] == 's'){
      coordinates[0] -= 1;
    }
    if (walk[i] == 'w'){
      coordinates[1] += 1;
    }
    if (walk[i] == 'e'){
      coordinates[1] -= 1;
    }
  }
  if (coordinates[0] == 0 && coordinates[1] == 0){
    return true
  } else {
    return false
  }
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])




// This programm deletes extra numbers in an array, which occurences are above a given number
// I used lastIndexOf, most of time it took me to find out to turn into a Number key of counter


function deleteNth(arr,n){

  const counter = {};
  const resultarr = [];

  arr.forEach(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
    } else {
        counter[ele] = 1;
    }
});

  for (let i of Object.keys(counter)){
    console.log(counter[i]);
    if (counter[i] > n){
      let h = counter[i];
      while(h > n){
      let toDelete = arr.lastIndexOf(Number(i));
      arr.splice(toDelete,1);
      --h;  
      }
      
    }
  }
  return arr

}

deleteNth([1,1,3,3,7,2,2,2,2], 3)
deleteNth([20,37,20,21], 1)



// This programm builds Tower with several specific instructions

function towerBuilder(nFloors) {

  let i = nFloors;
  const finalArray = [];
  if (nFloors == 1){
    finalArray.push('*');
    return finalArray
  }
  let moreThanOne = '**';
  let empty = ' ';
  h = 0;
  while (i > 0) {
    if (i == 1){
      finalArray.push(empty.repeat(h) + '*' + empty.repeat(h))
    } else {
      finalArray.push(empty.repeat(h) + '***' + moreThanOne.repeat(i-2) + empty.repeat(h))
    }
    --i;
    h++;
  }
  finalArray.reverse();
  return finalArray
}

towerBuilder(3)




// This programm breaks camelcase strings

function solution(string) {

  for (let x of string) {

    if (x == x.toUpperCase()){
      string = string.replaceAll(x,' ' + x)
    }

  }

  string = string.replace(/\s+/g,' ').trim();

  console.log(string)
    
}

solution('differentLookBadLife')



// This programm makes hashtags with capitalized first character of separated words and joins them

function generateHashtag (str) {

  str = str.trim();

  if (str == '' || str == ' '){
    return false
  }

  const strlist = str.split(' ');


for (var i = 0; i < strlist.length; i++) {
    strlist[i] = strlist[i].charAt(0).toUpperCase() + strlist[i].slice(1);

}

strlist.unshift('#')

let result = strlist.join('');

if (result.length > 140){
  return false
} else {
  return result
}

  

}


generateHashtag("a".repeat(139))