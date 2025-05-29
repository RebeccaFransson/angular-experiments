import { AfterViewInit, Component, signal, ViewChild } from "@angular/core";
import { SkeletonComponent } from "../skeleton.component";

/**
 * Solution 2:
 * Split every person up into different pages with one base page
 * that they all extend from to access functions that they all have in common
 *
 *  - Still need new components for the content + skeleton/container
 *  - Annoying way to access skeletons variables
 *  - Cant get parents scss to import
 *  + Using the same functions
 *  + Easy to read HTML
 *  + Easy to add new person
 *  + Much less repeating code
 */
@Component({
	selector: "app-billie",
	templateUrl: "./billie.component.html",
	styleUrls: ["./billie.component.scss"],
	imports: [SkeletonComponent],
	standalone: true
})
export class BillieComponent implements AfterViewInit {

	@ViewChild("skeleton") skeletonComponent!: SkeletonComponent;

	protected showWarningInContent = signal<boolean>(false);

	ngAfterViewInit(){
		this.showWarningInContent = this.skeletonComponent.showWarning;
	}

}
