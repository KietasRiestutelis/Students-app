import React from 'react'


function StudentRow({name, surname, birthdate, program,group,town,id}) {
  return (
    <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{birthdate}</td>
        <td>{program}</td>
        <td>{town}</td>
        <td>{group}</td>
        <td><button>Update</button></td>
        <td><button>Delete</button></td>
    </tr>
  )
}

export default StudentRow