// increase the case
document.getElementById("casePlus").addEventListener("click",function(){
  changeItemValue("caseNumber",true)
});

document.getElementById("caseMinus").addEventListener("click",function(){
  let decreseItem = changeItemValue("caseNumber",false)
  console.log(decreseItem);
});

function changeItemValue(inputId,isAdd){
  let input = document.getElementById(inputId);
  let inputValue = input.value;
  if (isAdd==true){
    input.value = parseInt(inputValue) + 1;
  }
  else if (inputValue > 0){
    let decreseItem = input.value = parseInt(inputValue) - 1
  }
  return input.value;
}

// decrease the case
