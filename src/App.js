import React, { useState } from "react";
import axios from "axios";

function App() {
  const [deg, setdeg] = useState(0);
  const [time, setTime] = useState("");
  const [des, setDes] = useState("");
  const [evalue, setEvalue] = useState("");

  function handlechange(e) {
    setEvalue(e.target.value);
  }

  function getWeather() {
    var st =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      evalue +
      "&appid=974cd2e16bdfb1f48044bcf88cd4d84a";
    var weatherdata = axios.get(st);
    weatherdata.then(function (response) {
      setdeg(response.data.main.temp);
      
      var Time= new Date(Date.now()+response.data.timezone*1000)

     

      setTime(Time.toLocaleTimeString());

      setDes(response.data.weather[0].main);

      // let template = "linear-gradient(to top, #ff0844 0%, #ffb199 100%)";
      let template =
        "linear-gradient(to bottom, #ffa751 0%, #ffc107 40%, #ff9800 80%, #d74000 100%)";
      document.body.style.background = template;
    });
  }

  return (
    <div className="flex justify-center h-[100vh] items-center">
      <div
        style={{
        //   backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%"
        backgroundImage: "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)",
          
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px rgba(0, 0, 0,0.1)",
          height: "200px",
          width: "500px",
        }}
        className="p-2 rounded-md shadow h-100"
      >
        <h1 className="text-2xl top-4 font-bold">Hey⛅!</h1>
        <p className="font-semibold">Do you want to know the weather report !!</p>
        <input
          onChange={handlechange}
          className="rounded-md h-6 text-sm p-1 mt-2 outline-none "
          placeholder="City Name"
          type="text"
        />
        <br />
        <button
          onClick={getWeather}
          className="bg-black text-white rounded-md p-1 mt-2 text-xs  hover:bg-red-500 "
        >
          Get Report⚡
        </button>

        <p className="text-lg mt-2 ">
          Celsius : {deg} | Time : {time} | Weather : {des}
        </p>
      </div>
    </div>
  );
}

export default App;

