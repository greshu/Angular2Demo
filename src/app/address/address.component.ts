import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service'
import { PagerService } from '../service/pager.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {
  private pageSize = 4;

  addressList: any;
  colWidths: number[] = [null, null, null, null, null, null, 30];
  options: any;
  colHeaders: string[]
  columns: any[]
  pager: any = {};
  pagedItems: any[];

  constructor(private addressService: AddressService,
    private pagerService: PagerService) {

  }

  ngOnInit() {
    this.addressService.getBitCoinAddressList(0, this.pageSize).subscribe((response: any) => {
      this.addressList = response.Data;
      this.pager = this.pagerService.getPager(response.recordsTotal, 1, this.pageSize);
      this.pagedItems = this.addressList.slice(this.pager.startIndex, this.pager.endIndex + 1);
      this.initGrid();
    });
    
  }

  
  initGrid() {
    this.options = {
      stretchH: 'all',
      columnSorting: true,
      contextMenu: [
        'row_above', 'row_below', 'remove_row'
      ]
    };
    this.colHeaders = ['ID', 'Address', 'Created Date', 'Project'];
    this.columns = [
      {
        data: 'Id',
        renderer: 'text',
      },
      {
        data: 'Address',
        readOnly: true
      },
      {
        data: 'CreatedDateTimeStr',
        readOnly: true
      },
      {
        data: 'ProjType',
        readOnly: true
      }
    ];
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.addressService.getBitCoinAddressList(page, this.pageSize).subscribe((response: any) => {
      this.addressList = response.Data;
      this.pager = this.pagerService.getPager(response.recordsTotal, page, this.pageSize);
      this.pagedItems = this.addressList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    });
  }

}
