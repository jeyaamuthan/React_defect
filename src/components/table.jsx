import React, { Component } from 'react';
class Table extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Defect ID</th>
                            <th>Defect Name</th>
                            <th>Priority</th>
                            <th>Serverity</th>
                            <th>Assign person</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>abc</td>
                            <td>high</td>
                            <td>low</td>
                            <td>001</td>
                            <td>open</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>efg</td>
                            <td>low</td>
                            <td>high</td>
                            <td>003</td>
                            <td>finished</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>xyz</td>
                            <td>medium</td>
                            <td>medium</td>
                            <td>006</td>
                            <td>new</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>pqr</td>
                            <td>hihh</td>
                            <td>medium</td>
                            <td>010</td>
                            <td>open</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>lmn</td>
                            <td>high</td>
                            <td>medium</td>
                            <td>025</td>
                            <td>finished</td>
                        </tr>
                    </tbody>
                </table>

            </div>
         );
    }
}
 
export default Table;