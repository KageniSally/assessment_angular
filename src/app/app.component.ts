import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TalkativeDirective } from './Directives/talkative.directive';
import { Outcomes } from '../Models/outcomes';
import { ErrorMessagePipe } from './Pipes/error-message.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TalkativeDirective, CommonModule, FormsModule, ErrorMessagePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  title = 'Adventure';

  results: string = ''
  inputs: string[] = []
  input: string = ''

  outComes: Outcomes[] = [
    { result: "Win" }, { result: "Lose" }, { result: "Tie" }, { result: "Try Again" }
  ]

  getResult() {
    const outcomesIndex = Math.floor(Math.random() * 3);
    const messageId = outcomesIndex
    this.results = this.outComes[outcomesIndex].result
  }

  addInput() {
    this.inputs.push(this.input)
    console.log(this.input)
  }


}
