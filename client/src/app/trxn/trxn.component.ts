import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShintoService } from '../shinto.service';


@Component({
	selector: 'app-trxn',
	templateUrl: './trxn.component.html',
	styleUrls: ['./trxn.component.css']
})
export class TrxnComponent implements OnInit {
	constructor(
		private _shintoService: ShintoService,
		private _route: ActivatedRoute,
		private _router: Router
 	) {}
 	title = 'Ledger Transactions Details'
 	details: any;
 	id: any;

	ngOnInit() {
		this._route.params.subscribe((params: Params) => this.id = params['id']);
		console.log('ITS THE IDDDDD', this.id)
		this.getDetails(this.id)
	}
	getDetails(id) {
		console.log('transaction getDetails',id)
		let info = this._shintoService.details(id)
		this.details = info
	}
}
