// With Ajax Jquery

// $('.search-button').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=2f2ee77&s=' + $('.input-keyword').val(),
//         success: result =>{
//             const movies = result.Search;
//             let cards = '';
//             console.log(movies);
    
//             movies.forEach( m => {
//                 cards += showCards(m);
//                 ;
//             });
    
//             $('.movie-container').html(cards);
    
//             $('.modal-details-movie').on('click', function(){
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=2f2ee77&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         console.log($(this).data('imdbid'));
//                         console.log(m);
//                         let modalMovieDetails = '';
//                         modalMovieDetails = showMovieDetails(m);
    
//                         $('.modal-body').html(modalMovieDetails);
//                     }
    
//                 });
//             });
//         },
//         error: e =>{
//             console.log(e.responseText);
    
//         }
//     });
// });

// End with Ajax Jquery

// With Fetch vanilla js

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function (){
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=2f2ee77&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';

            movies.forEach( m => cards += showCards(m));

            let movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;

            const modalDetailsMovie = document.querySelectorAll('.modal-details-movie');
            
            modalDetailsMovie.forEach( btn => {
                btn.addEventListener('click', function(){
                    console.log(this);
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=2f2ee77&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            let movieDetailsResult = '';
                            movieDetailsResult = showMovieDetails(m);
    
                            const modalBody = document.querySelector('.modal-body');
    
                            modalBody.innerHTML = movieDetailsResult;
    
                        });
                });
            });
            

            
        });

    
});

// End with Fetch vanilla js


function showCards(m){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-details-movie" data-bs-toggle="modal" data-bs-target="#modalPreviewMovie" data-imdbid="${m.imdbID}">See Details</a>
                    </div>
                </div>
            </div>`
};

function showMovieDetails(m){
    return ` <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
};


// function compareTriplets(a, b) {

//     let resA = 0;
//     let resB = 0;
//     let resFin = [];

//     for(let i = 0; i < a.length; i++){
//         if(a[i] > b[i]){
//             resA++;
//         }else if(a[i] < b[i]){
//             resB++;
//         }
        
//         resFin[0] = resA;
//         resFin[1] = resB;
//     }

//     return resFin;

// }

// compareTriplets([1,2,3],[3,2,1]);

// function diagonalDifference(ar){
//    console.log(Math.sqrt(ar.length));

// }

// diagonalDifference([1,2,3,4,5,6,7,8,9]);


// learn async
function one(){
    console.log('one');
}

function two(){
    console.log('proccessing... two')
    setTimeout( () =>
        console.log('two'), 3000
    )
}

function three(){
    console.log('three');
}

one();
two();
three();

// end learn async