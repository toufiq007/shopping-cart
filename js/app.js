// increase the case
document.getElementById("casePlus").addEventListener("click",function(){
  let increaseItem = updateCaseNumber("caseNumber",true,59,"casePrice")
  let total = subTotal("casePrice","productPrice","subTotal")
  console.log(total)
});

document.getElementById("caseMinus").addEventListener("click",function(){
  let decreseItem = updateCaseNumber("caseNumber",false,59,"casePrice")
  let total = subTotal("casePrice","productPrice","subTotal")
});

document.getElementById("productPlus").addEventListener("click",function(){
  let updatePhonePrice = updateCaseNumber("productUpdate",true,1219,"productPrice")
  let total = subTotal("casePrice","productPrice","subTotal")
})

document.getElementById("productMinus").addEventListener("click",function(){
  let updatePhonePrice = updateCaseNumber("productUpdate",false,1219,"productPrice")
  let total = subTotal("casePrice","productPrice","subTotal")
})

function subTotal(intputId1,inputId2,targetId){
  let product1 = document.getElementById(intputId1).innerText;
  let product2 = document.getElementById(inputId2).innerText;
  let target   = document.getElementById(targetId);

  // console.log(product2,product1,target)
  let totalSum = parseInt(product1) + parseInt(product2);
  target.innerText = totalSum;
  return totalSum;
}

function updateCaseNumber(inputId,isAdd,productPrice,targetId){
  let input = document.getElementById(inputId);
  let productTarget = document.getElementById(targetId);
  let inputValue = input.value;
  let price = productPrice;
  // let casePrice = document.getElementById(inputId);
  // console.log(casePrice.innerText);

  if (isAdd==true){
    input.value = parseInt(inputValue) + 1;
    price = price * input.value
    productTarget.innerText = price
    return productTarget.innerText
    // console.log(price)
  }
  else if (inputValue > 0){
    let decreseItem = input.value = parseInt(inputValue) - 1
    price = price * input.value
    productTarget.innerText = price
    return productTarget.innerText
  }
  return input.value;
}

// decrease the case
