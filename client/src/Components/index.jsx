import {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Container, Card, Row} from 'react-bootstrap'

export default function Index() {
    let [bookName, setBookName] = useState('')
    let [review, setReview] = useState('')
    let [fetchData, setFetchData] = useState([])
    let [reviewUpdate, setReviewUpdate] = useState('')
    let [test, setTest] = useState()
    
    let url = "http://localhost:8080/";
    let url1 = "/api"
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(response => setTest(response.message))
    }, [])

    useEffect(() => {
        axios.get("/api/get")
            .then(response => setFetchData(response.data))
    }, [])

    return(
        <>
            <h1>Dockerized React App Application</h1>
            <h2>{test} </h2>
            <div>
                <input 
                    name = "setBookName" placeholder = "Enter book name" 
                    value = {bookName}
                    onChange = {(e) => setBookName(e.target.value)}
                />
                <input 

                    placeholder = "Enter review"
                    onChange = {(e) => setReview(e.target.value)}
                />
            </div>

        </>
    )
}