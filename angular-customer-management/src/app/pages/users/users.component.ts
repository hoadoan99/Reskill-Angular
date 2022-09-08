import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/User.modal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!:User[];
  constructor(private userService:UserService ) { }

  ngOnInit():void {
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
    });
  }
  displayedColumns: string[] = ['avatar', 'name', 'email', 'phone','birthday'];
  itemPerpage: number = 5;
  totalItems:number =10;
  column: string = "id";
  direction:string = "desc";

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
}



