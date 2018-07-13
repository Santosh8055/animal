import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-save-health',
	templateUrl: './save-health.component.html',
	styleUrls: ['./save-health.component.scss']
})
export class SaveHealthComponent implements OnInit {

	farmerDetails = {
		age: "",
		cattleType: "",
		disease: "",
		doctorName: "",
		farmerName: "",
		level: "",
		tag: "'",
		temperature: "",
		vaccine: "",
		weight: ""
	};

	constructor(private dataService: DataService) { }

	ngOnInit() {
	}

	postHealth() {
		console.log(this.farmerDetails);
		this.dataService.postHealth(this.farmerDetails).subscribe(() => {
			console.log('Health Posted');
			this.farmerDetails = {
				age: "",
				cattleType: "",
				disease: "",
				doctorName: "",
				farmerName: "",
				level: "",
				tag: "'",
				temperature: "",
				vaccine: "",
				weight: ""
			}
		});
	}

}
