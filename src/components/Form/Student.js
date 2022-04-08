import React, { useState } from "react";
import {v4 as uuid} from "uuid";

function Student() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [birthday, setBirthday] = useState("");
//   const [group, setGroup] = useState("");
//   const [program, setProgram] = useState("");


  const handleSubmitTwo = (e) => {
      e.preventDefault();
      const student = {id:{uuid}, name, surname, birthday, city}
      console.log(student)
      setName("")
      setSurname("")
      setCity("")
      setBirthday("")
  }

  return (
   <>
   <div className="row ">
        <div className="col-6">
            <form onSubmit={handleSubmitTwo}>
                <div className="form">
                    <label>Vardas</label>
                    <input 
                    type="text" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </form>
        </div>
    </div>
    <form onSubmit={handleSubmitTwo}>
       <div className="form">
            <label>Pavarde</label>
            <input 
            type="text" 
            required 
            value={surname} 
            onChange={(e) => setSurname(e.target.value)}
            />
        </div>
   </form>

   <form onSubmit={handleSubmitTwo}>
       <div className="form">
            <label>Gimimo metai</label>
            <input 
            type="number" 
            required 
            value={birthday} 
            onChange={(e) => setBirthday(e.target.value)}
            />
        </div>
   </form>
   <form onSubmit={handleSubmitTwo}>
       <div className="form">
            <label>Miestas</label>
            <input 
            type="text"
            required 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            />
        </div>
   </form>
   </>
  );
}

export default Student;



















// <label>Programa</label>
// <select 
// value={program} 
// onChange={(e) => setProgram(e.target.value)}>
//     <option value="Javascript"></option>
//     <option value="Java"></option>
//     <option value="PHP"></option>
//     <option value="Programinės įrangos testuotoja's"></option>
//     <option value="Web dizainas"></option>
// </select>

// <label>Grupė</label>
// <select 
// value={group} 
// onChange={(e) => setGroup(e.target.value)}> 
// <option value="JS/21"></option>
//     <option value="J/21"></option>
//     <option value="PHP/21"></option>
//     <option value="PIT/21"></option>
//     <option value="WD/21"></option>
// </select>