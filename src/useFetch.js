import { useEffect , useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() =>{
      //AbortCoNTROLLER is used To prevent data from loading if we quickly access different pages at a time
      const aboortCont = new AbortController();
        // For testing http://localhost:8000/blogs 
        // 'http://192.168.36.154:8000/blogs'
              fetch(url, {signal: aboortCont.signal})
              .then(res =>{
                if(!res.ok){
                  throw Error("Could not fetch the data for that resource")
                }
                return res.json();
              })
              .then(data =>{
                console.log(data);
                setData(data)
                setError(null)
              })
              .catch(err=>{
                if(err.name === 'AbortError'){
                  console.log("Fetch Aborted");
                }
                else{
                  setError(err.message)
                }
                
              })
        return () => aboortCont.abort();
        
        }, [url]);

        return {data, error}
}

export default useFetch