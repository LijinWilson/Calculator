function display(num){
    result.value+=num
}
function allclear(){
    result.value=""
}
function evaluateexp(){ //eval is an inbuilt fn used to exicute the arithmetuc operaion
    exp=result.value
    res=eval(exp)
    result.value=res

}
function removeelement(){
    cur_exp=result.value
    result.value=cur_exp.slice(0,-1)

}