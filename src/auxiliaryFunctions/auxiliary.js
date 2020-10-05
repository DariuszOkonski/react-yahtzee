const NumberOfDices = 5;
const numberOfeyes = 6;
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

const drawDice = () => {
    return Math.floor(Math.random() * numberOfeyes) + 1;
}

export const getInitialDices = () => {
    const dices = [];
    for (let i = 0; i < NumberOfDices; i++) {
        const dice = {
            id: i,
            active: true,
            number: drawDice()
        }
        dices.push(dice);
    }

    return dices;
}

export const getDices = (dices) => {
    let newDices = [...dices];
    newDices = newDices.map(dice => {
        return !dice.active ? dice : {...dice, number: drawDice()}
    });
    return newDices;
}