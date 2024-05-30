import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useServiceDetail = (id) => {
    const [item, setItem] = useState([]);  
    useEffect(() => {
        
            const url = `https://royal-convention-server.vercel.app/package/${id}`
            fetch(url)
            .then(response => response.json())
        .then(data=>setItem(data))
    },[item])
    return {item,setItem}
};


export default useServiceDetail;