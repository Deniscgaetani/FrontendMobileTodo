import { Loading } from './../../services/todo/loading.service';
import { Ticket } from './../../models/ticket.model';
import { TodoService } from './../../services/todo/todo.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
 
  public items = [];
  tickets = new Array<Ticket>();
  list =[];
  
  constructor(public navCtrl: NavController
            , public modalCtrl: ModalController,
              public todoService: TodoService,
              private loading: Loading) {
 
  }
 
  ngOnInit() {
  this.initTodos();
  }
  ionViewDidLoad(){
 
  }
 public initTodos() {
   this.todoService.listAll().subscribe(results => {
     console.log(results);
     this.tickets = results;
   })
 }
   addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
  }
 
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
  async loadingList() {
    this.loading.show();

    try {
      this.initTodos();
    } catch (err) {
      console.log(err);
    }

    this.loading.hide();
  }

  refreshList(refresher) {
    console.log('Begin refresh', refresher);
    refresher.complete(); // stop loading

    this.loadingList();
  }

}