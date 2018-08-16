import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Criteria, CriteriaDetail } from '../../models/criteria'

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})


export class CriteriaComponent implements OnInit {
  @Input('criteria') inputCriteria: Criteria
  @Output() onFieldNameChange = new EventEmitter();
  @Output() onRangeOperatorChange = new EventEmitter();
  @Output() onOperatorChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onFieldNameChanged(fieldValue: string) {
    this.onFieldNameChange.emit({ criteria: this.inputCriteria, value: fieldValue });
  }

  onRangeOperatorChanged(rangeOperatorValue: string) {
    this.onRangeOperatorChange.emit({ criteria: this.inputCriteria, value: rangeOperatorValue });
  }

  onOperatorChanged(operatorValue: string) {
    this.onOperatorChange.emit({ criteria: this.inputCriteria, value: operatorValue });
  }

}
