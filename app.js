var boughtPrice = document.querySelector(".bought-price");
var quantity = document.querySelector(".quantity");
var currentPrice = document.querySelector(".current-price");

var clickmeBtn = document.querySelector("#btn");

var output = document.querySelector("#out-put");

//console.log(boughtPrice,quantity,currentPrice,clickmeBtn);

function checkProfitOrLoss(currentValue,investedAmount)
{
    var profitLoss= 0;
    var percentage = 0;
    var flag = false;
    if(currentValue - investedAmount > 0)
    {   
        flag = true;
        profitLoss = currentValue - investedAmount;
        percentage =(profitLoss/investedAmount)*100;
        
    }else{
        profitLoss =  investedAmount-currentValue;
        percentage =(profitLoss/investedAmount)*100;
         
    }
    return [flag,profitLoss,percentage];
    
}

function clickHandler()
{
    var investedAmount = boughtPrice.value * quantity.value;
    var currentValue = currentPrice.value * quantity.value;
       
    var profitLossarray = checkProfitOrLoss(currentValue, investedAmount);
    
    if(profitLossarray[0])
    {
        output.innerText = "profit " + profitLossarray[1] + "  profit Percentage" + profitLossarray[2];
    } else{
        output.innerText = "Loss " + profitLossarray[1] +"$"+ "  Loss Percentage " + profitLossarray[2] +"%";
    }
     
    

    console.log(profitLossarray);

}

clickmeBtn.addEventListener("click", clickHandler)