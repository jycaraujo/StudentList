import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { Detail } from '../models/detail';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private detailsService: DetailsService) { }
  id;
  detail;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.detailsService.getDetail(this.id).then((detail: Detail) => {
        this.detail = detail;
      });
   });
  }

}
