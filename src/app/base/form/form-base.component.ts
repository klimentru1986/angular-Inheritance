import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export abstract class FormBase implements OnInit {
  /** Форма */
  public abstract form: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  /** Инициализация формы */
  protected abstract initForm(): void;
}
