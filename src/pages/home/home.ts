import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    users: any;
    constructor(public navCtrl: NavController, public restapiServiceProvider: RestapiServiceProvider) {
        this.getUsers();
    }

    getUsers() {
        this.restapiServiceProvider.getUsers()
        .then(data => {
            this.users = data;
            console.log(this.users);
        });
    }
}
