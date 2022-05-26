export class Experience {
    idExperience: number;
    enterpriseExperience: string;
    dateExperience: string;
    descriptionExperience: string;

    constructor(idExperience: number, enterpriseExperience: string, dateExperience: string, descriptionExperience: string) {
        this.idExperience = idExperience;
        this.enterpriseExperience = enterpriseExperience;
        this.dateExperience = dateExperience;
        this.descriptionExperience = descriptionExperience;
    }
}