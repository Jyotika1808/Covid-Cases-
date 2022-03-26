function  updatemap(){
    console.log("Updating map with realtime data")
    fetch("/data.json")
    .then(response=>response.json())
    .then(rsp=>{
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude
             
            nam=element.name
            ded=element.dead
            rec=element.recovered
            cases = element.infected;
            if (cases>255) 
               color = "rgb(255,0,0)"

            else if(cases<50)
               color= "rgb(0,150,0)"
            else
                color =`rgb(${cases},0,0)`;  

            // mark on map 
            new mapboxgl.Marker({
                draggable: false,
                color:color
                })
                .setLngLat([longitude,latitude])
                // .settext(`${cases}`)
                .setPopup(new mapboxgl.Popup().setHTML(`CITY : ${nam} , CASES : ${cases} , RECOVER : ${rec} , DEAD : ${ded}`))
                .addTo(map);
                       
        });
    })
    
} 
    let interval = 2000
    setInterval(updatemap,interval)
    
    