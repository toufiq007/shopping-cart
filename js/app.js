// increase the case
document.getElementById("casePlus").addEventListener("click",function(){
  updateCaseNumber("caseNumber",true)
});

document.getElementById("caseMinus").addEventListener("click",function(){
  let decreseItem = updateCaseNumber("caseNumber",false)
  console.log(decreseItem);
});

function updateCaseNumber(inputId,isAdd){
  let input = document.getElementById(inputId);
  let inputValue = input.value;
  let price = 59;
  let casePrice = document.getElementById("casePrice");
  console.log(casePrice.innerText);

  if (isAdd==true){
    input.value = parseInt(inputValue) + 1;
    price = price * input.value
    casePrice.innerText = price;
    // console.log(price)
  }
  else if (inputValue > 0){
    let decreseItem = input.value = parseInt(inputValue) - 1
    price = price * input.value
    casePrice.innerText = price;
  }
  return input.value;
}

// decrease the case
