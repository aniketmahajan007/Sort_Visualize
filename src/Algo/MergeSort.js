let quick_array,global_ani_arr=[],quick_dup=[];

function merge(states, leftArr, rightArr) {
    let sortedArr=[],temp,len=[],swap;
    while (leftArr.length && rightArr.length) {
        if (quick_dup[leftArr[0]] <= quick_dup[rightArr[0]]) {

            sortedArr.push(leftArr[0]);
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length)
        sortedArr.push(leftArr.shift());
    while (rightArr.length)
        sortedArr.push(rightArr.shift());

    for(let i=0;i<sortedArr.length;i++){
        swap=quick_dup[sortedArr[i]];


    }

    /*temp=quick_dup.indexOf(sortedArr[0]);
    if(temp!==-1){
        for(let i=0;i<quick_array.length;i++){
            if(temp<=i && (temp+sortedArr.length)>i){
                swap=quick_dup[i];
                quick_dup[i]=sortedArr[i-temp];

                len.push([quick_dup[i],'data_bar data_bar_green']);
            }else{
                len.push([quick_dup[i],'data_bar data_bar_purple']);
            }
        }
    }else{
        console.log(quick_dup,temp,sortedArr);
        for(let i=0;i<quick_array.length;i++){
            len.push([quick_dup[i],'data_bar data_bar_purple']);
        }
    }*/
    global_ani_arr.push(len);
    return sortedArr;
}
const amergeSort = (states,arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = amergeSort(states,arr.slice(0, mid)),
        right = amergeSort(states,arr.slice(mid));
     return merge(states, left, right);
};
function anim_oterate(states,i) {
    if(i<global_ani_arr.length){
        states.setState({
            array:global_ani_arr[i]
        });
        setTimeout(()=>{
            anim_oterate(states,++i);
        },states.state.speed);
    }
}
export default function MergeSort(states) {
    quick_array=[];
    for (let i = 0; i < states.state.array.length; i++) {
        quick_dup.push(states.state.array[i][0]);
        quick_array.push(i);
    }
    quick_array=amergeSort(states,quick_array);
    setTimeout(()=>{
        anim_oterate(states,0);
    },2000);
    /*let array=[];
    for (let i = 0; i < states.state.array.length; i++) {
        array.push([quick_array[i],'data_bar data_bar_purple']);
    }
    console.log(global_ani_arr);
    states.setState({
        array
    });*/
    //select_Caller(states,0,states.state.array.length);
}