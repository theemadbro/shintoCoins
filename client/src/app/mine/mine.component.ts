import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
	constructor(private _shintoService: ShintoService) { }
	title = 'Mine ShintoCoins';
	check: boolean;
	msg = []

	ngOnInit() {
	}
	mineCoin() {
		console.log('mineCoin clicked!')
		let mine = this._shintoService.mineCoin()
		this.msg.push('coin got!')
	}

}
