import { Injectable, isDevMode } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class AppInfoService {

	title = "Angular Template Experiments";
	version = "1.0.0";
	environment = isDevMode() ? "prod" : "dev";
	isDebug = isDevMode();

}
