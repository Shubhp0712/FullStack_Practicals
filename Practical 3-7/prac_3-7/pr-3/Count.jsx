import React,{useState,useEffect, use} from "react";

function Count() {
    const[currentTime,setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = `${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`;


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to CHARUSAT!!!!</h1>
            <p className="text-2xl mb-2">it is {formattedDate}</p>
            <p className="text-2xl ">it is {formattedTime}</p>
        </div>
    );
}

export default Count;
