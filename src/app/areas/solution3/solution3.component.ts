import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";

enum Person {
	THEODORA = "Theodora",
	OLGA = "Olga",
	BILLIE = "Billie"
}

/**
 * Solution 3: ng-template
 * One page again, using ng-template to conditionally render the right elements
 *
 *  + No new components needed
 *  - Everything is one file - can get messy
 *  + Easy to read HTML since we put the ng-templates at the bottom
 *  + Using the same functions
 *  + Easy to add new person
 *  + No repeating code
 *  + not too far from the original code - easy to rewrite
 */
@Component({
	selector: "app-solution3",
	templateUrl: "./solution3.component.html",
	styleUrls: ["./solution3.component.scss"],
	imports: [CommonModule],
	standalone: true
})
export class Solution3Component {

	protected readonly Person = Person;
	protected readonly activePerson = signal<Person>(Person.THEODORA);
	protected readonly showWarning = signal<boolean>(false);

	protected changePerson(newActive: Person): void {
		this.activePerson.set(newActive);
	}

	protected toggleWarning(): void {
		this.showWarning.set(!this.showWarning());
	}

}
