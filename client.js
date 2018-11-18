// console.log('JS is loaded');

$(document).ready(nowReady);

function nowReady(){
  console.log('jquery is now loaded');

  // append a <div> element when you click the button
  $('#generateBtn').on('click', clickBtn);
}

let count = 1;

// function adds box and display whats in the div box
function clickBtn() {
  console.log('btn is clicked');
  // creating mutliple child box so it must be class 
  let divBox = `<div class="childBox"><p>${count}</p>
                <button class="btn">Swap</button> 
                <button class="btnDelete">Delete</button>
                </div>`;
  
  // append to ID box
  $('#box').append(divBox);
  count ++;
  console.log(count);

  // click available only the childbox is generated in DOM.\
  $('#box').on('click', '.btn', swap);
  $('#box').on('click', '.btnDelete', deleteBtn);
 
}

// when swap is clicked the background-color turns yellow
function swap() {
  console.log('swap has been clicked');
  $(this).parent().toggleClass('yellow');

}

// delete the child box
function deleteBtn(){
  console.log('delete has been clicked.');
  $(this).parent().empty();
}