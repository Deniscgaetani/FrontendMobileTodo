import { Ticket } from './../../models/ticket.model';
import { TodoService } from './../../services/todo/todo.service';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
 
ticket = new Ticket();
 
  constructor(public navCtrl: NavController,
              public view: ViewController,
              public todoService: TodoService) {
 
  }
 
  saveItem(){
 
    // let newItem = {
    //   title: this.title,
    //   description: this.description
    // };
    /*     this.view.dismiss(newItem);
     */ 
    this.todoService
    .post(this.ticket)
    .subscribe((ticket) => {
      console.log(ticket);
      this.close();      
    }, (err) => {
      console.log(err);
    });

  }
 
  close(){
    this.view.dismiss();
  }
 
}