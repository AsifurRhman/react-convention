import { useEffect, useState } from "react";


const useService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://royal-convention-server.onrender.com/package')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return [services]
};

export default useService;
