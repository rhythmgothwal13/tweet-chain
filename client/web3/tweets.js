import {eth,getInstance} from './provider'
import TweetStorage from "./artifacts/TweetStorage.json"
import TweetController from './artifacts/TweetController.json'

export const createTweet = async(text)=>{
    const controller = await getInstance(TweetController)

    try{
        await ethereum.enable()
        const addresses = await eth.getAccounts()

        const result = await controller.createTweet(
            text,
            {
                from: addresses[0],
            }
        )
        return result
    }catch(err){
        console.error("Err:",err)
    }
}

export const getTweetInfo = async (tweetId)=>{
    const storage = await getInstance(TweetStorage)
    const tweet = await storage.tweets.call(tweetId)

    const {id,text,userId,postedAt} = tweet
    return{
        id: parseInt(id),
        userId: parseInt(userId),
        text,
        postedAt: parseInt(postedAt),
    }

}