import './App.css';
import React from 'react';
import Tablethead from './Tablethead';
import Tablebody from './Tablebody';


class Table extends React.Component {
    render() {
       const { data } = this.props;
       console.log("TASK ==> ", this.props.data)
        return (
            <table>
                <Tablethead />
                <Tablebody list={data}/>
                <br></br>    
            </table>
           

        );
    }


}

export default Table;