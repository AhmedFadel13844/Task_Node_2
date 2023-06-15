function getProducts(products){
 let categories = [];

 for (let i = 0; i < products.length; i++) {
   let category = [];
   category.push(products[i]['category']['name']);
   category.push(products[i]['category']['id']);
   categories.push(category);
 }
 
 let unique_categories = [...new Set(categories.map(JSON.stringify))].map(JSON.parse);
 let new_products = [];
 
 let cat_products = {"category": {}, "products": []};
 
 for (let i = 0; i < unique_categories.length; i++) {
   cat_products = {"category": {}, "products": []};
   for (let j = 0; j < products.length; j++) {
     if (products[j]['category']['name'] == unique_categories[i][0]) {
       cat_products['category']['name'] = unique_categories[i][0];
       cat_products['category']['id'] = unique_categories[i][1];
       cat_products['products'].push(products[j]);
     }
   }
   new_products.push(cat_products);
 }
 console.log(new_products);
 let fs = require("fs");

fs.writeFile('my_data.json', JSON.stringify(new_products), err => {
 if (err) {
   console.error(err);
   return;
 }
})

}

 async function logJSONData() {
 const response = await fetch("https://api.escuelajs.co/api/v1/products");
 let products =await response.json();
 getProducts(products);
 
}

logJSONData();

