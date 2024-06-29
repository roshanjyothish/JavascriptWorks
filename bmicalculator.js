var weightInKg=75;

var heightInCm=165;

bmi=Math.round(weightInKg/(heightInCm/100)**2)

console.log(bmi);

if (bmi < 19)
    {
    console.log("Under Weight");
    }   

else if (bmi >=19 && bmi <25)
    {
    console.log("Normal");
    }

else if (bmi >=25 && bmi <30)
    {
    console.log("OverWeight");
    }

else
    {
    console.log("Obese");
    }