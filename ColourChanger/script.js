const bt=document.querySelectorAll('.button');
console.log("helloworld11");
const body=document.querySelector('body');

bt.forEach(element => {
    element.addEventListener('click',e=> 
        {
        body.style.backgroundColor=e.target.id;
        if(e.target.id=='black'|| e.target.id=='grey')
        {
            body.style.color='white';
            e.target.style.borderColor='white'
            console.log(e.target);
        }
        else
        {
            body.style.color='black';
        }
    }
    )
});