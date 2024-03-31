export class PDF {
    constructor(name, contents, version, isProtected, password) {
        this.type = 'PDF';
        this.name = name;
        this.contents = contents;
        this.version = version;
        this.isProtected = isProtected;
        this.password = password;
    }
}
