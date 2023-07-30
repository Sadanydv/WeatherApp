const temperateField=document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const emojiField=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".searchField");
const form=document.querySelector("form");

let target="Kathmandu";

const fetchData=async()=>{

   try {

    const url=`https://api.weatherapi.com/v1/current.json?key=7cb93ce0b6eb48a6b46121436232107&q=${target}`
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);

    const {
       current:{
            temp_c,condition:{text,icon}
        },
        location:{name,localtime,region}

    }=data;

    updateDom(temp_c,name,icon,text,localtime,region);
    
   } catch (error) {
    alert("Location Not found");
    
   }
}

function updateDom(temperate,city,emoji,text,localtime,region){
    const exactTime=localtime.split(" ")[1];
    const exactDate=localtime.split(" ")[0];
    
    const exactDay=dayfunc(new Date(exactDate).getDay());
    const weekday=dayfunc(exactDay);
    
    temperateField.innerText=temperate;
    dateField.innerText=`${exactTime} - ${exactDay} ${exactDate}`;
    cityField.innerText=city;
    emojiField.src=emoji;
    weatherField.innerText=text;

}

const search=(e)=>{
    e.preventDefault();

    target=searchField.value;
    fetchData();

};
form.addEventListener("submit",search)
fetchData();

function dayfunc(num){

    switch(num){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            break;
    }

}





