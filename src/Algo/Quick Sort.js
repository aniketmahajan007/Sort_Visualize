let quick_array=[],quick_pi;
function quick_swap(states,a,b){
    let temp=quick_array[a],newarray=[];
    quick_array[a]=quick_array[b];
    quick_array[b]=temp;
    for (let i = 0; i < quick_array.length; i++) {
        if(a===i||b===i){
            newarray.push([quick_array[i],'data_bar data_bar_green']);
        }else{
            newarray.push([quick_array[i],'data_bar data_bar_purple']);
        }
    }
    states.setState({
        array:newarray
    })
}
function part_two(j,states,low, high,iiii){
    states.setState({
        iterate:states.state.iterate+2
    });
    let pivot = quick_array[high];
    if(j <= high- 1){
        if (quick_array[j] < pivot) {
            iiii++;
            quick_swap(states,iiii,j);
        }
        setTimeout(()=>{
            part_two(++j,states,low, high,iiii);
        },states.state.speed);
    }else{
        quick_swap(states,iiii+1,high);
        quick_pi=(iiii + 1);
        quick(states,low, quick_pi - 1);
        quick(states,quick_pi + 1, high);
    }
}
function partition (states,low, high) {
    part_two(low,states,low,high,(low-1));
}
function quick(states,low, high) {
    if (low < high) {
        partition(states,low, high);
    }
}
export default function Quick_Sort(states) {
    quick_array=[];quick_pi=0;
    for (let i = 0; i < states.state.array.length; i++) {
        quick_array[i]=states.state.array[i][0];
    }
    quick(states,0,quick_array.length-1);
}