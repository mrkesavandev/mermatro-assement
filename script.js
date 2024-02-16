const mainImage = document.getElementById("mainImage");

const apiUrl = "https://products-api-2ttf.onrender.com/api/products"

async function btn(){
   const response = await fetch(apiUrl)
   const data = await response.json()
   console.log(data);
   showData(data)  

}








