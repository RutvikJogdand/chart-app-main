import React, {useEffect, useState} from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';
import axios from "axios";
import LocationIcon from "../../assets/images/location.png"
import MessageIcon from "../../assets/images/message.png"

export default function ChartFile() {

    
    const apiString = `https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`

    const [dataArr, setDataArr] = useState([]);
    useEffect(() => {

        axios.get(apiString)
        .then(res => {
            console.log(res)

          const data_arr = res.data.data.map((item) => ({
            data_year: item.data_year,
            burglary_arrests: item.Burglary,
          }))
           
          setDataArr(data_arr) ;   
        })
        .catch(err => {
            console.log(err)
        })

    },[])

  return (
    <>
    {
        dataArr.length > 0 &&
        <div style={{padding:"10px"}}>
        <header style={{borderBottom:"2px solid #009cff", display: "flex", margin:"auto", width:"92%"}}>
            <div style={{ flex:"1", textAlign: "left", fontSize:"17px"}}>
                <img height={"15px"} src={MessageIcon} />
                RealAssist.AI
            </div>
            <div  style={{ flex:"1", textAlign:"right", fontWeight:"800", fontSize:"15px"}}>
                123 Main Street, Dover, NH 03820-4667
            </div>
        </header>
        <div style={{padding:"2px", margin:"auto", width:"93%", display:"flex", marginTop:"20px"}} >
            <div>
                <img src={LocationIcon}/>
            </div>
            <div>Crime</div>
            <div style={{backgroundColor: "#256EFF", width:"94.5%", border:"1px solid #256EFF", float:"left", marginTop:"13px", marginLeft:"3px", height:"2px"}}></div>
        </div>
        <div style={{height:"20px", marginBottom:"20px", marginTop:"20px"}}>
        <div style={{textAlign:"left", color:"#256EFF", fontWeight:"600", margin:"auto", width:"91.2%", background:"#E8EEFB" ,border: "1px solid #E8EEFB", padding: "10px", borderRadius:"10px 10px 0 0"}}>Burglary</div>
        </div>
        <div style={{padding:"20px", margin:"auto", width:"90%", border:"1px solid #F1F3F4", background:"#F1F3F4"}}>
            <ResponsiveContainer width="95%" aspect={4}>
                <LineChart style={{background:"white", padding:"10px"}} width={400} height={500} data={dataArr}>
                <XAxis dataKey="data_year" />
                <YAxis  label={{ value: "Arrests", fontWeight:600, color:"#000000" , position: "insideLeft", angle: -90,   dy: -10}} markerWidth={40} padding={{ top: 10 }}  />
                <Tooltip/>
                {/* <Legend/> */}
                <CartesianGrid strokeDasharray="4 3" />
                    <Line type="monotone" dataKey={"burglary_arrests"} stroke="#256EFF" />
                </LineChart>
            </ResponsiveContainer>
        </div>
        <br/>
        <footer style={{borderTop:"2px solid #009cff", display: "flex", margin:"auto", width:"92%"}}>
            <div style={{ flex:"1", textAlign: "left", fontWeight:"800", fontSize:"15px", color: "#1463ff"}}>
                Report Generated on September 26, 2023
            </div>
            <div  style={{ flex:"1", textAlign:"right", fontWeight:"800", fontSize:"15px"}}>
            RealAssist Property Report | Page 1 <span> of 25 </span>
            </div>
        </footer>
        </div>
    }
    </>
  );
}
 