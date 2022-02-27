import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
// import IconButton from '@mui/material/IconButton';


const DataFetching = () => {
    const [Data, setData] = useState([])

    const callBack = async () => {
        await axios.get("/fetchData")
            .then((result) => {
                return result.data
            })
            .then((data) => {
                if(!data)
                    document.getElementById('message').innerHTML="Please upload course schedule file sheet..."
                setData(data)
            })
    }

    useEffect(() => {
        callBack();
    }, []);

    return (
        <>
            {
                !Data.length ?
                    <h1 className="text-secondary alert-message" id="message" style={{ margin: "200px", height: "100vh", textShadow: "none", fontSize: "2rem" }}> </h1> :
                    <ul className="fetch-data">
                        {Data.map((data, index) => {
                            return (
                                <li key={index}>
                                    <Card className="card" style={{ width: "15rem" }}>
                                        <CardActionArea className="card-area">
                                            <CardHeader
                                                action={
                                                    <MoreVertIcon />
                                                }
                                            />
                                            <CardMedia
                                                component="img"
                                                image="https://picsum.photos/200/"
                                                alt="Card img"
                                                className="card-img-top"
                                            />
                                            <CardContent className="card-body">
                                                <Typography gutterBottom className="card-title text-primary" component="div">
                                                    {data.subject}
                                                </Typography>
                                                <Typography variant="body2" className="card-text" color="text.secondary">
                                                    {data.prof}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </li>
                            )
                        })}
                    </ul>
            }
        </>

    )
}

export default DataFetching