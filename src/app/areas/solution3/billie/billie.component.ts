import { Component } from "@angular/core";
import { SkeletonComponent } from "../skeleton.component";

/**
 * Solution 2:
 * Split every person up into different pages with one base page
 * that they all extend from to access functions that they all have in common
 *
 *  - Still need new components for the content + skeleton/container
 *  - Couldn't get showWarning signal to work in the person components
 *  + Using the same functions
 *  + Easy to read HTML
 *  + Easy to add new person
 *  + Much less repeating code
 */
@Component({
	selector: "app-billie",
	templateUrl: "./billie.component.html",
	styleUrls: ["../skeleton.component.scss"],
	imports: [SkeletonComponent],
	standalone: true
})
export class BillieComponent extends SkeletonComponent {

}
