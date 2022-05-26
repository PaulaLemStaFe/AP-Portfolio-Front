import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/models/certificate';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-homecertificates',
  templateUrl: './homecertificates.component.html',
  styleUrls: ['./homecertificates.component.css']
})
export class HomecertificatesComponent implements OnInit {

  certificates: Certificate[] = [];

  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
    this.getCertificates();
  }

  getCertificates(): void {
    this.certificateService.getCertificates().subscribe(
      data => {
        this.certificates = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}