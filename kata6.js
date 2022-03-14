const whereCanIPark = function (spots, vehicle) {
  let empty = [];
  for(let i = 0; i < spots.length; i++){
    for(let j = 0; j < spots[i].length; j++){
      if(spots[i][j].toUpperCase() == spots[i][j] ){
        empty.push([j,i]);
      }
    }
  }
  let availableMotorcycle = [...empty];
  let availableSmall = [];
  let availableRegular = [];
  for (let i =0; i < empty.length; i++){
    if(spots[empty[i][1]][empty[i][0]] == "R"){
      availableRegular.push(empty[i]);
      availableSmall.push(empty[i]);
    }else
    if(spots[empty[i][1]][empty[i][0]] == "S"){
      availableSmall.push(empty[i]);   
    }
  };
  switch(vehicle){
    case "regular":
      return availableRegular;
      break;
    case "small":
      return availableSmall;
      break;
    case "motorcycle":
      return availableMotorcycle;
      break;
  }
  
}


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))