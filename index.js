let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date(); 
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br>on " + date;
}, 1000);


setInterval(() => {
    let bangladeshTime = new Date().toLocaleTimeString("en-US", 
    {timeZone:'Asia/Dhaka',timestyle:'full',hourCycle:'h24'})
    document.getElementById('bd').innerHTML= bangladeshTime;  
}, 1000);

setInterval(() => {
    let indiaTime = new Date().toLocaleTimeString("en-US", 
    {timeZone:'Asia/Kolkata',timestyle:'full',hourCycle:'h24'})
    document.getElementById('india').innerHTML= indiaTime;  
}, 1000);

setInterval(() => {
    let German = new Date().toLocaleTimeString("en-US", 
    {timeZone:'Europe/Berlin',timestyle:'full',hourCycle:'h24'})
    document.getElementById('pak').innerHTML= German  ;
}, 1000);


setInterval(() => {
    let america = new Date().toLocaleTimeString("en-US", 
    {timeZone:"America/New_York",timestyle:'full',hourCycle:'h24'})
    document.getElementById('chi').innerHTML= america;
}, 1000);


setInterval(() => {
    let Pak = new Date().toLocaleTimeString("en-US", 
    {timeZone:"Asia/Karachi",timestyle:'full',hourCycle:'h24'})
    document.getElementById('pakis').innerHTML= Pak;
}, 1000);