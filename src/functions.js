function addToCart(quantity,productName="Elma" ) {

    console.log("Sepete eklendi! : ürün : " + productName + " adet : " + quantity)
}

//addToCart("Elma")
addToCart(10)
//addToCart("Karpuz")


let sayHello =()=>{
    console.log("Hello World")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
    
}

sayHello2()

function addToCart2 (productName, quantity ,unitPrice ) {

    console.log( "Sepete eklendi! "+ "ürün adı "+ productName + " adet: " + quantity +
    " fiyatı " + unitPrice)

}

addToCart2("Elma", 2 , 5)
addToCart2("Armut", 3, 5)
addToCart2("Limon" ,3 , 15)

let product1 = {productName:"Elma ", unitPrice:10 , quantity:5}

function addToCart3(product) {
    console.log("Ürün: "+ product.productName )
    console.log("Fiyat: " + product.unitPrice)
    console.log("Adet: " + product.quantity)
}

addToCart3(product1)

let product2 = {productName:"Elma" , unitPrice:10 , quantity:5}
let product3 = {productName:"Elma" , unitPrice:10 , quantity:5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let number1 = 10
let number2 = 20
number1 = number2
number2 = 100
console.log (number1)

function addToCart4(x) {

    console.log(products)
    
}

let products = [ 
    {productName:"Elma" , unitPrice:10 , quantity:5},
    {productName:"Armut" , unitPrice:10 , quantity:5},
    {productName:"Karpuz" , unitPrice:10 , quantity:5}
]

addToCart4(products)

function add (bisey,...numbers) { //rest tersi de yapılabilir bisey , ...numbers
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        
    //console.log(numbers[i])
    total+=numbers[i]
    }
    console.log(total)
    console.log(bisey)
}
add(20,30)
add(20,40,3)

add(20,30,40,50)

let numbers =[30,10,500,600,120]
console.log(Math.max(...numbers))


console.log(Math.max(30,10,500,600,120))

let [icAnadolu,Marmara,Karadeniz,[İcanadolusehirleri]] = [
    {name: "İç anadolu" , population:"20M"},
    {name: "Marmara" ,  population:"30M"},
    {name: "Karadeniz" , population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
      
]

//console.log(icAnadolu)
//console.log(Marmara)
//console.log(Karadeniz)
//console.log(İcanadolusehirleri) //console.log(İcanadolusehirleri[0])

let newproductName, newunitPrice, newquantity
({productName:newproductName , unitPrice:newunitPrice ,quantity:newquantity }
= {productName:"Elma", unitPrice:10 , quantity:5})

console.log(newproductName,newunitPrice,newquantity)

login({title})
{
    console.log("<h1>" +title+ "</h1>")
}




