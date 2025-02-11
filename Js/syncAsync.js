function test(params) {
     console.log("start");
     setTimeout(() =>{
          console.log("01");
          
     }, 6000)
     setTimeout(() =>{
          console.log("02");
          
     }, 5000)
     setTimeout(() =>{
          console.log("03");
          
     }, 4000)
     setTimeout(() =>{
          console.log("04");
          
     }, 5000)
     console.log("End");
     
}
test();