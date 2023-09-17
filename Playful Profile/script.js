const menuToggle = document.querySelector(".menu");
const dropdownToggle = document.querySelector(".dropdown");



menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("clicked");
    dropdownToggle.classList.toggle("clicked");
});


const squares = document.querySelector("#squares").children;


for(let element of squares){
    element.classList.add("untapped");
}
let arr = [];
for(let element of squares){

    element.addEventListener("click",(event) =>{

        element.classList.remove("untapped");
        element.classList.add("tapped");

        let classname = element.getAttribute("class");
        let num = classname[7];
        if(!arr.includes(num)){
            arr.push(num);
        }
        console.log(...arr);
        if(num==9){
            console.log(...arr);

            let index = 0;
            function traverse(){
                // console.log(arr);
                if(index<arr.length){
                    squares[arr[index]-1].classList.remove("tapped"); 
                    squares[arr[index]-1].classList.add("untapped");
                    
                    index++;
                    setTimeout(() => traverse(), 400);

                }else{
                    arr = [];
                    return;
                }
            }
            
            traverse();
        }
    })
}
