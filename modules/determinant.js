function baseDeterminant (arr){
  
    return arr[0][0]*arr[1][1]-arr[1][0]*arr[0][1];
  }
  function remove(arr,index){
    const arr2=arr.map(row => [...row]);
    arr2.shift();
    for(let i=0;i<arr2.length;++i){
    arr2[i].splice(index,1)
    }
    return arr2
  }
  function determinant (arr){
    if(arr.length===2){
      return baseDeterminant(arr)
    }
    else{
      let sum=0;
      let toggle=1;
    
      for(let i=0;i<arr.length;++i){
          
        let l=remove(arr,i);
         
        sum+=arr[0][i]*toggle*determinant(l);
        toggle*=-1;
         
      }
     
      return sum
     
    }
  }

  export default determinant;