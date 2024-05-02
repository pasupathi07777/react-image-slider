


import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


const Slider = ({ url, page, limit }) => {
    let [imageg, setimage] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    let [loadimage,setloadimage]=useState(0)



    let fetchImage = async () => {
        try {
            setcallfunction(false)
            setLoading(true);
            const response = await fetch(`${url}?page=1&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setimage(data)

                console.log(imageg)
                setLoading(false);

            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
            console.log(errorMessage)
        }
    };

    let[callfunction,setcallfunction]=useState(false)
    callfunction &&  fetchImage();

    useEffect(() => {
        if (url !== "") {
            setcallfunction(true)
            // fetchImage()
          
       }
      
    },[url]);

  

    

    if (loading) {
        return <div>Loading please wait</div>;
    }
    if (errorMessage !== "") {
        return <div>Error Occurred! {errorMessage}</div>;
    }

    let leftarrow=()=>{
        setloadimage(loadimage===0?imageg.length-1:loadimage-1)


    }
    let rightarrow=()=>{
        setloadimage(loadimage===imageg.length-1?0:loadimage+1)


    }
    let dotbutton=(index)=>{
       setloadimage(index)


    }
    console.log(loadimage)
    return (
        <div className="container relative w-[100%] h-[60%] sm:h-[100%] my-auto sm:my-0">

            <div className="absolute flex justify-between  w-[100%] h-[30px] blur-3 text-white  top-[50%] px-3">
                <div className="left bg-white w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] text-black  flex justify-center items-center cursor-pointer sm:text-2xl " onClick={leftarrow}>
                    <FaArrowLeft   />
                </div>
                <div className="left bg-white w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] text-black  flex justify-center items-center  cursor-pointer sm:text-2xl " onClick={rightarrow}>
                <FaArrowRight />
                </div>
               

            </div>

            {imageg && imageg.length ?
                imageg.map((img, index) => (
                    <img className={index!==loadimage ?"d-none w-[100%] h-[100%]":"d-block w-[100%] h-[100%]"} key={img.id} src={img.download_url} width={100} alt="Slider" />


                ))
                :
                <p>No Image...</p>


            }
            <span className='button'>
                {imageg && imageg.length ?
                    imageg.map((_, index) => (
                        <button className={index===loadimage?"btn bg-gray-500" :"btn bg-white"} onClick={()=>dotbutton(index)} key={index}></button>


                    ))
                    :
                    <p>No Image...</p>}
            </span>

        </div>
    )
}

export default Slider
