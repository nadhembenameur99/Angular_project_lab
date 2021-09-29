import {Injectable} from '@angular/core';
import {Member} from "../Modules/member.model";
import {GLOBAL} from "../app/app-config";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public tab: Member[] = GLOBAL._DB.members;

  constructor() {
  }
}
