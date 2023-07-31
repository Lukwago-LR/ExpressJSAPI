export default function enoughAirtime(strList, amount) {
    let l = strList.split(",");

    var cost = 0;
    for (var n of l) {
        let name = n.trim();
        if (name == "call") {
            cost += 1.88;
        } else if (name == "sms") {
            cost += 0.75;
        } else if (name == "data") {
            cost += 12;
        }
    }

    if (cost < amount) {
        return "R " + (amount - cost).toFixed(2);
    } else {
        return "R " + (0).toFixed(2);
    }
}