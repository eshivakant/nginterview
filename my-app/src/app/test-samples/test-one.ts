// user.service.ts
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  constructor(private authService: AuthService) {}
}


// auth.service.ts
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
}
