import { Routes } from "@angular/router";

import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OlgaComponent as Solution1Olga} from "./solution1/olga/olga.component";
import { TheodoraComponent as Solution1Theodora } from "./solution1/theodora/theodora.component";
import { BillieComponent as Solution1Billie} from "./solution1/billie/billie.component";
import { OlgaComponent as Solution2Olga} from "./solution2/olga/olga.component";
import { TheodoraComponent as Solution2Theodora } from "./solution2/theodora/theodora.component";
import { BillieComponent as Solution2Billie} from "./solution2/billie/billie.component";
import { SkeletonComponent } from "./problem/skeleton.component";

export const AREAS_ROUTES: Routes = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
	{ path: "problem", component: SkeletonComponent },
	{ path: "solution1/theodora", component: Solution1Theodora },
	{ path: "solution1/olga", component: Solution1Olga },
	{ path: "solution1/billie", component: Solution1Billie },
	{ path: "solution2/theodora", component: Solution2Theodora },
	{ path: "solution2/olga", component: Solution2Olga },
	{ path: "solution2/billie", component: Solution2Billie },
	{ path: "error", component: ErrorComponent },
	{ path: "**", component: NotFoundComponent },
];

export const AREAS_COMPONENTS = [
	NavComponent,

	// pages
	HomeComponent,
	ErrorComponent,
	NotFoundComponent,
];
