import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _rest: RestService, public _state: StateService) { }

  ngOnInit(): void {
    this._rest.getallstock().subscribe(response => {
      console.log(response);
      this._state.stock = response as any;
    }, error => {
      console.log(error);
    });
  }

}
