import { Component, OnInit } from '@angular/core';
import { FormBase } from '../../base/form/form-base.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../base/form/form-base.component.css', './sign-up.component.css']
})
export class SignUpComponent extends FormBase implements OnInit {
  /** Форма */
  public form: FormGroup;
  /** Список регионов для селекта */
  public regionsList: string[];

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    this.regionsList = ['Белоруссия', 'Казахстан', 'Россия', 'Украина'];
  }

  /** Submit формы */
  public onSubmit() {
    if (this.form.invalid) {
      this.markAllControlsAsTouched();
      return;
    }

    console.log('form is valid');
  }

  /** Инициализация формы */
  protected initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      region: [null, [Validators.required]],
      acceptLicense: [false, [Validators.requiredTrue]]
    });
  }
}