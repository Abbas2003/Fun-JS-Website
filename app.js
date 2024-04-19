function changeImage(image){
    console.log(image.src)
    var urlOne = "https://i.pinimg.com/736x/36/2e/0a/362e0ae5ced1d47299658bcb8f112040.jpg"
    var urlTwo = "https://upload.wikimedia.org/wikipedia/en/3/3d/Po_from_DreamWorks_Animation%27s_Kung_Fu_Panda.png"
    
    if(image.src == urlOne){
        image.src = urlTwo
    } else {
        image.src = urlOne
    }
}


var offBulb = "https://www.shutterstock.com/image-illustration/3d-illustration-light-bulb-isolated-600nw-749587456.jpg"
var onBulb ="https://st.depositphotos.com/2167093/2376/v/450/depositphotos_23761213-stock-illustration-glowing-yellow-light-bulb.jpg"

function switchOnOff(image){
    console.log(image)
    if(image.src == offBulb){
        image.src = onBulb
    } else {
        image.src = offBulb
    }
}
