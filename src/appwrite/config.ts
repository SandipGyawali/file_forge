import config from "@/config/config";
import { Client, Account, ID } from "appwrite";
import { CreateUserAccount, LoginUserAccount } from "@/interfaces/user_account";
const { appwrite_url, project_id } = config;

const client = new Client();

//endpoint and project_id setup
client.setEndpoint(appwrite_url).setProject(project_id);

const account = new Account(client);

class AppwriteService {
  /**
   * @param
   * @returns
   */
  async createUserAccount({ email, password, username }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
      if (userAccount) return this.loginUserAccount({ email, password });

      return userAccount;
    } catch (err) {
      throw err;
    }
  }

  async loginUserAccount({ email, password }: LoginUserAccount) {
    try {
      const userAccount = await account.createEmailPasswordSession(
        email,
        password
      );

      return userAccount;
    } catch (err: any) {
      throw err;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const user = await this.getCurrentUser();

      return Boolean(user);
    } catch (err: any) {}

    return false;
  }

  async getCurrentUser() {
    try {
      return account.get();
    } catch (err: any) {
      console.log("Current User error: ", err);
    }

    return null;
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (err: any) {
      console.log("logout error: " + err);
    }
  }
}

const appwriteService = new AppwriteService();

export { account };
export default appwriteService;
