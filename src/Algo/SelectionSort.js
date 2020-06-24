function under_s_caller(min,states,i,j,len,array){
    if(j<len){
        if (array[min][0] > array[j][0]) {
            min = j;
            array[j][1]='data_bar data_bar_red';
            array[j][1]='data_bar data_bar_red';
        }else{
            array[j][1]='data_bar data_bar_green';
            array[j][1]='data_bar data_bar_green';
        }
        setTimeout(()=>{
            states.setState({
                iterate:states.state.iterate+1,
                array
            });
            under_s_caller(min,states,i,++j,len,array);
        },states.state.speed);
    }else{
        if (min !== i) {
            let tmp = array[i][0];
            array[i][0] = array[min][0];
            array[min][0] = tmp;
        }
        for (let z=0;z<len;z++){
            array[z][1]='data_bar data_bar_purple';
        }
        setTimeout(()=>{
            states.setState({
                iterate:states.state.iterate+1,
                array
            });
            select_Caller(states,++i,len);
        },states.state.speed);
    }
}

function select_Caller(states,i,len){
    if(i<len){
        let array=states.state.array;
        under_s_caller(i,states,i,i+1,len,array);
    }else{
        setTimeout(()=>{
            states.setState({
                running:false
            });
        },states.state.speed);
    }
}
export default function SelectionSort(states) {
    states.setState({
        running:true
    });
    select_Caller(states,0,states.state.array.length);
}