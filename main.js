var consumed=''

function initialize(){
    getConsumable()
}

function getConsumable(){
    
    getConsumables("BalancedDemo", "set2", 1, function(data, err) {
        consumed = data[0]
        if (consumed===null){
            alert("There was a fatal error in the study, please return the HIT")
        }
        $('#condition').html(consumed)
        $('#main').show()
    })
}

function endStudy(){
    setConsumables("BalancedDemo", "set2",consumed)
    experimentComplete()
}