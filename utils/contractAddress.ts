/**
 * Remember to use this function in the root path of your hardhat project
 */
import * as fs from "fs";

///
/// Deployed Contract Address Info Record
///
export const readAddressList = function (network: string) {
    // const filePath = __dirname + "/address.json"
    return JSON.parse(fs.readFileSync(`deployed_addresses/${network}/000_Deployed_Addresses.json`, "utf-8"));
};

export const storeAddressList = function (addressList: object, network: string) {
    const filePath = `deployed_addresses/${network}/000_Deployed_Addresses.json`;
    // if path is not exist, create it
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(`deployed_addresses/${network}`, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(addressList, null, "\t"));
};

export const clearAddressList = function (network: string) {
    const emptyList = {};
    fs.writeFileSync(`deployed_addresses/${network}/000_Deployed_Addresses.json`, JSON.stringify(emptyList, null, "\t"));
};