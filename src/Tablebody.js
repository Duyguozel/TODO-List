import './App.css';
import React from 'react';
import { FaCheck } from "react-icons/fa";
import { BsXCircleFill } from "react-icons/bs";

class Tablebody extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <tbody>
                {list.map((item, index) => {
                    return (
                        <tr key={`product-${index}`}>

                            <td>{item.task}</td>
                            <td><button style={{color:'green'}}><FaCheck/></button></td>
                            <td><button style={{color:'red'}}><BsXCircleFill/></button></td>                           
                        </tr>
                        
                    );
                })}
            </tbody>


        );
    }


}

export default Tablebody;