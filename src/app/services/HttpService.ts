import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from 'rxjs/operators';
import Message from "../models/messageModel";


const URL_MESSAGES = "http://localhost:3001/";

@Injectable({
  providedIn: 'root'
})

class HttpService {

  constructor(private readonly _http: HttpClient) { }

  // get all beers from API
  /*public getBeersAPI(): Observable<IBeer[]> {
    try {
      const list: Observable<IBeer[]> = this._http.get(URL_MESSAGES).pipe(
        map((beerObj: Object) => beerObj as IBeerRaw),
        map((beerList: IBeerRaw) => beerList.data as IBeer[])
      )
      return list
    } catch (error) {
      console.error(error);
      throw (error)
    }
  }*/

  public postMessage(message: Message): Observable<Message> {
    try {

      // CREATES JSON FILE WITH BEER INTERFACE
      let json = {
        message: message.message,
        roomId: message.roomId,
        sender: message.sender
      };

      const msg$: Observable<Message> = this._http.post(URL_MESSAGES + 'messages/', json).pipe(
        map((beerObj: Object) => beerObj as Message)
      );
      return msg$;
    } catch (error) {
      console.error(error);
      throw (error);
    }
  }

  /*deleteBeer(id: number): void {
    this._http.delete(URLBEERS + "/" + id).subscribe();
  }*/

}
export default HttpService
