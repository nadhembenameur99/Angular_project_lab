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

  getMemberById(currentId: any): Promise<Member> {
    //return this.httpClient.get<Member>('linktorestApi').toPromise();
    return new Promise(resolve => resolve(this.tab.filter(item => item.id === currentId)[0] ?? null));
  }

  removeMemberById(id: string): Promise<void> {
    // return this.httpClient.delete<void>('linkToRestAPI').toPromise();
    this.tab = this.tab.filter(item => item.id !== id);
    return new Promise<void>(resolve => resolve());
  }

  saveMember(member: any): Promise<Member> {
    // return this.httpClient.post<Member>('linkToRestAPI',member).toPromise();
    const memberToSave = {...member,};
    memberToSave.id = member.id ?? Math.ceil(Math.random() * 10000).toString();
    memberToSave.createdDate = member.createdDate ?? new Date().toISOString();
    this.tab = [memberToSave, ...this.tab.filter(item => item.id !== memberToSave.id)];
    return new Promise<Member>(resolve => resolve(memberToSave));
  }

  getAllMembers(): Promise<Member[]> {
    // return this.httpClient.get<Member[]>('linkToRestAPI').toPromise();
    return new Promise<Member[]>(resolve => resolve(this.tab));
  }

}
