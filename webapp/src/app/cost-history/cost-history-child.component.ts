import { Component, Input } from '@angular/core';

declare var $;

@Component({
  selector: 'cost-history-child',
  template: `
    <p> {{mizuho_data[0].date}}.</p>
    <table id="example" class="display" width="100%"></table>
  `
})
export class CostHistoryChildComponent {
  @Input('mizuho_data') mizuho_data: [{[index: string]: string;}];

  ngOnInit() {
    console.log("ngOnInit mizuho_date:" + JSON.stringify(this.mizuho_data));
  }

  ngOnChanges() {
    this.mizuho_data.forEach(function(value, index){
      console.log( value.memo);
    });
    console.log("ngOnChanges mizuho_date:" + JSON.stringify(this.mizuho_data));

    let dataSet: string[][] = [
    [ "Tiger Nixon11", "", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Tiger Nixon", "", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant11", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ]
];

      $('#example').DataTable( {
        data: dataSet,
        destroy: true,
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
      
      });
  }
}
