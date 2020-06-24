let quick_array;
function state_color(arr,color,y,z) {
    let array=[];
    for(let i=0;i<quick_array.length;i++){
        if(y==-1&&z==-1){
            array.push([arr[i],color]);
        }else{
            if(y==i||z==i){
                array.push([arr[i],color]);
            }else{
                array.push([arr[i],'data_bar data_bar_purple']);
            }
        }
    }
    return array
}
function getMax(arr) {
    let max = 0;
    for (let num of arr) {
        if (max < num.toString().length) {
            max = num.toString().length
        }
    }
    return max
}
function getPosition(num, place){
    return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10
}
function innerloop(i,j,buckets,states,arr) {
    if(j<arr.length){
        buckets[getPosition(arr[ j ], i)].push(arr[ j ]);
        setTimeout(()=>{
            states.setState({
                array: state_color(buckets,'data_bar data_bar_green',i,j),
                iterate:states.state.iterate+1
            });
            innerloop(i,++j,buckets,states,arr);
        },states.state.speed);
    }else{
        quick_array = [ ].concat(...buckets);
        states.setState({
            array: state_color(quick_array,'data_bar data_bar_red',-1,-1),
        });
    }
}

function outer_loop(i,max,states){
    let arr=quick_array;
    if(i<max){
        let buckets = Array.from({ length: 10 }, () => [ ]);
        innerloop(i,0,buckets,states,arr);
        setTimeout(()=>{
            states.setState({
                array: state_color(quick_array,'data_bar data_bar_purple',-1,-1),
                iterate:states.state.iterate+1
            });
            outer_loop(++i,max,states);
        },(states.state.speed*1.5)*quick_array.length);
    }else{
        states.setState({
            array: state_color(quick_array,'data_bar data_bar_purple',-1,-1),
            running:false
        });
    }
}



function radSort(states) {
    const max = getMax(quick_array); // length of the max digit in the array
    outer_loop(0,max,states);
}
export default function Radix_Sort(states) {
    quick_array=[];
    for (let i = 0; i < states.state.array.length; i++) {
        quick_array[i]=states.state.array[i][0];
    }
    states.setState({
        running:true
    });
    radSort(states);

}