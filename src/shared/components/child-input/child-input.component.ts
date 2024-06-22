import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SetGetService } from '../../services/set-get.service';

@Component({
  selector: 'app-child-input',
  standalone: true,
  imports: [],
  templateUrl: './child-input.component.html',
  styleUrl: './child-input.component.scss'
})
export class ChildInputComponent {
  @Input() inputPassing!: string;
  @Output() outputPassing = new EventEmitter<string>();
  setValue!: string;
  constructor(public setget: SetGetService) { }
  outEvent(): void {
    this.setValue = this.setget.getFirstValue();
    this.outputPassing.emit('Child to Parent Communication');
  }

}
