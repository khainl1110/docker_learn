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

    let handleChange = (event) => {
        setReviewUpdate(event.target.value)
    }

    let submit = () => {
        axios.post('/api/insert', {
            bookName, review
        })
        .then(() => alert('Success post!'))
    }

    let remove = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Do you want to delete? ")) {
            axios.delete('/api/delete/${id}')
            document.location.reload()
        }
    }

    let edit = (id) => {
        axios.put('/api/update/${id}', {
            reviewUpdate
        })
        document.location.reload();
    }
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
            <button onClick = {submit}>Submit </button>

            {
                fetchData.map((val,key) => {
                    return(
                        <>
                            <h2>{val.book_name}</h2>
                            <h2>{val.book_review} </h2>
                        </>
                    )
                })
            }

        </>
    )
}