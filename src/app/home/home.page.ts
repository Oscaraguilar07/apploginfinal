import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  espacioVisible: boolean = false;
  espacioVisibleProyecto: boolean = false;

  Multimedia() {
    this.espacioVisible = !this.espacioVisible;
  }

  proyectos() {
    this.espacioVisibleProyecto = !this.espacioVisibleProyecto;
  }

  

  constructor() { }

  ngOnInit() {
  }

}
