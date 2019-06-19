import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ComputeService } from './../services/compute.service';
import { Calculate } from './../calculate.model';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  // operators = {
  //   ADDITION: '+',
  //   SUBTRACTION: '-',
  //   MULTIPLICATION: '*',
  //   DIVISION: '/',
  //   MODULO: '%'
  // }

  calculateForm:FormGroup;
  results:Calculate[] = []
  answer = 0
  // data: any;
  // timestamp ;
  constructor( private fb:FormBuilder, private computeService:ComputeService) { }

  

  ngOnInit() {
    this.calculateForm = this.fb.group({
      inputbox1: [],
      operation: [],
      inputbox2: []
    })

  }


  doAddition(){
    let newData : Calculate = {
      precision:0
    }
    newData.expr =  this.calculateForm.value['inputbox1']+this.calculateForm.value['operation']+this.calculateForm.value['inputbox2'];

    this.computeService.calculate(newData).subscribe(
      token=>{
        newData.result = this.answer = token['result']
        newData.timestamp = new Date();
        this.results.unshift(newData)

      }
    )
  }
}
