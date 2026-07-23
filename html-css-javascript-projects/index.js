const c1=document.getElementById("celcius");
const f1=document.getElementById("fahrenheit");
const k1=document.getElementById("kelvin");

function computeTemp(event){
    const currentValue = +event.target.value;
    switch(event.target.name)
    {
        case "celcius":
            k1.value=(currentValue + 273.32).toFixed(2);
            f1.value=(currentValue * 18 + 32).toFixed(2);
            break;
        case "fahrenheit":
            c1.value=((currentValue -32)/ 1.8).toFixed(2);
            k1.value=((currentValue -32 )/32 + 273.32).toFixed(2);
            break;
         case "kelvin":
            c1.value=(currentValue - 273.32).toFixed(2);
            f1.value=((currentValue - 273.32)* 18 + 32).toFixed(2);
            break;
        default:
        break;

    }
}

