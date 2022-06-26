
const {models} = require("./config/models");

let testNetwork = new models.MLPv2.Net(2);

testNetwork.whoAreYou();