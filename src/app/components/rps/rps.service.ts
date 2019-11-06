import { Choice, Outcome } from "./rps.models";

export class RPSService {
    getRandomChoice(choices: Choice[]): Choice {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
    decideOutcome(myChoice: Choice, theirChoice: Choice): Outcome {
        if (myChoice.type === theirChoice.type) {
            return Outcome.Draw;
        }
        if (myChoice.winCondition === theirChoice.type) {
            return Outcome.Win;
        }
        return Outcome.Loss;
    }
}
