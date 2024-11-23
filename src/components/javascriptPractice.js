    let a = 1;
    const add = () => a++
	console.log(add());
	console.log(add());
	console.log(add());

//    Situation :  But suppose you have a situation where you want to declare a 
//    variable inside the function only and increase its value..

    function addtion () {
        let a = 2;
        return ()=>{
           return a++
        }
        
    }
    const b = addtion();
    console.log(b());
    console.log(b());
    console.log(b());


    // Currying 

    const currying = (a)=> (b)=> a*b
    // const currying = a=> b=> a*b can be written this way also

    const price = currying(300);
    const discount = price(0.5) // 1st discount
    console.log(discount);

    const discount2 = price(0.6)
    console.log(discount2);