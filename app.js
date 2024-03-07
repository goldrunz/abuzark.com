const products = [
    {
     id: 1,
     tittle: "Nike Vapor Max",
    price: 249,
    colors: [{code: "red", img: "vapormaxred.png",},
    
    {code: "purple", img: "vapormax.png",},

    {code: "pink", img: "vapormaxpink.png",},
   ],
    
    },
    
    ];
    
    let choosenproduct = products[0];
    
    
    
    const currentproductcolors = document.querySelectorAll(".color");
    const currentproductimg = document.querySelector(".productimg");
    const currentProductSizes = document.querySelectorAll(".size");
    
    currentproductcolors.forEach((color, index)=>{color.computedStyleMap.backgroundcolor = choosenproduct.colors[index].code;})
    
    currentproductcolors.forEach((color, index)=>{color.addEventListener("click",()=>{
        currentproductimg.src = choosenproduct.colors[index].img
    })})

    const productButton = document.querySelector(".productbutton");
     const payment = document.querySelector(".payment");
     const close = document.querySelector(".close");

     productButton.addEventListener("click", () => {
        payment.style.display = "flex";
      });
      
      close.addEventListener("click", () => {
        payment.style.display = "none";
      });




      currentProductSizes.forEach((size, index) => {
        size.addEventListener("click", () => {
          currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "";
            size.style.color = "white";
          });
          size.style.backgroundColor = "#f74f10";
          size.style.color = "white";
        });
      });  


    
      