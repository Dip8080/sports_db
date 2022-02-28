// windows onload
/* window.addEventListener('load',async ()=>{
  const rcvData = await fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
  const data = rcvData.json();
  console.log(data) 
}) */
// when window is reloaded

 window.addEventListener('load',()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(rcvdata=>rcvdata.json())
    .then(data=>catchdata(data.sports))
    // if api link is  broken means fetched data empty or not fouond .catch will catch the error and run a funcktion with error perameter and will make a error div apper in the browser pretty cool right 
    .catch(error => {
        document.getElementById('show_error2').style.display='block';
    })

})

const catchdata = Arraydata =>{
    cosole.log(Arraydata)
    Arraydata?.forEach(Object => {
        
        const newDiv = document.createElement('div');
        const parent = document.getElementById('search_result')
        newDiv.innerHTML =` <div class="bg-green-500 rounded drop-shadow-md p-5">
        <div>
            <div class="my-3 px-6">
            <img class="mx-6 "  src="${Object.strSportIconGreen}" alt="">
            </div>
            <img src="${Object.strSportThumb}" alt="">

        </div>
        <h1 class="text-2xl">${Object.strSport}</h1>
        <p class="text-xl">${Object.strSportDescription.slice(0,40)}</p>
        `
        parent.appendChild(newDiv);
    });
} 
// ----------------------------------------------------------------------------

document.getElementById('search_btn').addEventListener('click',()=>{
    const inputField = document.getElementById('input_field');
    const inputValue = inputField.value;
    inputField.value='';
    if(inputValue==''){
        alert('type player name thn click SEARCH')
    }
    else{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`)
        .then(rcvData=>rcvData.json())
        .then(data=>catchPlayer(data))
        // catch not found error
        .catch(error => {
            document.getElementById('show_error2').style.display='block'
        })
    }
})

const catchPlayer = data =>{
    console.log(data)
    const playerArray = data.player;
    if(playerArray==null){
       document.getElementById('show_error').style.display='block';
    }
    else{
        document.getElementById('show_error').style.display='none';

    const parent =document.getElementById('search_result');
    parent.textContent='';
   playerArray.forEach(Object => {
       const newDiv = document.createElement('div');
       newDiv.innerHTML = `<div onclick=getid('${Object.idPlayer}')  class="bg-green-500 rounded drop-shadow-md p-5">
       <div>
           <div class="my-3">
           <img src="${Object.strThumb}" alt="">
           </div>
           <img src="${Object.strFanart1}" alt="">
           
        

       </div>
       <h1 class="text-2xl">${Object.strPlayer}</h1>
     `
       parent.appendChild(newDiv);

   });
}
}

const getid = id =>{
    
}

// -----------------------------------------------------------------------------------
// loading screen 
document.documentElement.onload = function(){
    document.getElementById("loader").style.display = "block";
};
window.onload = function(){
    document.getElementById("loader").style.display = "none";
};