
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
	SNo: number;
	CName: string;
	CType: string;
	CPerson: string;
	State: string;
	District: string;
	CityTown: string;
	Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{
		SNo: 1, CName: 'USS', CType: 'Cow', CPerson: 'Ranadeep', State: 'TG', District: 'Kamareddy', CityTown: 'Kamareddy', Action: 'Edit/Delete'
	},
	{
		SNo: 2, CName: 'USS', CType: 'Sheep', CPerson: 'Mutyam', State: 'TG', District: 'Kamareddy', CityTown: 'Kamareddy', Action: 'Edit/Delete'
	},
	{
		SNo: 3, CName: 'USS', CType: 'Goat', CPerson: 'Satyam', State: 'TG', District: 'Kamareddy', CityTown: 'Kamareddy', Action: 'Edit/Delete'
	},
	{
		SNo: 4, CName: 'USS', CType: 'Cat', CPerson: 'Ratnam', State: 'TG', District: 'Kamareddy', CityTown: 'Kamareddy', Action: 'Edit/Delete'
	}

];


@Component({
	selector: 'app-view-insure-management',
	templateUrl: './view-insure-management.component.html',
	styleUrls: ['./view-insure-management.component.scss']
})
export class ViewInsureManagementComponent implements OnInit {

	displayedColumns: string[] = ['SNo', 'CName', 'CType', 'CPerson', 'State', 'District', 'CityTown', 'Action'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);

	@ViewChild(MatSort) sort: MatSort;

	ngOnInit() {
		this.dataSource.sort = this.sort;
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

}
