function isBounceing(param1,param2){


    if(param1.x - param2.x <= param2.width/2 + param1.width/2 
      && 
      param2.x - param1.x <= param2.width/2 + param1.width/2
      &&
      param2.y - param1.y <= param2.height/2 + param1.height/2
      &&
      param1.y - param2.y <= param2.height/2 + param1.height/2){
     
       return true;
  
    }else{
  
      return false;
  }
  
  
  
  }