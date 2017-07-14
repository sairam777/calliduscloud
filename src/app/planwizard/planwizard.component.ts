import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planwizard',
  templateUrl: './planwizard.component.html',
  styleUrls: ['./planwizard.component.css']
})
export class PlanwizardComponent implements OnInit {
  dropDownArray: any[];
  checkedItems: any[];
  user: any = {};
  elementsArray: any[];

  constructor() {
    this.checkedItems = [{ "region": [] }, { "model": [] }, { "company": [] }];
    this.dropDownArray = [];
    this.user = { "Option1": false, "Option2": false, "Option3": false }
    this.elementsArray = [{ "select": ["region1", "region2", "region3"] }, { "select": ["model1", "model2", "model3", "model4"] }, { "select": ["company1", "company2", "company3"] }]
  }

  checkedItem(j, i) {
    switch (j) {
      case 0:
        if (this.checkedItems[0].region == null) {
          this.checkedItems[0].region.push(this.elementsArray[j].select[i]);
          this.dropDownArray.push(this.elementsArray[j].select[i])
          console.log("regionif")
        }

        else {



          var temp = 0;
          (this.checkedItems[0].region).forEach((element, index) => {
            console.log(element);
            +console.log("regionelse")


            if (element ==this.elementsArray[j].select[i]) {
              temp++;
              this.checkedItems[0].region.splice(index, 1);
                var ind = this.dropDownArray.indexOf(element);
               this.dropDownArray.splice(ind, 1);
            }
          }
          )
          if (temp == 0) {
            console.log(temp);
            console.log("dhgfhj");
            this.checkedItems[0].region.push(this.elementsArray[j].select[i]);
            this.dropDownArray.push(this.elementsArray[j].select[i])
          }
          console.log(this.checkedItems);


        }
        break;
      case 1:
        if (this.checkedItems[1].model == null) {
          this.checkedItems[1].model.push(this.elementsArray[j].select[i]);
          this.dropDownArray.push(this.elementsArray[j].select[i])
        }

        else {
          var temp = 0;
          (this.checkedItems[1].model).forEach((element, index) => {
            console.log(element);


            if (element == this.elementsArray[j].select[i]) {
              temp++;
              this.checkedItems[1].model.splice(index, 1);
            var ind = this.dropDownArray.indexOf(element);
               this.dropDownArray.splice(ind, 1);
            }
          }
          )
          if (temp == 0) {
            this.checkedItems[1].model.push(this.elementsArray[j].select[i]);
            this.dropDownArray.push(this.elementsArray[j].select[i])
          }
          console.log(this.checkedItems);


        }
        break;
      case 2:
        if (this.checkedItems[2].company == null) {
          this.checkedItems[2].company.push(this.elementsArray[j].select[i]);
          this.dropDownArray.push(this.elementsArray[j].select[i])
        }

        else {


          var temp = 0;
          (this.checkedItems[2].company).forEach((element, index) => {
            console.log(element);


            if (element == this.elementsArray[j].select[i]) {
              temp++;
              this.checkedItems[2].company.splice(index, 1);
              var ind = this.dropDownArray.indexOf(element);
               this.dropDownArray.splice(ind, 1);
            }
          }
          )
          if (temp == 0) {
            this.checkedItems[2].company.push(this.elementsArray[j].select[i]);
            this.dropDownArray.push(this.elementsArray[j].select[i])
          }
          console.log(this.checkedItems);


        }
        break;
    }
console.log(this.dropDownArray);
    //       if (this.checkedItems[0].region==null){
    //       this.checkedItems.push(this.elementsArray[j].select[i]);
    // }

    // else{


    //  var temp=0;
    // (this.checkedItems).forEach((element,index) =>{
    //   console.log(element);

    //   console.log(this.dropDownArray[i]);
    //   if(element==this.dropDownArray[i]){
    //     temp++;
    //     this.checkedItems.splice(index,1);
    //   }
    // }
    // )
    // if(temp==0){
    //   this.checkedItems.push(this.dropDownArray[i]);
    // }
    // console.log(this.checkedItems);


    //}
  }

    removeItem(i) {
    this.dropDownArray.splice(i, 1);
    console.log("jogi")
  }
  ngOnInit() {
  }

}
