import { Component } from "@angular/core";
import { CostHistoryService } from './cost-history.service';

@Component({
  selector: "cost-history",
  providers: [ CostHistoryService ],
  template: `
    <div class="component">
      <h2>Example</h2>
      <p>ExampleComponentです。</p>
    </div> 
    <cost-history-child [mizuho_data]="mizuho_data"></cost-history-child>
  `
})
export class CostHistoryComponent {
  mizuho_data: [{[index: string]: string;}] = [{}];

  constructor( private cost:CostHistoryService) { }

  ngOnInit() { 
    this.cost.getMizuho((response) => {
      console.log("result:" + response.data);
      this.mizuho_data = response.data;
    });
  } 
}
