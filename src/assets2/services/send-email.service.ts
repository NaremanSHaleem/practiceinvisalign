import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

constructor(private http: HttpClient) { }
public send(name, email, phone){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    })
  };
this.http.post('http://sequelsolutions.co.uk/dentalimplants/server1.php',{
  'from':email,
  'name': name,
  'phone': phone,
  'secret':'secretkeyword'
},httpOptions
).subscribe((respond)=>{
  console.log('hello from serviceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'+respond);

},(error)=>{
  console.error(error);
});
}
}
