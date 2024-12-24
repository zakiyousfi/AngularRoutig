import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detaillivre',
  templateUrl: './detaillivre.component.html',
  styleUrls: ['./detaillivre.component.css']
})
export class DetaillivreComponent implements OnInit {
  id="";
  titre="";
  auteur="";
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.titre=this.route.snapshot.params['titre']
    this.auteur=this.route.snapshot.params['auteur']

  }

}
