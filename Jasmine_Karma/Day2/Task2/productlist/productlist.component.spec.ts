import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductlistComponent } from './productlist.component';

describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //1.Test child component can access
  it('should render child component elements -- productdetails', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-productdetails'));
    expect(childComponent).toBeTruthy();
  });

  //2. Get all child components and verify the count
  it('should render all child component elements -- productdetails', () => {
    const childComponents  = fixture.debugElement.queryAll(By.css('app-productdetails'));
    console.log(childComponents.length);
    console.log(component.productObjs.length);
    expect(childComponents.length).toBe(component.productObjs.length);
  });

  //3.Access child class properties
  it('testing child component data -- productdetails', () => {
    const testObj:any = {pid:1,pname:"Ball",price:100,category:"Sports",qty:10};
   
    const childComponent  = fixture.debugElement.query(By.css('app-productdetails'));
    //console.log(childComponent.properties["productObj"]);
    //console.log(component.productObjs[0]);
     //expect(childComponent.properties['procuctObj']).toEqual( testObj  );
     expect(childComponent.properties["productObj"]).toEqual( component.productObjs[0] );
   
  });

  //4. Trigger child class event. 
  it('testing child component events -- onProductRemove', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-productdetails'));
    const pid = childComponent.properties["productObj"].pid;

    console.log("Before remove : "  + component.productObjs.length);
  
    childComponent.triggerEventHandler('onProductRemove', pid)
    console.log("After remove : "  + component.productObjs.length);

    let index = component.productObjs.findIndex( (item:any) => item.pid == pid);
    expect(index).toBe(-1);
  });


});
