import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ChartFile from "../ChartFile/ChartFile";
import printIcon from "../../assets/images/print.png"
import download from 'downloadjs'
// require('dotenv').config();


function MainPage(){

    const generatePDF =  () => {
        // Make an API request to the Express.js server to generate the PDF
        axios.get('https://exuberant-tuna-tutu.cyclic.app/api/generate-pdf',{
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
                // document.body.removeChild(a);
            }

            console.log("response", response)
        }

        ).catch( err =>{
            console.log('err',err)
        }

        ); // Replace with the actual server address
        
      };
    

    return(
        <>
            <h2> Crime Data:</h2>
            <div>
                <img style={{cursor:"pointer"}} onClick={generatePDF} src={printIcon}/>
            </div>
        </>
    )
}

export default MainPage