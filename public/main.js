
navigator.geolocation.getCurrentPosition(async position => {
    const parrafo = document.querySelector('#parrafo')
    const {latitude, longitude} = position.coords

    try{
        const res = await fetch(`/lat/${latitude}/lon/${longitude}`)
        const data = await res.json()

        parrafo.innerHTML = `Pero donde estás hace ${parseInt(data.main.temp)} Cº`
        
        setInterval(async () => {
            const res = await fetch(`/lat/${latitude}/lon/${longitude}`)
            const data = await res.json()
            parrafo.innerHTML = `Pero donde estás hace ${parseInt(data.main.temp)} Cº`
        },60000)
        

    }catch(err){
        console.log(err)
    }

})
    



