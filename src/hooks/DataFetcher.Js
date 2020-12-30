import React, { useState, useEffect } from 'react';

function DataFetcher(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(props.url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => setError(err));
    }, []);

    return props.children({ data, loading, error });
}

export default DataFetcher;
