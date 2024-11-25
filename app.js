var a = document.querySelectorAll(".box")
var num=0
var xlog = []
var olog = []
var list1 = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
for(let x of a){
    x.addEventListener(("click"),()=>{
        y=x.innerText.length
        if(y===0){
            if ((num%2)==0){
                x.innerText="X"
                xlog.push(Number(x.dataset.number))
                console.log(xlog);
                for (let z of list1){
                    let count = 0
                    for(let zz of z){
                        if((xlog.includes(zz)==true)){
                            count+=1
                            if (count===3){
                                console.log("you won")
                                document.querySelector(".main").style.display="flex"
                                document.querySelector(".main").innerText="You Won X"

                            }
                        }
                    }
                }
        
            }
            if ((num%2)!=0){
                x.innerText="O"
                olog.push(Number(x.dataset.number))
                for (let z of list1){
                    let count = 0
                    for(let zz of z){
                        if((olog.includes(zz)==true)){
                            count+=1
                            if (count===3){
                                console.log("you won")
                                document.querySelector(".main").style.display="flex"
                                document.querySelector(".main").innerText="You Won O"
                            }
                        }
                    }
                }
            }
            num+=1
        }
        if (y>0){
            x.innerText=""
            num-=1
        }

    })
}
