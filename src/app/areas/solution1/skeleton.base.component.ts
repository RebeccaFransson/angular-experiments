import { signal } from "@angular/core";

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
export class SkeletonBaseComponent {

	protected readonly showWarning = signal<boolean>(false);

	protected toggleWarning(): void {
		this.showWarning.set(!this.showWarning());
	}

}
