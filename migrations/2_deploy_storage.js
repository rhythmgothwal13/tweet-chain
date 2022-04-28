const UserStorage = artifacts.require('UserStorage');
const TweetStorage = artifacts.require('TweetStorage');


module.exports = (deplloyer) =>{
    deplloyer.deploy(UserStorage);
    deplloyer.deploy(TweetStorage);
}