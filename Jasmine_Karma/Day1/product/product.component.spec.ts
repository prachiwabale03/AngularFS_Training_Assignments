import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//test the instance creation
  it('should create product component instance', () => {
    expect(component).toBeTruthy();
  });

  //1.test the default value of quantity

  it('quantity property should be 1 as a default value', () => {
    const strOutput:string  = component.quantity;
    expect(strOutput).toBe("1");
  });

  //2.test the default value of result

  it('result property should be empty as default value', () => {
    const strOutput:string  = component.result;
    expect(strOutput).toBe("");
  });

  //3.test getTotalAmount()

  it('should result contains "Total Amount for this product is:amount"', () => {
    component.unitprice = "12";
    component.quantity = "2";
    component.getTotalAmount();
    const strOutput:string  = component.result;
    //console.log(component.amount);
    expect(strOutput).toBe("Total Amount for this product is:"+component.amount);
  });
  
  //4.test getTotalAmount() for NAN

  it('should result contains "Total Amount for this product is:amount"', () => {
    component.unitprice = "as";
    component.quantity = "as";
    component.getTotalAmount();
    const strOutput:string  = component.result;
   // console.log(component.amount);
    expect(strOutput).toBe("Total Amount for this product is:"+component.amount);
  });

  //5.test twowaybinding for price textbox
  it('should set the textbox value of price to component property', () => {

    const inputArray = fixture.nativeElement.querySelectorAll("input");
    inputArray[2].value = '10';
  
    // reflect two-way data binding
    inputArray[2].dispatchEvent(new Event('input'));
  
    //console.log(component.unitprice);
    //console.log(inputArray[2].value);
     expect(component.unitprice).toBe( inputArray[2].value);
   });
  

     //6.test twowaybinding for price property
  it('should set the component property to textbox value of price ', () => {

    let inputArray = fixture.nativeElement.querySelectorAll('input');

    inputArray[2].value = '100' ;



    inputArray[2].dispatchEvent(new Event('input'));



    expect(inputArray[2].value).toBe('100');
   });

  //7.test button click event after entering price and quantity

  it('should login button click generates result in paragraph -- valid user', () => {

    const inputArray =  fixture.nativeElement.querySelectorAll("input");



		inputArray[1].value = '20';
		inputArray[1].dispatchEvent(new Event('input'));

    inputArray[2].value = '100';
		inputArray[2].dispatchEvent(new Event('input'));

    let inputObj = fixture.nativeElement.querySelector('button');
		inputObj.dispatchEvent(new Event('click'));
   
    fixture.detectChanges();
    
    let parObj = fixture.nativeElement.querySelector('p');
    expect(parObj.textContent).toBe("Total Amount for this product is:"+component.amount);
 });





});
