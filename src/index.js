let currentDog

function initialize(){
    fetch("http://localhost:3000/pups")
    .then(r=>r.json())
    .then((data)=>{
        data.forEach((dog)=> addDogToBar(dog))
    })
}

function addDogToBar(dog){
    const bar = document.querySelector("#dog-bar")
    const newDog = document.createElement("span")
    newDog.innerText = dog.name
    newDog.addEventListener("click", ()=>{
        renderGoodDog(dog)
    })
    bar.append(newDog)
}

function renderGoodDog(dog){
    currentDog = dog
    const info = document.querySelector("#dog-info")
    info.innerHTML = ""
    const newInfo = document.createElement("div")
    newInfo.innerHTML = `
    <img src="${dog.image}" />
    <h2>${dog.name}</h2>
    <button>Good Dog!</button>`
    info.append(newInfo)
}

initialize()