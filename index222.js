let x = {
    a: 1,
    b: {
      b: {
        name: "sagar",
      },
    },
  };
  //not using spread operation

  let y={}
  function clonning(x,size,i){
    if(i==size) return
    for(let key in x){
      if(x.hasOwnProperty(key))
     if(typeof key==Object){
       clonning(x[key])
     }
   
       y[key]=x[key]
    
    

  }
  }
  clonning(x,Object.keys(x).length,0)
  
  y.b.b.name="one"
  console.log(y)
  console.log(x)


  
  