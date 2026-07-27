const btn1 = document.getElementById("btn");
const birthday1 = document.getElementById("birthday");
const results = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthday1.value;
    if(birthdayValue === ""){
        alert("Please enter your birthday");
    }
    else{
        const age = getAge(birthdayValue);
        results.innerText = `Your age is ${age} ${age>1? "years": year} old`;
    }
}

function getAge(birthdayValue){
    const currentDate = newDate();
    const birthdayDate = newDate(birthdayValue);
    let age = currentDate.getFullYear()-birthdayDate.getFullYear();
    const month = currentDate.getMonth()-birthdayDate.getMonth();

    if(
        month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    )
    {
        age--;
    }
    return age;
}

btn1.addEventListener("click", calculateAge);