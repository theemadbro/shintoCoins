import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
	constructor(private _shintoService: ShintoService) { }
	title = 'Buy ShintoCoins'
	buyinfo = {}
	amount = 1;

	ngOnInit() {
		this.buyInfo()
		console.log('after buyinfo!', this.buyinfo)
	}
	buyInfo() {
		let info = this._shintoService.purchaseInfo();
		console.log(info)
		this.buyinfo = info
		console.log(this.buyinfo)
	}
	buyCoins() {
		console.log('buy.comp buyCoins')
		this._shintoService.buyCoins(this.amount)
		this.buyInfo()
	}

}
