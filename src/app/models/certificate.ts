export class Certificate {
    idCertificate: number;
    urlImgCertificate: string;
    titleCertificate: string;
    obtainedCertificate: string;

    constructor(idCertificate: number, urlImgCertificate: string, titleCertificate: string, obtainedCertificate: string) {
        this.idCertificate = idCertificate;
        this.urlImgCertificate = urlImgCertificate;
        this.titleCertificate = titleCertificate;
        this.obtainedCertificate = obtainedCertificate;
    }
}