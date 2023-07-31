export default function totalPhoneBill(strList) {
    let l = strList.split(",");
    var cost = 0;
    for (var name of l) {
        if (name.includes("call")) {
            cost += 2.75;
        } else {
            cost += 0.65;
        }
    }

    return "R " + cost.toFixed(2);

}