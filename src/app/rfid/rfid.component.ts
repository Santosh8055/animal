import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'rfid',
	templateUrl: './rfid.component.html',
	styleUrls: ['./rfid.component.scss']
})
export class RfidComponent implements OnInit {

	public details:any = {
		FarmerName: "",
		ContactNumber: 0,
		CattleType: "",
		State: "",
		District: "",
		Mandal: "",
		Village: "",
		InsuredAmount: 0,
		InsuredData: "",
		GovtShare: 0,
		FarmerShare: 0,
		PendingAmount: 0,
		NextPaymentDate: ""
	}

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getSheepByRfid().subscribe(data => {
			this.details = data;
			
		});
	}

}
