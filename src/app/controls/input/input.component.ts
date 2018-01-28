import { Component, Input } from '@angular/core';
import { ControlBase } from '../../base/control/control-base.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['../../base/control/control-base.component.css', './input.component.css']
})
export class InputComponent extends ControlBase {
  @Input() type: string;

  constructor() {
    super();

    this.type = 'text';
  }
}
