import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //ventas del mes
  saleAmount: number = 21400;
  salePercentage: number = 2.2;

  //ventas del mes
  ordernAmount: number = 345;
  orderPercentage: number = 1.2;

  //ventas por producto
  gridFilterVxP: string = "";
  page_size_VxP: number = 5;
  page_number_VxP: number = 1;
  totalRecordsVxP: any;
  dataVxP: any;

  //ventas por categoría
  gridFilterVxC: string = "";
  page_size_VxC: number = 5;
  page_number_VxC: number = 1;
  totalRecordsVxC: any;
  dataVxC: any;

  public readonly pageLimitOptions = [{ value: 5 }, { value: 7 }];
  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.GetRowsVxP();
    this.GetRowsVxC();
  }

  GetRowsVxP() {
    var rVxP = [
      { producto: "Gaseosa Inka Cola", cantidad: 54 },
      { producto: "Gelatina de fresa", cantidad: 50 },
      { producto: "Tallarin saltado", cantidad: 47 },
      { producto: "Torta de chocolate", cantidad: 42 },
      { producto: "Arroz chaufa de pollo", cantidad: 32 },
      { producto: "Cau cau de pollo", cantidad: 30 },
      { producto: "Chicha morada", cantidad: 17 },
      { producto: "Gelatina de piña", cantidad: 13 },
      { producto: "Pie de manzana", cantidad: 9 }
    ];
    this.dataVxP = rVxP;
    this.totalRecordsVxP = rVxP.length;
  }

  GetRowsVxC() {
    var rVxC = [
      { categoria: "Bebidas gaseosas", cantidad: 73, total: 472},
      { categoria: "Postres", cantidad: 57, total: 342 },
      { categoria: "Menú criollo", cantidad: 42, total: 253 },
      { categoria: "Menú chino", cantidad: 36, total: 221 },
      { categoria: "Bebidas naturales", cantidad: 25, total: 157 },
      { categoria: "Panes", cantidad: 24, total: 57 }
    ];
    this.dataVxC = rVxC;
    this.totalRecordsVxC = rVxC.length;
  }
}
