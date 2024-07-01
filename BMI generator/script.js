const cal = document.getElementById('cal');
cal.addEventListener('click',e=>
    {
        const h=parseFloat(document.querySelector('#height').value);
        const w=parseFloat(document.querySelector('#weight').value);
        const r=document.querySelector('.result');
        if(h==='' || h<=0 || isNaN(h))
        {
            r.innerHTML=`${h} is not a valid height`;
        }
        else if(w==='' || w<=0 || isNaN(w))
        {
            r.innerHTML=`${w} is not a valid weight`;
        }
        else
        {
            const bmi=w / (h * h);
            if(bmi<18.6)
                r.innerHTML=` Result: Your BMI is ${bmi} and you are Underweight`;
            else if(bmi>=18.6 && bmi<=25)
                r.innerHTML=` Result: Your BMI is ${bmi} and you are normalweight`;
            else
                 r.innerHTML=` Result: Your BMI is ${bmi} and you are overweight`;
        }
        r.style.display='block';
    }
    
)