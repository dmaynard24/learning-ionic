import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
    Generated class for the AddReviewPage page.

    See http://ionicframework.com/docs/v2/components/#navigation for more info on
    Ionic pages and navigation.
*/
@Component({
    selector: 'add-review-page',
    templateUrl: 'add-review-page.html'
})
export class AddReviewPage {

    title: any;
    description: any;
    rating: any;

    constructor(public viewController: ViewController) {}

    save(): void {
        let review = {
            title: this.title,
            description: this.description,
            rating: this.rating
        };

        this.viewController.dismiss(review);
    }

    close(): void {
        this.viewController.dismiss();
    }

}
