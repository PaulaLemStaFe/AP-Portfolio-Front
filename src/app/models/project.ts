export class Project {
    idProject: number;
    urlImgProject: string;
    titleProject: string;
    textProject: string;
    btn01UrlProject: string;
    btn02UrlProject: string;

    constructor(idProject: number, urlImgProject: string, titleProject: string, textProject: string, btn01UrlProject: string, btn02UrlProject: string) {
        this.idProject = idProject;
        this.urlImgProject = urlImgProject;
        this.titleProject = titleProject;
        this.textProject = textProject;
        this.btn01UrlProject = btn01UrlProject;
        this.btn02UrlProject = btn02UrlProject;
    }
}