import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import './course.css'
import Sidebar from "../sidebar/Sidebar"
import path from 'path'
import axios from 'axios'

const Course = () => {

    const history = useHistory()

    useEffect(() => {
        const callBack = async () => {
            await axios.get("/dashboard")
                .then((result) => {
                    if (!result.data)
                        history.push('/')
                })
        }
        callBack();
    }, [history]);

    const defaultBtnActive = () => {
        document.getElementById('inputFile').click();
    }

    const checkFile = (event) => {
        const file = event.target.value
        const fileName = file.substring(file.lastIndexOf("\\") + 1)

        if (path.extname(file) !== '.json' && file !== "") {
            event.preventDefault()
            alert('Please upload .json file...!')
        }
        else {
            document.getElementById('content1').style = "display:none"
            document.getElementById('text').innerHTML = fileName
            document.getElementById('content2').style = "display:block"
        }
    }

    const submit = async (event) => {
        event.preventDefault()
        const inputFile = document.getElementById('inputFile')

        var data = new FormData()
        data.append('file', inputFile.files[0])
        axios.post('/course',data,{})
            .then((data) => {
                console.log(data)
                if (data.data) {
                    history.push('/dashboard')
                }
                else {
                    alert(data.data.error)
                }
            })
    }

    return (
        <>
            <div className="course-contain">
                <Sidebar />
                <div className="course-view">
                    <div className="file-container">
                        <div className="wrapper" onClick={defaultBtnActive}>
                            <div className="image">
                                <img alt="" />
                            </div>
                            <div className="content" id="content1">
                                <div className="icon">
                                    <i className="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div className="text">
                                    No file chosen, yet!
                                </div>
                            </div>
                            <div className="content" id="content2">
                                <div className="icon">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <div className="text" id="text">
                                </div>
                            </div>
                        </div>
                        <button onClick={defaultBtnActive} className="button" id="custom-btn">Choose a file</button>
                        <form encType="multipart/form-data" method="POST">
                            <input id="inputFile" type="file" onChange={checkFile} hidden />
                            <input type="submit" onClick={submit} className="button my-2" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course