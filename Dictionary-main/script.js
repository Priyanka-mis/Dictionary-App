const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`
const result = document.getElementById('result')
const searchIcon= document.getElementById('search-icon')

searchIcon.addEventListener('click',()=>{
    const input = document.getElementById('input').value
    fetch(`${url} ${input}`)
    .then(response =>response.json())
    .then((data) => {
        console.log(data);
        let audio;
        const sound = document.getElementById('soundPlay')
        sound.addEventListener("click",function(){
            if(data[0].phonetics.length!=0){
                for(let i=0;i<data[0].phonetics.length;i++){
                    if(data[0].phonetics[i].audio!=""){
                        // sound.innerText=data[0].phonetics[i].audio
                        // console.log(sound)
                        audio=new Audio(data[0].phonetics[i].audio)
                        console.log(audio)
                        break;                  
                    }
                   
                }
            }
            audio.play()
        })

        result.innerHTML=`
        
    </div>
        <div class="word">
        <h1>${input}</h1>
        <p class="para"> ${data[0].phonetic}</p>
    </div>


    <div class="detailes">
        <h2>${data[0].meanings[0].partOfSpeech}</h2>
        <div class="border-line"></div>
        <p>Meaning:<p>
        <li class="p1">${data[0].meanings[0].definitions[0].definition}</li>
        <li class="p1">${data[0].meanings[0].definitions[1].definition}</li>
        <li class="p1">${data[0].meanings[0].definitions[2].definition}</li>
    </div>

    <div class="detailes">
        <p class="Synonyms">Synonyms:${data[0].meanings[0]} </p>
    </div>
    
        
    <div class="detailes">
        <h2>${data[0].meanings[1].partOfSpeech}</h2>
        <div class="border-line1"></div>
        <p>Meaning:</p>
        <li class="p1">${data[0].meanings[1].definitions[0].definition}</li>
        <li class="p1">${data[0].meanings[1].definitions[1].definition}</li>
    
    </div>

    <div class="detailes">
        <h2>${data[0].meanings[2].partOfSpeech}</h2>
        <div class="border-line2"></div>
        <p >Meaning:</p>
        <li>${data[0].meanings[2].definitions[0] ?data[0].meanings[2].definitions[0].definition : 'No definition found'}</li>
        <li>${data[0].meanings[2].definitions[1] ? data[0].meanings[2].definitions[1].definition : 'No definition found'}</li>

        
    </div>`

    // .catch((error)=>{
    //     console.log(error); 
    // })
    


    })


})

// optinal

const optional = document.getElementById("optinal");
optional.addEventListener("change", (e) => {
const font = e.target.value;
document.body.style.fontFamily = font;
});



//  toggle 


const toggleOff = document.getElementById("toggle-off");

toggleOff.addEventListener("click", enableDark);
toggleOff.addEventListener("dblclick", disableDark);

function enableDark() {
    document.body.classList.add("toggleDark");
}

function disableDark() {
    document.body.classList.remove("toggleDark");
}


