import { Component, signal } from "@angular/core";

enum Person {
	THEODORA = "Theodora",
	OLGA = "Olga",
	BILLIE = "Billie"
}

@Component({
	selector: "app-skeleton",
	templateUrl: "./skeleton.component.html",
	styleUrls: ["./skeleton.component.scss"],
})
export class SkeletonComponent {

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
