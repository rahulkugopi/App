import React, {  useState } from "react";
import Search from "../search/search";
import BASEURL from "../../constants/api";
import CardDetails from "../carddetails/carddetails";
import '../home/home.css';

function HomeView(){

    const [state, setState] = useState({
        results:[]
    });

    const [showResults, setShowResults] = useState(true);

    const onSearch = async (text) =>{
        const results = await BASEURL.get("/", {
            params: {s: text, i: "tt3896198", apikey: "33b27cf1"}
        });

        setState(prevState => {
            setShowResults(false);
            return {...prevState, results:results}
        });
    }
    
    if(state.results.length === "0"){
        setShowResults(true);
    }
    

    return(
        <div>
            <Search onSearch={onSearch} />
            { 
                showResults ? 
                <div className="container">
                    <div className="grid">
                        <p>Please search movies...</p>
                    </div>
                </div>
                : null 
            }
            
            <CardDetails results={state.results}/>
        </div>
        
    )
}

export default HomeView;