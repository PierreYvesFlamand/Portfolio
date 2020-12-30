import React, { useState, useEffect } from 'react';
const DataContext = React.createContext();

function DataContextProvider({ children }) {
    const [minLoading, setMinLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => setMinLoading(false), 1); // 850

        fetch('./data/data.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            });
    }, []);

    const showLoading = minLoading || isLoading ? true : false;

    return <DataContext.Provider value={{ data, showLoading }}>{children}</DataContext.Provider>;
}

export { DataContextProvider, DataContext };
