import React, { useState, useEffect } from "react";

const url = "http://localhost:8000/api/v1/students";
function StudentsList() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return <div>{JSON.stringify(users)}</div>;
}
export default StudentsList;