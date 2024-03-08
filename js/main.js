const submitBtn=()=>{let e=document.getElementById("input-field"),t=e.value,l=parseInt(t),i=document.getElementById("data-show");if(i.innerText="",isNaN(l))alert("Please enter a valid number");else for(let n=1;n<=10;n++){let s=l*n;console.log("\uD83D\uDE80 ~ submitBtn ~ multiValue:",s);let a=document.createElement("div");a.classList="flex justify-center p-3 bg-gray-50 m-2 text-gray-600 rounded-sm",a.innerHTML=`
      <h2 class = "hind-siliguri  font-medium">${l} x ${n} = ${s} </h2>
      `,i.appendChild(a)}};
