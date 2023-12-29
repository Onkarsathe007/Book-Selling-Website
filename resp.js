//for navbar in phone
burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('hnav-resp');
   
})


//for the add to cart 

function add_to_cart(pid,pname,price)
{
  let cart= localStorage.getItem("cart");
  if(cart==null)
  {
     //no card is present
     let products=[];
     let product={productId:pid,productName:pname,productQuantity:1,productPrice:price}
     products.push(product);
     localStorage.setItem("cart",JSON.stringify(products));
  }
  else
  {
     //cart is alredy present 
  }
    
}






    
