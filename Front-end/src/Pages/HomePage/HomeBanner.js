import React,{Component} from "react";
import {Link} from 'react-router-dom';
import './CSS/HomeBanner.css';
import Url from '../../ApiServices/BackendUrl';
import bn from '../../assets/Images/banner.png';
class HomepageBanner extends Component{

    render(){
        let text=null;
        let Banner=null;
             text = ( <p className="Banner-text"></p> );
             Banner=( <div className="BannerSection">

             <img className="BannerImage"
             src={bn} alt="banner1"/>

            </div>);


        if(this.props.img){
            Banner=( <div className="BannerSection">

                     <img className="BannerImage"
                     src={bn} alt="banner1"/>

                    </div>);
        }

        if(this.props.img === null){

            text = (

                    <div className="Teacher-banner">

                        <p className="Teacher-text">Share Your Knowlegde
                        <br/>with the whole World!</p>

                       <Link to="teacher"> <button className="createCourse">
                            Create New Course</button></Link>

                    </div>
            );
        }

    

    return(
        <>
           
           {Banner}
            {text}

        </>
     


    );
  }
}

export default HomepageBanner;
