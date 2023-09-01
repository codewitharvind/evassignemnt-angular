import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ItComponent {
  commonTitle = "See all";
  getCategoryArray: any = [];
  getScoreData: any = [];
  getSeverityButton: any = ["Critical", "High", "High", "High"];
  getScore: any = ["89%", "75%", "75%", "75%"];
  getUnitsArray: any = ["Unit A", "Unit B", "Unit C", "Unit D"];

  constructor(private services: DataService) { }

  ngOnInit() {
    window.history.pushState({}, '#', '/IT');
    this.services.getAllRiskData().subscribe((data: any) => {
      if (data.length > 0) {
        for (let i = 0; i <= 1; i++) {
          this.getCategoryArray.push(data[i]);
        }
        for (let i = 0; i <= 1; i++) {
          this.getCategoryArray.push(this.getCategoryArray[i]);
        }
      }

    });
  }
}
