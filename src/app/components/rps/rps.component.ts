import { Component, OnInit } from "@angular/core";
import { Choice, ChoiceType, Outcome } from "./rps.models";
import { RPSService } from "./rps.service";

@Component({
  selector: "app-rps",
  templateUrl: "./rps.component.html",
  styleUrls: ["./rps.component.scss"]
})
export class RPSComponent implements OnInit {
  public title: string;
  public choices: Choice[];
  public myChoice: Choice;
  public theirChoice: Choice;
  public outcome: Outcome;

  constructor(private rpsService: RPSService) {}

  ngOnInit() {
    this.choices = [
      { type: ChoiceType.Rock,
        icon: "✊",
        winCondition: ChoiceType.Scissors
      },
      { type: ChoiceType.Paper,
        icon: "🖐",
        winCondition: ChoiceType.Rock
      },
      { type: ChoiceType.Scissors,
        icon: "✌️",
        winCondition: ChoiceType.Paper
      }
    ];
    this.title = this.choices.map(c => c.type).join(" ");
  }

  public handleSelection(selectedChoice: Choice) {
    if (!this.myChoice) {
      this.myChoice = selectedChoice;
      this.theirChoice = this.rpsService.getRandomChoice(this.choices);
      this.outcome = this.rpsService.decideOutcome(this.myChoice, this.theirChoice);
    }
  }

  public reset() {
    this.myChoice = undefined;
    this.theirChoice = undefined;
    this.outcome = undefined;
  }

  public getOutcomeClass() {
    return this.outcome === Outcome.Win ? "win" : this.outcome === Outcome.Loss ? "loss" : "draw";
  }
}
