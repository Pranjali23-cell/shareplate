const api = "http://localhost:5000/food";

if(document.getElementById("foodForm")){
document.getElementById("foodForm").addEventListener("submit", async(e)=>{
e.preventDefault();

const food = {
name: foodName.value,
quantity: quantity.value,
location: location.value
};

await fetch(api,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(food)
});

alert("Food Donated!");
});
}

if(document.getElementById("foodList")){
fetch(api)
.then(res=>res.json())
.then(data=>{
let output="";
data.forEach(f=>{
output += `
<div class="food-card">
<h3>${f.name}</h3>
<p>Quantity: ${f.quantity}</p>
<p>Location: ${f.location}</p>
</div>`;
});
foodList.innerHTML=output;
});
}
