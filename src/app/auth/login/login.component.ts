import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = "Ingresa a FoodStudy";
  email: string = "";
  password: string = "";

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  Submit(loginForm: any) {
    if (this.email.length == 0 || this.password.length == 0) {
      Swal.fire("", "Complete los campos necesarios. ", "info");
    } else {
      this.authService.validateUser(this.email, this.password).subscribe(r => {
        if (r.auth) {
          this.HomeRedirect();
        } else {
          Swal.fire("", "Correo y/o contraseña incorrecta.", "error");
        }
      });
    }
  }

  HomeRedirect() {
    this.router.navigate(["home/dashboard"]);
  }

}
