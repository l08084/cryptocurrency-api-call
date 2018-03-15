import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitFlyerService } from './services/bit-flyer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response: Observable<String>;
  constructor(
    private bitFlyerService: BitFlyerService,
  )  {
    this.response = this.bitFlyerService.getBoard();
  }

}
