import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
	selector: 'app-sell',
	templateUrl: './sell.component.html',
	styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
	constructor(private _shintoService: ShintoService) { }
	title = 'Sell ShintoCoins'
	sellinfo: any;
	amount = 1;
	errors: any;

	ngOnInit() {
		this.sellInfo()
		console.log('after sellinfo!', this.sellinfo)
	}
	sellInfo() {
		let info = this._shintoService.purchaseInfo();
		console.log(info)
		this.sellinfo = info
		console.log(this.sellinfo)
	}
	sellCoins() {
		if(this.amount>this.sellinfo.balance){
			this.errors = "You can't sell what you don't have!"
			return
		}
		console.log('buy.comp buyCoins')
		this._shintoService.sellCoins(this.amount)
		this.sellInfo()
	}
}
