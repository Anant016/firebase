import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  editState:boolean=false;
  items: Item[];
  itemToEdit: Item;

  ngOnInit() {
    this.itemService.getItems().subscribe(items=>{
      //console.log(items);
      this.items = items;
    })
  }

  delItem(event,item:Item){
    this.clearState();
    this.itemService.delItem(item);
  }

  editItem(event,item:Item){
    this.editState=true;
    this.itemToEdit=item;
  }

  clearState(){
    this.editState=false;
    this.editItem=null;
  }

  updateItem(item:Item){
    this.itemService.updateItem(item);
    this.clearState();
  }


}
