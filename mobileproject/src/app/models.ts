import { HttpHeaders } from "@angular/common/http";

export class GlobalVarible {
    static host: string = "http://cointradecenter.azurewebsites.net";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    static UserName: string;
}