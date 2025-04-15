import { Component } from "@angular/core";
import { SkeletonComponent } from "../skeleton.component";
import { BaseComponent } from "../base.component";

/**
 * Solution 2:
 * Split every person up into different pages with one base page
 * that they all extend from to access functions that they all have incommon
 *
 *  - Still need new components for the content + skeleton/container
 *  + Using the same functions
 *  + Easy to read HTML
 *  + Easy to add new person
 *  + Much less repeating code
 */
@Component({
	selector: "app-theodora",
	templateUrl: "./theodora.component.html",
	styleUrls: ["../skeleton.component.scss"],
	imports: [
		SkeletonComponent
	],
	standalone: true
})
export class TheodoraComponent extends BaseComponent {

}
