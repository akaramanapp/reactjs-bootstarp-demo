import { useEffect, useState } from 'react';

function useRepo(username) {
    const [repos, setRepos] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch('https://api.github.com/users/'+ username +'/repos');
                const data = await res.json();
                setRepos(data);
                setError(null)
            } catch (error) {
                setRepos(null);
                setError(error)
                setLoading(false)
            }
        }

        getData();
    },[username])

    return { repos, error, loading }
}

export default useRepo;