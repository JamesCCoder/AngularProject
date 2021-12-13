import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    console.log('In OnInit hahaah');
  }

  products: IProduct[] = [];

  constructor(private productService: ProductService) {}
  
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  filteredProducts: IProduct[] = [];

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  
}
