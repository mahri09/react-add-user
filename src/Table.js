import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th></th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 

  // const handleDelete=(name)=>{
  //   console.log(props.deleteUser)
  //   props.deleteUser(name)
  // }

    return (
        <tbody>
          {props.users.map((user,index)=>{
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.job}</td>
                <td><button onClick={()=>props.deleteUser(user.name)}>Delete</button></td>
              </tr>
            )
          })}
          
        </tbody>
      )
}

class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody users={this.props.users} deleteUser={this.props.deleteUser}/>
        </table>
      )
    }
  }

export default Table;