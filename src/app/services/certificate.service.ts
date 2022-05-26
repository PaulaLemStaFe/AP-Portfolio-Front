import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from '../models/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  certificateURL = 'http://localhost:8080/certificate/';

  constructor(private http: HttpClient) { }

  public getCertificates():Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.certificateURL + 'all');
  }

  public getCertificateById(idCertificate: number):Observable<Certificate> {
    return this.http.get<Certificate>(this.certificateURL + `getbyid/${idCertificate}`)
  }

  public createCertificate(certificate: Certificate):Observable<any>{
    return this.http.post<any>(this.certificateURL + 'add', certificate);
  }

  public editCertificate(certificate: Certificate):Observable<Certificate>{
    return this.http.put<Certificate>(this.certificateURL + 'edit', certificate);
  }

  public deleteCertificate(idCertificate: number):Observable<any>{
    return this.http.delete<any>(this.certificateURL + `delete/${idCertificate}`);
  }
  
}