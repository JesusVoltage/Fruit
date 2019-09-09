import { Component, OnInit } from '@angular/core';
import { FruitsPageModule } from './fruits.module';
import { Fruit } from '../../models/fruit.model';
import { FruitsService } from 'src/app/services/fruits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {

  public fruitsList : Fruit[];

  constructor(
    private frutita : FruitsService,
    private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.fruitsList = this.frutita.getFruits();
    console.log(this.fruitsList);
  }

  goToDetails(f: Fruit){
    const id = f.id;
    this.router.navigate(['details/'+id])
  };
}
