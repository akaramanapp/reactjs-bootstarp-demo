import { useEffect, useState } from 'react';

function useGitHub(username) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true)
        async function getData() {
            try {
                const res = await fetch('https://api.github.com/users/'+ username);
                const data = await res.json();
                setUser(data);
                setError(null)
                setTimeout(() => {
                    setLoading(false)
                }, 3000)
            } catch (error) {
                setUser(null);
                setError(error)
                setLoading(false)
            }
        }

        getData();
    },[username])

    return { user, error, loading }
}

export default useGitHub;