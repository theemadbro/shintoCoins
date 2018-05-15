import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
	selector: 'app-ledger',
	templateUrl: './ledger.component.html',
	styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
	constructor(private _shintoService: ShintoService) { }
	title = 'Transaction History'
	TRXs: any;

	ngOnInit() {
		this.getInfo()
	}
	getInfo() {
		let info = this._shintoService.trxnList()
		this.TRXs = info
		console.log(this.TRXs)
	}
	getDetails(id) {
		console.log(this.TRXs.find(x => x.id === id))
		return this.TRXs.find(x => x.id === id)
	}

}
