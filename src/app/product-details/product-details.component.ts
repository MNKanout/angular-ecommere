import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Product, products} from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(){
    // Get current route
    const routeParam = this.route.snapshot.paramMap;
    // Get the id of the product from the current route
    const productIdFromRoute = Number(routeParam.get('productId'))

    // Find the corresponding product to id
    this.product = products.find(product => product.id === productIdFromRoute)


  }

}
