export enum ChoiceType {
    Rock = "Rock",
    Paper = "Paper",
    Scissors = "Scissors"
}

export interface Choice {
    type: ChoiceType;
    icon: string;
    winCondition: ChoiceType;
}

export enum Outcome {
    Draw = "It's a draw..",
    Win = "You win!",
    Loss = "You lose!"
}
