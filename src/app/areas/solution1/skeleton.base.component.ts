import { signal } from "@angular/core";

/**
 * Solution 1: Each own HTML template
 * Split every person up into different pages with one base Angular component
 * that they all extend from to access functions that they all have in common
 *
 *  - A lot of repeating in the HTML template
 *  + Using the same functions
 *  + Easy to read HTML
 *  + Easy to add new person
 *  + Hard to accidentally change a persons layout when you wanted to change another persons layout
 */
export class SkeletonBaseComponent {

	protected readonly showWarning = signal<boolean>(false);

	protected toggleWarning(): void {
		this.showWarning.set(!this.showWarning());
	}

}
