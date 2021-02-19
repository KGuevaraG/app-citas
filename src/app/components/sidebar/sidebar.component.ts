import { Component, OnInit } from '@angular/core';
import { faAddressBook, faAddressCard, faBook, faUser, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faAddressBook=faAddressBook;
  faAddressCard=faAddressCard;
  faBook=faBook;
  faUser=faUser;
  faHandHoldingMedical=faHandHoldingMedical;
  
  constructor() { }

  ngOnInit(): void {
  }

}
