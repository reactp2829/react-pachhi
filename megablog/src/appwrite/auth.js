import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

//for quality code purpose we need to create class here 

export class AuthService {
    //create properties 
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    //create account 
    async createAccount ({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // go to login page 
            }
        } catch (error) {
            throw userAccount;
        }
    }
    //login 

    async login ({email, password}){
        try {
           return  await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }
    // get user details 

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }
        return null;
    }
    //logout 
    
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite Service :: logout:: error",error);
        }
    }
}

const authService = new AuthService()
export default authService