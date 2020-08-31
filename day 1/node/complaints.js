const Consts = require("./consts")
const handleComplaint = require("./complaintsHandler")

let complaint1 = {
    text: "I'm not getting enough money",
    type: Consts.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: Consts.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: Consts.EMOTIONS
}

handleComplaint.handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaint.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaint.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."




