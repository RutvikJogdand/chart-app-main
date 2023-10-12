import React from "react"
import {Route, Routes} from "react-router-dom"
import MainPage from "../componets/MainPage/MainPage"
import ChartFile from "../componets/ChartFile/ChartFile"

function AppRoutes(){

    return(
        <>
            <Routes>
                <Route exact path="/" element={<MainPage/> } />
                <Route path="/arrests-data" element={<ChartFile/> } /> 
            </Routes>
        </>
    )
}

export default AppRoutes