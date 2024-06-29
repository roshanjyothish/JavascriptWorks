var products=[

    {id:1,title:"samasungs23ultra",price:130000,brand:"samsung"},
    {id:2,title:"m32",price:35000,brand:"samsung"},
    {id:3,title:"opporeno",price:27000,brand:"oppo"},
    {id:4,title:"mi21note",price:23000,brand:"mi"},
    {id:5,title:"moto edge 40",price:230000,brand:"moto"},
    {id:6,title:"moto ede40 neo",price:250000,brand:"moto"},
    {id:7,title:"iphone13",price:140000,brand:"apple"},
    {id:8,title:"iphone13pro",price:150000,brand:"apple"},
  
]


var mobilePriceFilter=products.filter(p=> p.price < 35000).map(p=> p.title)
// console.log(mobilePriceFilter);

// print all samsung mobiles available under 50k 
var samsungMobileFilter=products.filter(p=>p.brand == "samsung" && p.price < 50000).map(p=> p.title)
// console.log(samsungMobileFilter);

// print all costly products
var costlyProduct=products.reduce((p1,p2)=> p1.price > p2.price ? p1 : p2 )
// console.log(costlyProduct);

// sort products wrt price order by descending order
products.sort((p1,p2)=>p2.price-p1.price)
console.log(products);