import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.css']
})
export class IllustrationsComponent implements OnInit {
  workers: any = [

    'worker 1',

    'worker 2',

    'worker 3',

    'worker 4',

    'worker 5',

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
