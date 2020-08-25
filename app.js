let form = document.getElementById("form")
let calculate = document.getElementById("calculate")

let perMonth = document.getElementById("perMonth")
let profit = document.getElementById("profit")
let years = document.getElementById("years")
let tAmount = document.getElementById("tAmount")
let yRevenue = document.getElementById("Yrevenue")

form.addEventListener("submit", function (e) {
    e.preventDefault();
})

calculate.addEventListener("click", function () {

    if (perMonth.value == '' || profit.value == '' || years.value == '') {

        let errorDiv = document.createElement("div");
        errorDiv.className = 'alert alert-danger text-center firstAlert';
        errorDiv.textContent = 'Please check all'

        let card = document.querySelector(".card");
        let heading = document.querySelector(".heading");
        card.prepend(errorDiv)

        ////// For alert clear
        setTimeout(() => document.querySelector(".firstAlert").remove(), 800)

    } else {

        let oneYear = perMonth.value * 12;
        let allYears = oneYear * years.value;
        let dividePercent = allYears / 100;
        let allProfit = dividePercent * profit.value;

        tAmount.placeholder = (allYears);
        yRevenue.placeholder = (allProfit);

        document.querySelector("#loading").style.display = 'block';
        document.querySelector("#result").style.display = 'none';
        setTimeout(ResultShow, 400);
    }
})

function ResultShow() {
    document.querySelector("#loading").style.display = 'none';
    document.querySelector("#result").style.display = 'block';
}




























// document.getElementById("form").addEventListener("submit", function (e) {

//     if (amount.value == '' || interest.value == '' || years.value == '') {        
//         let errorDiv = document.createElement("div");
//         errorDiv.className = "alert alert-warning text-center";
//         errorDiv.textContent = "Please check your number";
//         let card = document.querySelector(".card");
//         let heading = document.querySelector(".heading");
//         card.insertBefore(errorDiv, heading);

//         //// TiemOut 
//         setTimeout(clearError, 1000)        
//         function clearError(){
//             document.querySelector(".alert").remove();
//         }

//         document.getElementById("loading").style.display = 'none';
//         document.getElementById("result").style.display = 'none';
//     } else {
//         document.getElementById("loading").style.display = 'block';
//         document.getElementById("result").style.display = 'none';
//     }

//     setTimeout(calculateResult, 1000)
//     e.preventDefault();

// });







// function calculateResult() {

//     let principal = parseFloat(amount.value);
//     let calculatedInterest = parseFloat(interest.value) / 100 / 12;
//     let calculatedPeyments = parseFloat(years.value) * 12;

//     //////// Monthly Peyment Complate
//     let x = Math.pow(1 + calculatedInterest, calculatedPeyments);
//     let monthly = (principal * x * calculatedInterest) / (x - 1);
//     if (isFinite(monthly)) {
//         mPeyment.value = monthly.toFixed(2);
//         tPeyment.value = (monthly * calculatedPeyments).toFixed(2);
//         tInterest.value = ((monthly * calculatedPeyments) - principal).toFixed(2)

//         document.getElementById("loading").style.display = 'none';
//         document.getElementById("result").style.display = 'block';

//     } else {
//         console.log("Please fill the all box");
//     }

// }