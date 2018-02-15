import { Component, OnInit, Input } from '@angular/core';
import { ControlBase } from '../../base/control/control.base';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['../../base/control/control.base.css', './select.component.css']
})
export class SelectComponent extends ControlBase {
  @Input() options: string[];

  constructor() {
    super();
  }
}
