import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmailIdValidator {
    static isEmailIdExist(control: AbstractControl): Promise<ValidationErrors | null> {
        let val = control.value as string
        let promise = new Promise<ValidationErrors | null>(resolve => {
            setTimeout(() => {
                if (val === 'jhon@gmail.com') {
                    resolve({
                        emailIdExists: 'This email id is already in use.'
                    })
                } else {
                    resolve(null)
                }
            }, 3000)
        })
        return promise;
    }
}