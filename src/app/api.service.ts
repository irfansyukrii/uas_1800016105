import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiUrl: any = 'http://localhost/rest-api/index.php/komik/';

  baca() {
    return this.http.get(this.apiUrl + 'komik');
  }

  simpan(data) {
    return this.http.post(this.apiUrl + 'komik', data);
  }
  hapus(id) {
    return this.http.delete(this.apiUrl + 'komik/' + id);
  }

  edit(data) {
    return this.http.put(this.apiUrl + 'komik/' + data.id, data);
  }
}
