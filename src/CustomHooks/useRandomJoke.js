import {useState, useEffect} from 'react'

function useRandomJoke(firstName, lastName) {
    const [joke, setJokes] = useState('');

    const fetchJokes = async () => {
        await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.value);
                setJokes(data.value.joke);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchJokes();
    }, [firstName, lastName])

    return joke;
}

export default useRandomJoke