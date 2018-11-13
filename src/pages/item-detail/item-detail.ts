import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { TodoService } from './../../services/todo/todo.service';
import { Ticket } from './../../models/ticket.model';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  ticket = new Ticket();
  
 
  constructor(public navParams: NavParams,
              public todoService: TodoService,
              public navCtrl: NavController,
              public view: ViewController,){
 
  }
 
  ionViewDidLoad() {
    this.ticket._id = this.navParams.get('item')._id;
    this.ticket.title = this.navParams.get('item').title;
    this.ticket.description = this.navParams.get('item').description;
  }
 
  removeItem(){
    this.todoService
    .delete(this.ticket._id)
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