// increase the case
document.getElementById("casePlus").addEventListener("click",function(){
  let increaseItem = updateCaseNumber("caseNumber",true,59,"casePrice")
});

document.getElementById("caseMinus").addEventListener("click",function(){
  let decreseItem = updateCaseNumber("caseNumber",false,59,"casePrice")
});

document.getElementById("productPlus").addEventListener("click",function(){
  let updatePhonePrice = updateCaseNumber("productUpdate",true,1219,"productPrice")
})

document.getElementById("productMinus").addEventListener("click",function(){
  let updatePhonePrice = updateCaseNumber("productUpdate",false,1219,"productPrice")
})

function subTotal(intputId1,inputId2,targetId,taxId,grandTotal){
  let product1 = document.getElementById(intputId1).innerText;
  let product2 = document.getElementById(inputId2).innerText;
  let target   = document.getElementById(targetId);
  let taxTotal = document.getElementById(taxId);
  let finalTotal = document.getElementById(grandTotal);

  // calculate total product price + case price
  let totalSum = parseInt(product1) + parseInt(product2);
  target.innerText = totalSum;
  // calculate totalprice + tax price
  let tax = parseInt(totalSum * 0.1)
  taxTotal.innerText = tax
  // calculate grandTotal price
  finalTotal.innerText = totalSum + tax;
  console.log(tax)
  return totalSum;
}

function updateCaseNumber(inputId,isAdd,productPrice,targetId){
  let input = document.getElementById(inputId);
  let productTarget = document.getElementById(targetId);
  let inputValue = input.value;
  let price = productPrice;

  if (isAdd==true){
    input.value = parseInt(inputValue) + 1;
    price = price * input.value
    productTarget.innerText = price
    // return productTarget.innerText
    subTotal("casePrice","productPrice","subTotal","taxTotal","grandTotal")
    // console.log(price)
  }
  else if (inputValue > 0){
    let decreseItem = input.value = parseInt(inputValue) - 1
    price = price * input.value
    productTarget.innerText = price
    // return productTarget.innerText
    subTotal("casePrice","productPrice","subTotal","taxTotal","grandTotal")
  }
  
}
