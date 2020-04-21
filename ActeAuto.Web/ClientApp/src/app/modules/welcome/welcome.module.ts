import { WelcomeComponent } from "./pages";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        WelcomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
})
export class WelcomeModule { }
