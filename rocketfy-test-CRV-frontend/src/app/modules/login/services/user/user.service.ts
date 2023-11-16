import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../../models/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private keyUser: string = 'user';
  constructor() { }

  public validateUser(userCredential: {email: string, password: string}): Observable<IUser> {

    const user: IUser = {
      _id: '1234567890',
      nombre: 'Camilo Ernesto',
      apellido: 'Ruiz Vidal',
      telefono: '3186234042',
      email: userCredential.email
    };

    return of(user);

  }

  public registerUser(user: IUser): void {
    localStorage.setItem(this.keyUser, JSON.stringify(user));
  }

  public getDataUser(): IUser {

    const userDataString: string | null = localStorage.getItem(this.keyUser);

    return (userDataString)
          ? JSON.parse(userDataString)
          : {
            _id: '',
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
          };
  }

  public cleanUser(): void {
    localStorage.clear();
  }

}
