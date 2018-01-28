import { Component, OnInit, Input } from '@angular/core';
import { ControlBase } from '../../base/control/control-base.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css', '../../base/control/control-base.component.css']
})
export class SelectComponent extends ControlBase {
  @Input() options: string[];

  constructor() {
    super();
  }
}
