import React from "react";
import data from "../mockDatabase";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

export function Home(){
    const [dataset, setDataset] = React.useState(data)
    const [userInput, setUserInput] = React.useState("")
    const [showModal, setShowModal] = React.useState(false)
    let [filteredData, setFilteredData] = React.useState([])
    let [flag, setFlag] = React.useState(false)

    React.useEffect(() => {
        setDataset(data)
        setFilteredData(data)
    },[data])

    // React.useEffect(() => {
    //     if(filteredData.length === 0 && flag){
    //         console.log("hi")
    //         setShowModal(true)
    //         setFlag(true)
    //         setFilteredData(data)
    //     }
    // },[filteredData])

    function handleChange(e){
        setUserInput(e.target.input)
    }

    function handleKeyDown(e){
        if(e.key === "Enter"){
            const userInput = e.target.value.trim().toLowerCase();
            setFilteredData(dataset.filter(datas => {
                return (
                    datas.keywords.type.toLowerCase() === userInput ||
                    datas.keywords.location.toLowerCase() === userInput || 
                    datas.keywords.name.toLowerCase() === userInput
                );
         }));
            setUserInput("")
        }
    }

    function clearFilter(){
        setFilteredData(dataset)
    }

    const cards = filteredData.map(datas => {
        return (
            <div key={datas.id} className="infoCards">
                <div className="infoCard">
                    <div>
                        <h1><a href={datas.link} target="_blank">{datas.headline}</a></h1>
                        <div className="summary">
                            <h2>Summary</h2>
                            <p>{datas.summary}</p>
                    </div>
                    </div>
                    <div className="keyword">
                        <h2>Keywords</h2>
                        <p>Name: {datas.keywords.name}</p>
                        <p>Location: {datas.keywords.location}</p>
                        <p>Type: {datas.keywords.type}</p>
                        <Link to={datas.keywords.name}>Know more about {datas.keywords.name}</Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="home-input">
                <input 
                    value={userInput}
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown}
                    placeholder="What are you looking for?"
                    >
                </input>
                {filteredData != dataset && <button onClick={clearFilter} className="clearFilter navs">Clear Filter</button>}
            </div>
            
            <div className="cardsContainer">
                {cards}
            </div>
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                contentLabel="Example Modal"
            ></Modal>
        </div>
         
    )
}