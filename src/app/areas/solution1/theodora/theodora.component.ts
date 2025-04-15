import { Component } from "@angular/core";
import { SkeletonBaseComponent } from "../skeleton.base.component";

/**
 * Solution 1:
 * Split every person up into different pages with one base page
 * that they all extend from to access functions that they all have incommon
 *
 *  - A lot of repeating in the HTML template
 *  + Using the same functions
 *  + Easy to read HTML
 *  + Easy to add new person
 */
@Component({
	selector: "app-theodora",
	templateUrl: "./theodora.component.html",
	styleUrls: ["../skeleton.base.component.scss"],
})
export class TheodoraComponent extends SkeletonBaseComponent {

}
