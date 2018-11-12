// console.log('JS is loaded');

$(document).ready(nowReady);

function nowReady(){
  console.log('jquery is now loaded');

  // append a <div> element when you click the button
  $('#generateBtn').on('click', clickBtn);
  $('#box').on('click', '#btnOne', swap);
}

let count = 0;

// function adds box and display whats in the div box
function clickBtn() {
  console.log('btn is clicked');

  let divBox = '<div id="childBox"><p></p><button id="btnOne">Swap</button> <button class="btnTwo">Delete</button></div>';
  
  // append to ID box
  $('#box').append(divBox);
  count ++;
  
  console.log(count);
  $('p').append(count);
}

// when swap is clicked the background-color turns yellow
function swap() {
  console.log('swap has been clicked');

  $('#box').css('background-color', 'yellow');
}