const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>
{
    insert.innerHTML=
    `
    <table cell padding="2px" bgcolour="white">
  <tr>
    <td>Key Name </td>
    <td>Key ASCII Code</td>
    <td>Key Code</td>
  </tr>
  <tr>
    <td>${e.key===' '?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    `
} 
)