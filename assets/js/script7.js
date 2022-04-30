let card=document.getElementsByClassName('card')

fetch('./assets/data/movies.json')
.then((response)=>{
    return response.json();
})

.then((datas)=>{
    console.log(datas)
    console.log(datas.results)

    datas.results.forEach(movieObj => {  
        document.querySelector('main').innerHTML += `<div class="card">
                                            <img class="image" src=" ${movieObj.poster_path}" alt="">
                                            <h1 class="title" >${movieObj.original_title}</h1>
                                            <p class="resum" >${movieObj.overview}</p>
                                            <p class="note">Note : ${movieObj.vote_average}</p>
                                            </div> 
                                        `;
    });
    
})


