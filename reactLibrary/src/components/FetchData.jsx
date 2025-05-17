import React, {useEffect, useState} from 'react';
import {path} from "../config.js";

function FetchData() {

    let [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function getData() {
            try {
                const response = await fetch(path);
                if (!response.ok)
                    throw Error(`Data fetch error! ${response.status}`);
                data = await response.json();
                setData(data);
            } catch (error) {
                console.log('ProductList fetch error:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading === false)
        return (
            data
        );
}

export default FetchData;