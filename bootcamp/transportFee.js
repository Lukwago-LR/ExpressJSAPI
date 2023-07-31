export default function transportFee(day) {
    let price = "";
    if (day == "morning") {
        price = "R20";
    } else if (day == "afternoon") {
        price = "R10";
    } else if (day == "other") {
        price = "free";
    } else {
        price = "Please choose a time";
    }
    return price;
}


