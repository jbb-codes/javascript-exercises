const removeFromArray = function(array, ...theArgs) {

    for(let arg of theArgs){
        for(i = 0; i < array.length; i++){
            if(array[i] === arg){
                array.splice(i, 1);
                --i;
            }            
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
