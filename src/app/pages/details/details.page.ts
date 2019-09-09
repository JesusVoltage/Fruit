import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';
import { ActivatedRoute } from '@angular/router';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public name: any;
  public photo: string;
  public description: string;
  public id : number;

  constructor(
    private frutita : FruitsService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.getData();
  }

  getData(){
    const dataFruit = this.frutita.getFruits().filter(f => f.id === +this.id);
    this.name = dataFruit[0].name;
    this.photo = dataFruit[0].image;
    this.description = dataFruit[0].description;
  }
}
