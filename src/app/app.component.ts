import { Component, OnInit } from '@angular/core';
import { Criteria, CriteriaDetail } from '../models/criteria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  CriteriaDetailList: Array<CriteriaDetail>;
  title = 'app';
  constructor() { }

  initCriteria() {
    var criteria = new Criteria('', '', '', '');
    var criDetail = new CriteriaDetail(criteria, new Array<Criteria>());
    this.CriteriaDetailList.push(criDetail);
  }

  ngOnInit() {
    this.CriteriaDetailList = new Array<CriteriaDetail>();
    this.initCriteria();
  }

  addNewCriteria(): void {
    this.initCriteria();
  }

  addNestedCriteria(i: number): void {
    this.CriteriaDetailList[i].nestedCriteria.push(new Criteria('', '', '', '', true));
    console.log(this.CriteriaDetailList);
  }

  updateFieldName(fieldValue) {
    var cri = fieldValue.criteria.isNested ?
      this.CriteriaDetailList.find(obj => obj.nestedCriteria == fieldValue.criteria) :
      this.CriteriaDetailList.find(obj => obj.criteria == fieldValue.criteria);
    cri.criteria.fieldName = fieldValue.value;
    console.log(this.CriteriaDetailList);
  }

  updateOperatorName(operatorValue) {
    var cri = this.CriteriaDetailList.find(obj => obj.criteria == operatorValue.criteria);
    cri.criteria.operator = operatorValue.value;
    console.log(this.CriteriaDetailList);
  }

  updateRangeOperatorName(rangeOperatorValue) {
    var cri = this.CriteriaDetailList.find(obj => obj.criteria == rangeOperatorValue.criteria);
    cri.criteria.rangeOperator = rangeOperatorValue.value;
    console.log(this.CriteriaDetailList);
  }

}
