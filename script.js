const jokes = document.getElementById("joke");
const btn = document.getElementById("btn");

// const jokesfunc = () => {

//     const setHeader = {
//         headers:{accept: 'application/json'}
//     }

//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((res) =>  res.json())
//     .then((deta) => joke.innerHTML = deta.joke)
//     .catch((error) => console.log(error))
// }

// async await method
const jokesfunc = async () => {

    try {
        const setHeader = {
            headers: { accept: 'application/json' }
        }

        const res = await fetch('https://icanhazdadjoke.com', setHeader)
        const deta = await res.json();
        jokes.innerHTML = deta.joke;
    }catch (error){
        console.log(error)
    }
}

btn.addEventListener('click',jokesfunc);
jokesfunc();