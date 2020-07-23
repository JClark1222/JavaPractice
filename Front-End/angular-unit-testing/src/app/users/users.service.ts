import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

getUsers() {
  const users = ['Jairus'];
  return users;
  }
}
