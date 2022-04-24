//promises.then()
//async wait..

//axios /fetch


const url = 'https://restcountries.com/v2/all'

async function getallcountriesfromapi(){
    
    //await 
    const response = await fetch(url)

    const data = await response.json();
    // using for loop
    /*for(i=0;i<250;i++){
        document.getElementById('list').innerHTML += `<li> ${data[i].name} </li>`
    }*/
    
    //using forEach
    data.forEach(function(data) {
        document.getElementById('list').innerHTML += `<li> ${data.name} </li>`;
    });
       
}

getallcountriesfromapi();