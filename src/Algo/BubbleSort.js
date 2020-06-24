let looper,swap,decreter,changed=false;
function finalsorter(arr,states,i) {
    const sortedArray = Array.from(arr);
    changed=false;
    if (sortedArray[i - 1][0] > sortedArray[i][0]) {
        changed=true;
        sortedArray[i][1]='data_bar data_bar_green';
        sortedArray[i-1][1]='data_bar data_bar_green';
        [sortedArray[i][0], sortedArray[i - 1][0]] = [sortedArray[i - 1][0], sortedArray[i][0]];
        swap = true;
        states.setState({
            array:sortedArray,
        });
    }
    looper++;
    if(looper<sortedArray.length-decreter){
        setTimeout(()=>{
            if(changed){
                sortedArray[i][1]='data_bar data_bar_purple';
                sortedArray[i-1][1]='data_bar data_bar_purple';
            }else{
                sortedArray[i][1]='data_bar data_bar_green';
                sortedArray[i-1][1]='data_bar data_bar_green';
            }
            states.setState({
                array:sortedArray,
                iterate: states.state.iterate+1
            });
            finalsorter(arr,states,looper);
        },states.state.speed);
    }else{
        if(swap){
            swappingis(states)
        }else{
            states.setState({
                running:false
            });
        }
    }
}
function swappingis(states){
    looper=1;
    swap=false;
    decreter++;
    finalsorter(states.state.array,states,looper);
}
export default function BubbleSort (states) {
    states.setState({
        running:true
    });
    looper=1;swap=false;decreter=-1;changed=false;
    swappingis(states);
};