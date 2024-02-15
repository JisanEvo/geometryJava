
// step 1:
// get base value

function  calculateTriangleArea(){
    // get traiangle base
    const triangleBaseInput=  document.getElementById(`triangle-base`);
    const triangleBaseText=triangleBaseInput.value;
    const base=parseFloat(triangleBaseText);
    console.log(base)
    // get triangle height
    const triangleHeightInput=document.getElementById(`triangle-height`);
    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText);
    console.log(height)

    const Area=0.5*base*height;
    console.log(`area of the triagle`,Area)
    // display triangle area
    const triangleArea=document.getElementById(`triangle-area`);
    triangleArea.innerText=Area;
}