import { useEffect } from "react"
import './course.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Course = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const callBack = async () => {
            const token = localStorage.getItem("token");
            await axios.post("https://study-buddy-bckend.herokuapp.com/auth", { token })
                .then((result) => {
                    if (!result.data.success)
                        navigate('/')
                })
        }
        callBack();
    }, [navigate]);

    const defaultBtnActive = () => {
        document.getElementById('inputFile').click();
    }

    function checkFile(event) {
        const file = event.target.value
        const fileName = file.substring(file.lastIndexOf("\\") + 1)
        const fileExtension = file.split('.').pop();
        if (fileExtension !== 'json' && file !== "") {
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
        data.append('token', localStorage.getItem('token'))
        axios.post('https://study-buddy-bckend.herokuapp.com/course', data,)
            .then((result) => {
                console.log(result)
                if (result.data.success){
                    console.log(result.data);
                    navigate('/home');
                }
                else
                    alert(result.data.error)
            })
    }

    return (
        <>
            <div className="course-contain">
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
