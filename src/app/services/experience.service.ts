import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experienceURL = 'http://localhost:8080/experience/';

  constructor(private http: HttpClient) { }

  public getExperiences():Observable<Experience[]> {
    return this.http.get<Experience[]>(this.experienceURL + 'all');
  }

  public getExperienceById(idExperience: number):Observable<Experience> {
    return this.http.get<Experience>(this.experienceURL + `getbyid/${idExperience}`)
  }

  public createExperience(experience: Experience):Observable<any>{
    return this.http.post<any>(this.experienceURL + 'add', experience);
  }

  public editExperience(experience: Experience):Observable<Experience>{
    return this.http.put<Experience>(this.experienceURL + 'edit', experience);
  }

  public deleteExperience(idExperience: number):Observable<any>{
    return this.http.delete<any>(this.experienceURL + `delete/${idExperience}`);
  }
  
}
