const generateDom=(n)=>{
let dom=``;
for(let i=1;i<=n*n;++i){
    dom+=`<div class="child"><input type="text" value="${i}"></div>`;
}
return dom
}

export default generateDom;