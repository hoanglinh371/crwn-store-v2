import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss'],
})
export class CategoryPreviewComponent implements OnInit {
  public products = [
    {
      id: 1,
      category: 'hat',
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25,
    },
    {
      id: 2,
      category: 'hat',
      name: 'Blue Beanie',
      imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
      price: 18,
    },
    {
      id: 3,
      category: 'hat',
      name: 'Brown Cowboy',
      imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
      price: 35,
    },
    {
      id: 4,
      category: 'hat',
      name: 'Grey Brim',
      imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
      price: 25,
    },
    {
      id: 5,
      category: 'hat',
      name: 'Green Beanie',
      imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
      price: 18,
    },
    {
      id: 6,
      category: 'hat',
      name: 'Palm Tree Cap',
      imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
      price: 14,
    },
    {
      id: 7,
      category: 'hat',
      name: 'Red Beanie',
      imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
      price: 18,
    },
    {
      id: 8,
      category: 'hat',
      name: 'Wolf Cap',
      imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
      price: 14,
    },
    {
      id: 9,
      category: 'hat',
      name: 'Blue Snapback',
      imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
      price: 16,
    },
    {
      id: 10,
      category: 'sneaker',
      name: 'Adidas NMD',
      imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
      price: 220,
    },
    {
      id: 11,
      category: 'sneaker',
      name: 'Adidas Yeezy',
      imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
      price: 280,
    },
    {
      id: 12,
      category: 'sneaker',
      name: 'Black Converse',
      imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
      price: 110,
    },
    {
      id: 13,
      category: 'sneaker',
      name: 'Nike White AirForce',
      imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
      price: 160,
    },
    {
      id: 14,
      category: 'sneaker',
      name: 'Nike Red High Tops',
      imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
      price: 160,
    },
    {
      id: 15,
      category: 'sneaker',
      name: 'Nike Brown High Tops',
      imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
      price: 160,
    },
    {
      id: 16,
      category: 'sneaker',
      name: 'Air Jordan Limited',
      imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
      price: 190,
    },
    {
      id: 17,
      category: 'sneaker',
      name: 'Timberlands',
      imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
      price: 200,
    },
    {
      id: 18,
      category: 'jacket',
      name: 'Black Jean Shearling',
      imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
      price: 125,
    },
    {
      id: 19,
      category: 'jacket',
      name: 'Blue Jean Jacket',
      imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
      price: 90,
    },
    {
      id: 20,
      category: 'jacket',
      name: 'Grey Jean Jacket',
      imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
      price: 90,
    },
    {
      id: 21,
      category: 'jacket',
      name: 'Brown Shearling',
      imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
      price: 165,
    },
    {
      id: 22,
      category: 'jacket',
      name: 'Tan Trench',
      imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
      price: 185,
    },
    {
      id: 23,
      category: 'women',
      name: 'Blue Tanktop',
      imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
      price: 25,
    },
    {
      id: 24,
      category: 'women',
      name: 'Floral Blouse',
      imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
      price: 20,
    },
    {
      id: 25,
      category: 'women',
      name: 'Floral Dress',
      imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
      price: 80,
    },
    {
      id: 26,
      category: 'women',
      name: 'Red Dots Dress',
      imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
      price: 80,
    },
    {
      id: 27,
      category: 'women',
      name: 'Striped Sweater',
      imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
      price: 45,
    },
    {
      id: 28,
      category: 'women',
      name: 'Yellow Track Suit',
      imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
      price: 135,
    },
    {
      id: 29,
      category: 'women',
      name: 'White Blouse',
      imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
      price: 20,
    },
    {
      id: 30,
      category: 'men',
      name: 'Camo Down Vest',
      imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
      price: 325,
    },
    {
      id: 31,
      category: 'men',
      name: 'Floral T-shirt',
      imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
      price: 20,
    },
    {
      id: 32,
      category: 'men',
      name: 'Black & White Longsleeve',
      imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
      price: 25,
    },
    {
      id: 33,
      category: 'men',
      name: 'Pink T-shirt',
      imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
      price: 25,
    },
    {
      id: 34,
      category: 'men',
      name: 'Jean Long Sleeve',
      imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
      price: 40,
    },
    {
      id: 35,
      category: 'men',
      name: 'Burgundy T-shirt',
      imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
      price: 25,
    },
  ];

  public hats = this.products.slice(0, 9);
  public sneakers = this.products.slice(9, 17);
  public jackets = this.products.slice(17, 22);
  public women = this.products.slice(22, 29);
  public mens = this.products.slice(29, 35);

  public categoryMap = [
    {
      title: 'hats',
      items: this.hats,
    },
    {
      title: 'sneakers',
      items: this.sneakers,
    },
    {
      title: 'jackets',
      items: this.jackets,
    },
    {
      title: 'women',
      items: this.women,
    },
    {
      title: 'mens',
      items: this.mens,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.hats);
    console.log(this.sneakers);
    console.log(this.jackets);
    console.log(this.women);
    console.log(this.mens);
  }
}
