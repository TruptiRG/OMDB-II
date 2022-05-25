
function getData(){
    let movie=document.getElementById("movie").value;
    const url=`http://www.omdbapi.com/?t=${movie}&apikey=4da2ec90`;
    // const url="https://www.omdbapi.com/?i=tt3896198&apikey=4da2ec90"
    

    fetch(url)
        .then(function(res){
            return res.json();
            // console.log(res.json());
        })
        .then(function(res){
            append(res);
        })
        .catch(function(err){
            console.log(err);
            // alert(err);
            er();
        });
        
}
function er(){
    container.innerHTML=null;
    let ts=document.createElement("h3");
    ts.innerText="Oops! sorry no such Movie found..."
    let img1=document.createElement("img");
    img1.setAttribute("class","er");
    img1.src="https://c.tenor.com/QuT5M-9hjWIAAAAM/ups-error.gif";
    container.append(ts,img1);
    // container.innerHTML=null;
}

function append(data){
    let container=document.getElementById("container");
    container.innerHTML=null;
    document.getElementById("movie").value=null;

    let movie_name=document.createElement("h3");
    movie_name.innerText=`Movie:  ${data.Title}`;
    let actors=document.createElement("p");
    actors.innerText=`Actors:  ${data.Actors}`;
    let release_date=document.createElement("p");
    release_date.innerText=`Release Date:  ${data.Released}`;
    let country=document.createElement("p");
    country.innerText=`Contry:  ${data.Country}`;
    country.setAttribute("class","country");
    let rating=document.createElement("h4");
    rating.innerText=`Rating:  ${data.Ratings[0].Value}`
    rating.setAttribute("class","country");
    let poster=document.createElement("img");
    poster.setAttribute("class","pos")
    poster.src=data.Poster;

    container.append(movie_name,actors,release_date,country,rating,poster);
}




























// function getData(){
//     let movie=document.getElementById("movie").value;
//     const url=`http://www.omdbapi.com/?t=${movie}&apikey=4da2ec90`;
//     // const url="https://www.omdbapi.com/?i=tt3896198&apikey=4da2ec90"

//     fetch(url)
//         .then(function(res){
//             return res.json();
//             // console.log(res.json());
//         })
//         .then(function(res){
//             append(res);
//         })
//         .catch(function(err){
//             console.log("error: ",err);
//             alert(err);
//             er();
//         });  
// }


// function append(data){
//     let container=document.getElementById("container");
//     container.innerHTML=null;
//     document.getElementById("movie").value=null;
//     let movie_name=document.createElement("h3");
//     movie_name.innerText=`Movie: ${data.Title}`;
//     movie_name.setAttribute("class","movieName");
//     let actors=document.createElement("p");
//     actors.innerText=`Actors: ${data.Actors}`;
//     let box_off=document.createElement("p");
//     box_off.innerText=`Box office collection: ${data.BoxOffice}`;
//     let country=document.createElement("p");
//     country.innerText=`Contry: ${data.Country}`;
//     country.setAttribute("class","country");
//     let poster=document.createElement("img");
//     poster.src=data.Poster;

//     container.append(movie_name,actors,box_off,country,poster);

//     // if(movie_name===undefined){
//     //     er();
//     // }
// }

// function er(){
//     let ts=document.createElement("h3");
//     ts.innerText="Oops! sorry no such Movie found..."
//     let img1=document.createElement("img");
//     img1.setAttribute("class","er");
//     img1.src="https://c.tenor.com/QuT5M-9hjWIAAAAM/ups-error.gif";
//     container.append(ts,img1);
// }