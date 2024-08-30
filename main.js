
let message = 
`
Welcome
Have Money Card ?
1-Yes
2-No
`;

//335
const products = [
    {
        productName : "Milk",
        price : 15
    },
    {
        productName : "Pasta",
        price: 100
    },
    {
        productName : "Chichen",
        price : 220
    }
]


//true or false
let result = confirm(message);
let payment;
let priceOfProducts;


if(result){
    //There is money card.
    let name = prompt("Enter Your Name :");
    let surname = prompt("Enter Your Surname :");

    const customer = new Customer(name,surname,result,products);
    
     payment = customer.Calculate();
     priceOfProducts = customer.totalPrice();

    alert(
        `Customer Info : ${customer.getName()} ${customer.getSurname()}
         Total Price : ${priceOfProducts}
         Payment : ${payment}

        `);


}else{
    const customer = new Customer(null,null,result,products);
    payment = customer.Calculate();
    alert(`Payment : ${payment}`)
}