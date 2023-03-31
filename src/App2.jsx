import React, { Component } from 'react'
import JSON from "./task.json"

class App2 extends Component {

  constructor()
  {
    super()
    this.state={
        jsonData : JSON
    }
  }
  render() 
  {
    return (
      <table border={"1px"}>
        <tr>
          <th>EMP_ID</th>
          <th>EMP_NAME</th>
          <th>EMP_SAL</th>
          <th>EMP_DESIG</th>
          <th>EMP_GENDER</th>
          <th>EMP_EDUCATION</th>
          <th>EMP_EXPERIENCE</th>
          <th>EMP_COMPANIES</th>
          <th>EMP_IMAGE</th>
          <th>EMP_SKILLS</th>
          <th>EMP_CITY</th>
        </tr>
        {this.state.jsonData.map((x)=>{
            return(
              <tr>
                <td>{x.empId}</td>
                <td>{x.empName}</td>
                <td>{x.empSal}</td>
                <td>{x.empDesig}</td>
                <td>{x.empGender}</td>
                <td>{x.empEdu}</td>
                <td>{x.empExp}</td>
                <td>
                    Previous: {x.empCompanies.previous}
                </td>
                <td>
                    <img src={x.empImg} alt="" height={"100px"} width={"100px"}/>
                </td>
                <td>
                    {x.empSkills.map((x)=>{
                        return <li>{x}</li>
                    })}
                </td>
                <td>{x.empCity}</td>
              </tr>
            )
        })}
      </table>
    )
  }
}
export default App2