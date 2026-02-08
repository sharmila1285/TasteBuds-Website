

const imgs=document.querySelectorAll('.img a');
let imgId=1;

const imgDiv=document.querySelectorAll('.img');

imgs.forEach((img)=>{
  img.addEventListener('click',(e)=>{
    e.preventDefault();
    imgId=img.dataset.id;

    imgDiv.forEach((img)=>{
      img.classList.remove('active');
    });

    img.parentElement.classList.add('active');

    moveImage();
  });
});




function moveImage()
{
  const imgWidth=document.querySelector('.main-image img:first-child').clientWidth;
  let width=(imgId-1)*imgWidth;
document.querySelector('.main-image').style.transform=`translateX(${-width}px)`;

}

// Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

const minusBtn=document.querySelector('.minus');
const plusBtn=document.querySelector('.plus');
const qtyTxt=document.querySelector('#qty');

minusBtn.addEventListener('click',()=>{
    let qty= parseInt(qtyTxt.value);
    if(qty>0){
      qty--;
      qtyTxt.value=qty;
    }
});

plusBtn.addEventListener('click',()=>{
  let qty= parseInt(qtyTxt.value);
  if(qty>=0 && qty<5){
    qty++;
    qtyTxt.value=qty;
  }
});
