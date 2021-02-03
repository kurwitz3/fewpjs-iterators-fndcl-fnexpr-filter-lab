function findMatching(drivers,string){
    return drivers.filter( x => {
        return x.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers,string){
    return drivers.filter(b => {
      return string.charAt(0) === b.charAt(0)
    })
}

function matchName(drivers,string){
    return drivers.filter(b => {
      return b['name']=== string
    })

}