// increase the case
document.getElementById("casePlus").addEventListener("click",function(){
  updateCaseNumber("caseNumber",true,59,"casePrice")
});

document.getElementById("caseMinus").addEventListener("click",function(){
  let decreseItem = updateCaseNumber("caseNumber",false,59,"casePrice")
  console.log(decreseItem);
});

function updateCaseNumber(inputId,isAdd,productPrice,targetId){
  let input = document.getElementById(inputId);
  let productTarget = document.getElementById(targetId);
  let inputValue = input.value;
  let price = productPrice;
  let casePrice = document.getElementById(inputId);
  console.log(casePrice.innerText);

  if (isAdd==true){
    input.value = parseInt(inputValue) + 1;
    price = price * input.value
    productTarget.innerText = price
    // console.log(price)
  }
  else if (inputValue > 0){
    let decreseItem = input.value = parseInt(inputValue) - 1
    price = price * input.value
    productTarget.innerText = price
  }
  return input.value;
}

// decrease the case
