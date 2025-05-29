import { Component, signal } from "@angular/core";

/**
 * Solution 2: ng-content
 * Split every person up into different pages with one base page that tells where to put certain parts of the html
 * that they all extend from to access functions that they all have in common
 *
 *  - Still need new components for the content + skeleton/container
 *  - Couldn't get showWarning signal to work in the person components
 *  - Functions and variables needs to be public for content components to access
 *  + Using the same functions
 *  + Easy to read HTML
 *  + Easy to add new person
 *  + Much less repeating code
 *  + ng-content is used in the right way here,
 *    to create a child comp that changes looks depending on which parent uses it
 */
@Component({
	selector: "app-skeleton",
	templateUrl: "./skeleton.component.html",
	styleUrls: ["./skeleton.component.scss"],
	standalone: true
})
export class SkeletonComponent {

	readonly showWarning = signal<boolean>(false);

	protected toggleWarning(): void {
		console.log("toggle warning")
		this.showWarning.set(!this.showWarning());
	}

}
