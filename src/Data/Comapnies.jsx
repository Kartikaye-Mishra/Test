let ThomasCook = {

    "Kerala" :"starting from Rs. 24,999",
    "Andaman": "starting from Rs. 27,999",
    "Kashmir": "starting from Rs. 31,999",
    "Himachal Pradesh": "starting from Rs. 25,999",
    "North East": "starting from Rs. 30,999",
    "Bhutan": "starting from Rs. 31,999",
    "Uttarakhand": "starting from Rs. 13,220",
    "Rajasthan": "starting from Rs. 18,799",

    "Europe": "starting from Rs. 1,65,000",
    "Thailand": "starting from Rs. 51,000",
    "Dubai": "starting from Rs. 75,000",
    "Singapore": "starting from Rs. 85,000",
    "Bali": "starting from Rs. 57,600",
    "Australia": "starting from Rs. 3,19,500"
  
}
let CoxAndKings = {

    "Kerala": "starting from Rs. 20,000",
    "Andaman": "starting from Rs. 30,000",
    "Kashmir": "starting from Rs. 35,000",
    "Himachal Pradesh": "starting from Rs. 28,000",
    "North East": "starting from Rs. 33,000",
    "Bhutan": "starting from Rs. 34,000",
    "Uttarakhand": "starting from Rs. 15,000",
    "Rajasthan": "starting from Rs. 20,000",
  
    "Europe": "starting from Rs. 1,70,000",
    "Thailand": "starting from Rs. 55,000",
    "Dubai": "starting from Rs. 80,000",
    "Singapore": "starting from Rs. 90,000",
    "Bali": "starting from Rs. 60,000",
    "Australia": "starting from Rs. 3,25,000"
  
}
let Yatra = {

    "Kerala": "starting from Rs. 22,000",
    "Andaman": "starting from Rs. 32,000",
    "Kashmir": "starting from Rs. 37,000",
    "Himachal Pradesh": "starting from Rs. 30,000",
    "North East": "starting from Rs. 35,000",
    "Bhutan": "starting from Rs. 36,000",
    "Uttarakhand": "starting from Rs. 17,000",
    "Rajasthan": "starting from Rs. 22,000",

    "Europe": "starting from Rs. 1,75,000",
    "Thailand": "starting from Rs. 60,000",
    "Dubai": "starting from Rs. 85,000",
    "Singapore": "starting from Rs. 95,000",
    "Bali": "starting from Rs. 65,000",
    "Australia": "starting from Rs. 3,30,000"
  }
  let MakeMyTrip ={

    "Kerala": "starting from Rs. 24,000",
    "Andaman": "starting from Rs. 34,000",
    "Kashmir": "starting from Rs. 39,000",
    "Himachal Pradesh": "starting from Rs. 32,000",
    "North East": "starting from Rs. 37,000",
    "Bhutan": "starting from Rs. 38,000",
    "Uttarakhand": "starting from Rs. 19,000",
    "Rajasthan": "starting from Rs. 24,000",

    "Europe": "starting from Rs. 1,80,000",
    "Thailand": "starting from Rs. 65,000",
    "Dubai": "starting from Rs. 90,000",
    "Singapore": "starting from Rs. 100,000",
    "Bali": "starting from Rs. 70,000",
    "Australia": "starting from Rs. 3,35,000"
  
}
let BareFoot = {

    "Kerala": "starting from Rs. 15,000",
    "Andaman": "starting from Rs. 25,000",
    "Kashmir": "starting from Rs. 30,000",
    "Himachal Pradesh": "starting from Rs. 23,000",
    "North East": "starting from Rs. 28,000",
    "Bhutan": "starting from Rs. 29,000",
    "Uttarakhand": "starting from Rs. 10,000",
    "Rajasthan": "starting from Rs. 15,000",

    "Europe": "starting from Rs. 1,50,000",
    "Thailand": "starting from Rs. 45,000",
    "Dubai": "starting from Rs. 70,000",
    "Singapore": "starting from Rs. 80,000",
    "Bali": "starting from Rs. 50,000",
    "Australia": "starting from Rs. 3,00,000"
  
}

const CompanyNames = ["Yatra", "MakeMyTrip", "BareFoot","ThomasCook","CoxAndKings"];
function createDataArray(varNames) {
    let result = [];
    for (let i = 0; i < varNames.length; i++) {
        let obj = { name: varNames[i], ...eval(varNames[i]) };
        result.push(obj);
    }
    return result;
}
const CompanyNamesobj = createDataArray(CompanyNames);
// console.log(CompanyNamesobj)
export default CompanyNamesobj