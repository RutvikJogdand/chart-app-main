import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ChartFile from "../ChartFile/ChartFile";
import printIcon from "../../assets/images/print.png"
import download from 'downloadjs'
// require('dotenv').config();


function MainPage(){

    const [loading, setLoading] = useState(0)
    const generatePDF =  () => {
        setLoading(1)
        axios.get('http://localhost:5000/api/generate-pdf',{
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/pdf',
                withCredentials: true,
                mode: 'no-cors',
              },
              responseType: 'blob',}).then( response => {

            if (response) {
                const content = response.headers['content-type'];
                download(response.data, content)
                setLoading(2)
            }

            console.log("response", response)
        }

        ).catch( err =>{
            console.log('err',err)
            setLoading(3)
        }

        ); // Replace with the actual server address
        
      };
    

    return(
        <>
            <h2> Crime Data:</h2>
            <div>
                <img style={{cursor:"pointer"}} onClick={generatePDF} src={printIcon}/>
            </div>
            {
                loading === 1 ?
                "Getting your file ready..."
                :
                loading === 2 ?
                <p style={{color:"green"}}>File Done!</p>
                :
                loading === 3 &&
                <p>Error downloading PDF</p>
            }
        </>
    )
}

export default MainPage