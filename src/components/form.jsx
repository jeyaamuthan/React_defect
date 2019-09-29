import React, { Component } from 'react';
class Form extends Component {
    state = {}
    render() {
        return (
            <div>

                <form >
                    
                <table>
                    <tr>
                        <td>Defect ID</td>
                        <td> <input type="text" id="fid" name="Defect ID" placeholder="Enter id.." /></td>
                    </tr>
                    <tr>
                        <td>Defect Name</td>
                        <td><input type="text" id="dname" name="Defect Name" placeholder="Enter Defect name.." /></td>
                    </tr>
                    <tr>
                        <td>Priority</td>
                        <td><select id="priority" name="priority">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Serverity</td>
                        <td> <select id="serverity" name="serverity">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Assign person</td>
                        <td><select id="assign person" name="assign person">
                            <option value="001">001</option>
                            <option value="002">002</option>
                            <option value="003">003</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td><select id="status" name="status">
                            <option value="open">Open</option>
                            <option value="finished">Finished</option>
                            <option value="new">New</option>
                        </select></td>
                    </tr>
                    
                       
                   
                </table>
                <td><input type="submit" value="ADD" /></td>
           
                        <td>  <input type="submit" value="Clear" /></td>
                </form >

            </div >
        );
    }
}

export default Form;