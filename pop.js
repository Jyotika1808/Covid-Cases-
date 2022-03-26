function  updatemap(){
    console.log("Updating map with realtime data")
    fetch("/data.json")
    .then(response=>response.json())
    .then(rsp=>{
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude

            nam= element.name
            infect=element.infected
            recover = element.recovered
            ded=element.dead

        new mapboxgl.Popup({
            width:300
            // font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
        })
        
         .setLngLat([longitude,latitude])
          .setHTML(`${nam}`)
         .setText(`${nam}`)
         .addTo(map);
         console.log(marker.getPopup());
        })
        
    })
}     