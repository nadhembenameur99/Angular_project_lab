import {Injectable} from '@angular/core';
import {Member} from "../Modules/member.model";
import {GLOBAL} from "../app/app-config";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public tab: Member[] = GLOBAL._DB.members;

  // constructor(private httpClient:HttpClient) {
  constructor() {
  }

  saveMember(member: any): Promise<Member> {
    // return this.httpClient.post<Member>('linkToRestAPI',member).toPromise();
    const memberToSave = {...member,};
    memberToSave.id = member.id ?? Math.ceil(Math.random() * 10000).toString();
    memberToSave.createdDate = member.createdDate ?? new Date().toISOString();
    this.tab = [memberToSave, ...this.tab.filter(item => item.id !== memberToSave.id)];
    return new Promise<Member>(resolve => resolve(memberToSave));
  }
}
