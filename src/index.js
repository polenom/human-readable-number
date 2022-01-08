module.exports = function toReadable (num) {
    let numbersArray = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',''];
    let numbersTenArray = [0,0,'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let prepend = (num >= 100? (numbersArray[Math.trunc(num/100)]+' hundred '):'');
    if (num%100 === 0 && num != 0) {
        return prepend.slice(0,-1);
    }
    num = num%100;
    if (num < 20) {
        return prepend + numbersArray[num];
    } else if (num >= 20 && num < 100) {
        return prepend + numbersTenArray[Math.trunc(num/10)] + (num%10 == 0? '' : (' '+ numbersArray[num%10]));
    }
}
