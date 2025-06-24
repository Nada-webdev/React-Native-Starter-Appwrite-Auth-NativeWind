import{ Account ,Client} from 'appwrite'
    
export const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("6857132a002a5a00e64e");

 export const account = new Account(client);