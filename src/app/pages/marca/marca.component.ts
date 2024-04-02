import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css',
})
export class MarcaComponent {
  form: FormGroup;
  @ViewChild('denomInput') denomInput!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      denom: ['', Validators.required],
      abr: ['', Validators.required],
    });
  }

  public resetForm() {
    this.form.reset();
    this.denomInput.nativeElement.focus();
  }

  public onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    } else {
      window.alert('Formulario inválido');
    }
  }
}
