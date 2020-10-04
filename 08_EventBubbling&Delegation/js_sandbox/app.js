// EVENT BUBBLING
// event bubbling is the bulbbing up of events through the DOM
// when event happens on a element , it will bubble up thru its parents


// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION
// opposite of event bubbling - add a event lsitener on a parent element and use logic inside event handler to target the element that we actually want that click for



// Normal method
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);
// However, its limiation is that it only adds it to the first deleteItem element. so the other elements dont get the event listener added on to them.
// this is whr event delegation comes in

// document.body.addEventListener('click', deleteItem);

// add event listener to parent element
document.body.addEventListener('click',deleteItem);






function deleteItem(e){

    // console.log(e.target);

    // if (e.target.parentElement.className === "delete-item secondary-content"){
    //   console.log('delete Item'); 
    // } 
    // use a conditional to target the element we want . 
    // NOTE : .className needs to match with the entire list of classes the elemetnt has in order to match with the target element. so instead of listing delete-item only, need to include secondary-content as well. Hence if the element that we want has anythn other than these 2 elements, its hard to target it. 


  // preferred method of event delegation.
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove(); // to remove the entire li element.

  }
}