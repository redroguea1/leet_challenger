



var carFleet = function(target, position, speed) {
    let fleets= []//stack to be returned;
    
    //if position+speed = target add to output fleet. 
    
    //while loop?? instead
    
    //version 1 failure 
    for(let i =0; i< position.length; i++){
        //which cars are going to hit the target at the same time. 
        //i=0 //10+2 == 8+4 = becomes 1 FLEET  
        //i=1 //8+4 != 0+1 = stays 2 fleets
        //i=2 //0+1 != 5+1 == stays 2 fleets
        //i=3 //5+1 == 3+3 3 fleets
        //IF it hits target or is equal add to a stack. 
        if(position[i]+speed[i] == target){
                        
            
        }
        if(i+1 >= position.length) {
            //something
        }
        if(position[i]+speed[i] == position[i+1]+speed[i+1]){
            
        }
    }
   return sleets.length
};
