export class CreateUserResponseDto {
  accessToken: string;
  username: string;
  email: string;

  constructor(username: string, email: string, accessToken: string) {
    this.username = username;
    this.email = email;
    this.accessToken = accessToken;
  }
}
