export const translateNumberToString = (number) => {
    switch (number) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        default:
            return "zero";
    }
}

export const drawADice = () => {
    return Math.floor(Math.random() * 6) + 1;
}