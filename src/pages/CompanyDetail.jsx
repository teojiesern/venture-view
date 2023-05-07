import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../mockDatabase"

export function CompanyDetails(){
    const [datasets, setDatasets] = React.useState(data)
    const { name } = useParams()

    const filtered = datasets.filter(datas => {
        return name === datas.keywords.name
    })

    const divs = filtered[0].details.map((detail,index) => {
        return (
            <div className={`div${index+1} divs`}>
                <a href={detail.link} target="_blank" style={{marginRight: "2rem"}}>
                    <img src={detail.image} className="images"/>
                </a>
                <div>
                    <h2 className="description">{detail.description}</h2>
                </div>      
            </div>
        )
    })

    return (
        <div>
            <Link to=".." relative="path" className="noTextDeco blacktext">&larr; Back to Home Page</Link>
            <div className="companyDetail">
                <div className="detailHeader">
                    <img src={filtered[0].photo} className="detail-img"/>
                    <div>
                        <h1>{filtered[0].keywords.name}</h1>
                        <p>{filtered[0].summary}</p>
                    </div>
                </div>
                <div className="detailContent"> 
                    {divs}
                </div>
            </div>
        </div>
    )
}