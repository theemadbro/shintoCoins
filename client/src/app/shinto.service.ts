import { Injectable } from '@angular/core';
var trxID = 1

@Injectable({
  providedIn: 'root'
})
export class transaction {

	constructor(
		public type: string,
		public amount: number,
		public value: number,
		public id = trxID++,
		public created_at: Date = new Date()
	) {}
}
export class ShintoService {
	constructor() { }
	balance = 0;
	value = 1;
	transactions = [];
	single: any;

	purchaseInfo() {
		return {balance:this.balance, value:this.value}
	}
	trxnList() {
		return this.transactions
	}
	details(id) {
		console.log('shinto details',id)
		this.single = this.transactions.find(x => x.id == id)
		console.log('single, should be one object...', this.single)
		return this.single	
	}
	buyCoins(amt) {
		console.log('shinto buyCoins')
		this.balance += amt
		this.value += amt
		let newtrans = new transaction('Buy', amt, this.value)
		this.transactions.push(newtrans)
		return
	}
	sellCoins(amt) {
		console.log('shinto sellCoins')
		this.balance -= amt
		this.value -= amt
		let newtrans = new transaction('Sell', amt, this.value)
		this.transactions.push(newtrans)
		return
	}
	mineCoin() {
		this.balance += 1
		this.value += 1
		let newtrans = new transaction('Mine', 1, this.value)
		this.transactions.push(newtrans)
		return
	}

}



