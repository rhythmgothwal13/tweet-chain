const UserStorage = artifacts.require('UserStorage')

const utils = require('../utils')
const { assertVMException } = utils
const UserController = artifacts.require('UserController')

contract('users', ()=>{

    it("can create user with controller", async () => {
        const controller = await UserController.deployed()
        const tx = await controller.createUser(
            "tristan",
            "Tristan",
            "Edwards",
            "I like building stuff",
            "example@example.com"
        )
    
        assert.isOk(tx)
      })
    
      it("can't create user without controller", async () => {
        const storage = await UserStorage.deployed()
    
        try {
          const tx = await storage.createUser(
            0x0,
            web3.utils.asciiToHex("tristan"),
            web3.utils.asciiToHex("Tristan"),
            web3.utils.asciiToHex("Edwards"),
            "I like building stuff",
            "example@example.com")
          assert.fail();
        } catch (err) {
          assertVMException(err);
        }
      })

    it("can get user", async () => {
        const storage = await UserStorage.deployed()
        const userId = 1
        
        // Get the userInfo array
        const userInfo = await storage.profiles.call(userId)
        
        // Get the second element (the username)
        const username = userInfo[1]
    
        assert.equal(username, "tristan")
      });
})


