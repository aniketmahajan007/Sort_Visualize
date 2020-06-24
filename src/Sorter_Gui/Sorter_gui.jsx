import React, {Component} from "react";
import BubbleSort from "../Algo/BubbleSort";
import QuickSort from "../Algo/Quick Sort";
import SelectionSort from "../Algo/SelectionSort";

class SorterGui extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array:[],
            iterate:0,
            running: false,
            speed:20
        }
    }
    componentDidMount() {
        this.reset_array();
    }
    reset_array = () => {
        let array=[],i;
        for(i=0;i<60;i++){
            array.push([getRndInteger(4,500),'data_bar data_bar_purple'])
        }
        this.setState({array:array,iterate:0})
    };
    bubblesort = () => {
        BubbleSort(this);
    };
    selection_sort = () => {
        SelectionSort(this);
    };
    quicksort = () => {
        QuickSort(this);
    };
    changeSec= () => {
        if(this.state.running){
            alert('You can\'t change speed while sorting is in progress');
            return;
        }
        let val;
        val = prompt("Please Enter Speed ( MS )");
        if(val==""){return;}
        if(val!=parseInt(val)){
            alert('Not a Valid Second');
            return;
        }
        val=parseInt(val);
        if(val<10||val>5000){
            alert('Please enter speed in between 10 to 5000 ( MS )');
            return;
        }
        this.setState({
            speed:val
        })
    };
    render() {
        const center={textAlign:'center'};
        return (
            <div>
                <button disabled={this.state.running} onClick={this.reset_array} className="gen_new_array shift_left">Generate New Array</button>
                <button disabled={this.state.running} onClick={this.bubblesort}  className="merge_sort shift_left">Bubble Sort</button>
                <button disabled={this.state.running} onClick={this.quicksort}  className="merge_sort shift_left">Quick Sort</button>
                <button disabled={this.state.running} onClick={this.selection_sort}  className="merge_sort shift_left">Selection Sort</button>
                <br/> <br/>
                {this.state.array.map((value,index) => (
                    <div className={value[1]} style={{height: `${value[0]}px`}} key={index}>
                    </div>
                ))}
                <h3 style={center}>Iterate ( Comparison ): {this.state.iterate} Times</h3>
                <h3 onClick={this.changeSec} style={center}>Speed: {this.state.speed} MS / Iterate</h3>
            </div>
        );
    }
}

SorterGui.propTypes = {};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export default SorterGui;