import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-form',
    templateUrl: 'hero-form.component.html',
    styleUrls: ['hero-form.component.css']
})

export class HeroFormComponent implements OnInit {
    powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];
    model = new Hero(1, "Volakn", this.powers[0], "Chuck Street");
    submitted = false;


    constructor() { }

    onSubmit() {
        this.submitted = true;

    }

    get diagnostic() { return JSON.stringify(this.model); }
    ngOnInit() { }
}