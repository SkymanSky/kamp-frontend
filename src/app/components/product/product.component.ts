import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  products:Product[] = [];
  dataloaded=false;
  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    console.log("Api request başladı")
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      console.log("Api request bitti")
      this.dataloaded=true;
    
    })
    console.log("Metot bitti");
    
  }

}
