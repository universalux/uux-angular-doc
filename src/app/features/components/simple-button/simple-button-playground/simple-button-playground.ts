import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { NgSimpleButton } from 'ng-simple-button'

type simpleButtonType = 'solid' | 'minimal' | 'outline';

@Component({
  selector: 'app-simple-button-playground',
  imports: [NgSimpleButton],
  templateUrl: './simple-button-playground.html',
  styleUrl: './simple-button-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonPlayground implements OnInit {

  // Component inputs
  type = signal<simpleButtonType>('solid');

  randomNumber = signal<number>(0);

  ngOnInit(): void {
    this.generateRandomNumber();
  }

  generateRandomNumber(){
    const number = Math.floor(Math.random() * 900) + 100;
    this.randomNumber.set(number);
  }

  handleTypeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    console.log(selectElement.value);
    this.type.set(selectElement.value as simpleButtonType);
  }
}
