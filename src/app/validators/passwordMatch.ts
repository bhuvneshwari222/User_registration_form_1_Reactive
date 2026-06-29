import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidator {
    static passwordMatch(control: AbstractControl): ValidationErrors | null {
        let password = control.parent?.get('password')?.value;
        let confirmPass = control.value;
        if (password === confirmPass) {
            return null;
        }
        return {
            passwordMismatch: true
        }
    }
}