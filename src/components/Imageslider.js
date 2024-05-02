import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


const Slider = ({url,page,limit}) => {
    let [image, setimage] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);



    let fetchImage = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=1&limit=${limit}`);
            const data = await response.json();
            
            if (data) {
                setimage(data)
             
                 console.log(image)
                setLoading(false);
              
            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
            console.log(errorMessage)
        }
    };

    useEffect(() => {
        if (url !== "") {
            fetchImage();
        }
    }, [url]);

    if (loading) {
        return <div>Loading please wait</div>;
    }
    if (errorMessage !== "") {
        return <div>Error Occurred! {errorMessage}</div>;
    }
  return (
    <div className="container">
        {  console.log(image)}
        <FaArrowLeft />
        <FaArrowRight />
        {image && image.length?  
        image.map((img,index)=>(
            <img key={img.id} src={img.download_url} alt="Slider Image" />
          

        ))
        :
        // <p>No Image...</p>
        null
    }

    </div>
  )
}

export default Slider