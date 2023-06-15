function getProducts(products){
 let categories = [];
 for (let i = 0; i < products.length; i++) {
 categories.push(products[i]['category']['name']);
}

let unique_categories = [...new Set(categories)];
let new_products = [];


for (let i = 0; i < unique_categories.length; i++) {
 let cat_products = {"category": {}, "products": []};
 for (let j = 0; j < products.length; j++) {
   if (products[j]['category']['name'] == unique_categories[i]) {
     cat_products['category'] = unique_categories[i];
     cat_products['products'].push(products[j]);
   }
 }
 new_products.push(cat_products);
}
console.log(new_products);
}

 async function logJSONData() {
 const response = await fetch("https://api.escuelajs.co/api/v1/products");
 let products =await response.json();
 getProducts(products);
 
}

logJSONData();