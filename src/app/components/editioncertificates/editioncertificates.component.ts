import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Certificate } from 'src/app/models/certificate';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-editioncertificates',
  templateUrl: './editioncertificates.component.html',
  styleUrls: ['./editioncertificates.component.css']
})
export class EditioncertificatesComponent implements OnInit {

  certificates: Certificate[] = [];
  editCertificate: Certificate | undefined;
  deleteCertificate: Certificate | undefined;

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

  public onOpenModal(mode: String, certificate?: Certificate): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('buttoon');
    //button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCertificateModal');
    } else if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteCertificateModal');
      this.deleteCertificate = certificate;
    } else if (mode === 'edit') {
      button.setAttribute('data-target', '#editCertificateModal');
      this.editCertificate = certificate;
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddCertificate(addForm: NgForm): void {
    document.getElementById('addCertificateModal')?.click();
    this.certificateService.createCertificate(addForm.value).subscribe({
      next: (response:Certificate) => {
        this.getCertificates();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onEditCertificate(certificate: Certificate){
    this.editCertificate=certificate;
    document.getElementById('editCertificateModal')?.click();
    this.certificateService.editCertificate(certificate).subscribe({
      next: (response:Certificate) => {
        console.log(response);
        this.getCertificates();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteCertificate(idCertificate:number) {
    this.certificateService.deleteCertificate(idCertificate).subscribe({
      next: (response:void)=>{
        this.getCertificates();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}