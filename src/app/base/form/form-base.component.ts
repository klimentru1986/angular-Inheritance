import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';

export abstract class FormBase implements OnInit {
  /** Форма */
  public abstract form: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  /** Submit формы */
  public abstract onSubmit(): void;

  /** Инициализация формы */
  protected abstract initForm(): void;

  /** Отмечаем все контролы как touched */
  protected markAllControlsAsTouched(): void {
    Object.values(this.form.controls).forEach((control: FormControl) => {
      control.markAsTouched();
    });
  }
}
