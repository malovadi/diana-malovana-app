import { Component, OnInit } from '@angular/core';
import {Item} from "../shared/item";

const ITEMS: Item[] = [
  {
    id: '0',
    name: 'Item A-1',
    image: 'assets/images/A/A-1.png',
    category: 'A',
    featured: true,
    label: 'L-1',
    price: '12.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
  },
  {
    id: '1',
    name: 'Item A-2',
    image: 'assets/images/A/A-2.png',
    category: 'A',
    featured: true,
    label: 'L-2',
    price: '3.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
  },
  {
    id: '2',
    name: 'Item B-1',
    image: 'assets/images/B/B-1.png',
    category: 'B',
    featured: true,
    label: 'L-3',
    price: '5.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
  },
  {
    id: '3',
    name: 'Item B-2',
    image: 'assets/images/B/B-2.png',
    category: 'B',
    featured: true,
    label: 'L-4',
    price: '1.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
  },
  {
    id: '4',
    name: 'Item C-1',
    image: 'assets/images/C/C-1.png',
    category: 'C',
    featured: false,
    label: 'L-5',
    price: '10.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
  },
  {
    id: '5',
    name: 'Item C-2',
    image: 'assets/images/C/C-2.png',
    category: 'C',
    featured: false,
    label: 'L-6',
    price: '20.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
  },
];

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {


  items = ITEMS;

  selectedItem: Item = this.items[0];
 /* items: Item[] = [
    {
      id: '0',
      name: 'Item A-1',
      image: 'assets/images/A/A-1.png',
      category: 'A',
      featured: true,
      label: 'L-1',
      price: '12.99',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    },
    {
      id: '1',
      name: 'Item B-1',
      image: 'assets/images/B/B-1.png',
      category: 'B',
      featured: true,
      label: 'L-2',
      price: '5.99',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    },
    {
      id: '3',
      name: 'Item B-2',
      image: 'assets/images/B/B-2.png',
      category: 'B',
      featured: true,
      label: 'L-3',
      price: '1.99',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    },
    {
      id: '4',
      name: 'Item C-1',
      image: 'assets/images/C/C-1.png',
      category: 'C',
      featured: false,
      label: 'L-4',
      price: '10.99',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    },
    {
      id: '5',
      name: 'Item C-2',
      image: 'assets/images/C/C-2.png',
      category: 'C',
      featured: false,
      label: 'L-5',
      price: '20.99',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    },
  ];*/
  constructor() { }

  ngOnInit(): void {
  }

}
