import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import BASEURL from "../../constants/api";
import '../detailspage/detailspage.css';
import{ BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function DetailsPage(){
    const { id } =  useParams();

    const [stateData, setState] = useState([]);

    useEffect(() => {
        const fetchData = async (text) =>{
            const results = await BASEURL.get("/", {
                params: {i: id, apikey: "33b27cf1"}
            });
            setState(results.data);
        }
        fetchData();
    }, []); 
    
    return(
        <div>
           <div class="container">
                <div className="sub-header">
                    <h2>Movie Details</h2>
                </div>
                <div class="det-main-section">
                    <div class="det-img">
                       <img src={stateData.Poster} />
                    </div>
                    <div class="det-content">
                        <div className="det-top">
                            <h2>{stateData.Title}</h2>
                            <p> 
                                <span className="sp1">{stateData.Released}</span>
                                <span>{stateData.Runtime}</span>
                                <span>{stateData.Genre}</span>
                            </p>
                        </div>
                        
                        <div className="det-inner-section">                            
                            <div className="rating">
                                <h3>
                                    <span>8.0/10</span>
                                    <br/>
                                    <span>{stateData.imdbVotes}</span>
                                </h3>
                            </div>

                            <div className="gr-left spl-left">
                                <p>{stateData.Metascore}</p>
                            </div>

                            <div className="gr-left spl-left">
                                <p><span className="gr-sub-txt">Language</span> <br /><span>{stateData.Language}</span></p>
                            </div>

                            <div className="gr-left spl-left">
                                <p><span className="gr-sub-txt">Country</span> <br /><span>{stateData.Country}</span></p>
                            </div>

                            <div className="gr-left spl-left">
                                <p><span className="gr-sub-txt">BoxOffice</span> <br /><span>{stateData.BoxOffice}</span></p>
                            </div>
                        
                            <div className="det-cnt">
                                <p>{stateData.Plot}</p>
                                
                                <div className="gr-left">
                                    <p><span className="gr-sub-txt">Director</span> <br /><span>{stateData.Director}</span></p>
                                </div>

                                <div className="gr-left">
                                    <p><span className="gr-sub-txt">Writer</span> <br /><span>{stateData.Writer}</span></p>
                                </div>

                                <div className="gr-left">
                                    <p><span className="gr-sub-txt">Actors</span> <br /><span>{stateData.Actors}</span></p>
                                </div>

                                <div className="gr-left">
                                    <p><span className="gr-sub-txt">Production</span> <br /><span>{stateData.Production}</span></p>
                                </div>

                                <div className="gr-left">
                                    <p><span className="gr-sub-txt">Awards</span> <br /><span>{stateData.Awards}</span></p>
                                </div>
                                
                                <div className="clearfix"></div>

                                <Link to="/"><button className="btn">Back to Home</button></Link>

                            </div>
                            <div className="clearfix"></div>
                       </div>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
    
}

export default DetailsPage;