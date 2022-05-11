export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public date: Date;
  public actif : boolean;
 public roles : string;
  public createdTime : Date;
  public lastLoggedIn : Date;
  public lastLoggedOut : Date;
  public Session_Id : string;
  public accountNonLocked : boolean;
  public failedAttempt : number;

  public domaine: Domain
}
export enum Domain{
  sante,informatique ,commerce
}
