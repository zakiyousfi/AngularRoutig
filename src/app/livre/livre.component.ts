import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  listelivre=[
    {id:'1',titre:'livre1',auteur:'auteur1'},
    {id:'2',titre:'livre2',auteur:'auteur2'},
    {id:'3',titre:'livre3',auteur:'auteur3'},

  ]
  constructor (){}
  ngOnInit(): void {
    
  }

}
