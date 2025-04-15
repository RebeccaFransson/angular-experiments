import { Component, signal } from "@angular/core";

/**
 * Solution 2:
 * Split every person up into different pages with one base page
 * that they all extend from to access functions that they all have incommon
 *
 *  - Still need new components for the content + skeleton/container
 *  - Couldn't get showWarning signal to work in the person components
 *  + Using the same functions
 *  + Easy to read HTML
 *  + Easy to add new person
 *  + Much less repeating code
 */
@Component({
	selector: "app-skeleton",
	templateUrl: "./skeleton.component.html",
	styleUrls: ["./skeleton.component.scss"],
	standalone: true
})
export class SkeletonComponent {

	protected readonly showWarning = signal<boolean>(false);

	protected toggleWarning(): void {
		console.log("toggle warning")
		this.showWarning.set(!this.showWarning());
	}

}
