const updateStyle=(n)=>{
    document.querySelector(".container").style['grid-template-rows']=`repeat(${n}, 1fr )`;
    document.querySelector(".container").style['grid-template-columns']=`repeat(${n}, 1fr )`;
}

export default updateStyle;