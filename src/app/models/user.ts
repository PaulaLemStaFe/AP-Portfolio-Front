export class User {
    idUser: number;
    nameUser: string;
    titleUser: string;
    urlImgprofileUser: string;
    text01User: string;
    text02User: string;
    text03User: string;

    constructor(idUser: number, nameUser: string, titleUser: string, urlImgprofileUser: string, text01User: string, text02User: string, text03User: string) {
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.titleUser = titleUser;
        this.urlImgprofileUser = urlImgprofileUser;
        this.text01User = text01User;
        this.text02User = text02User;
        this.text03User = text03User;
    }
}