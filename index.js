import './index.css'
import {appendClockToContainer} from './src/utilits/appendClockToContainer'
import { appendTextareaToContainer } from './src/utilits/appendTextareaToContainer'
import { renderFinalyMessage } from './src/utilits/renderFinalyMessage'
import { renderFormContact } from './src/utilits/renderFormContact'
import { sendMessageToTelegram } from './src/utilits/sendMessageToTelegram'

// https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew1/sendMessage?chat_id=123456&text=Привет, как дела?

class App{
    #userInfo
    #clock
    #container
    #postForm
    #contactForm
    #finalyMessage
    constructor(){
        this.#userInfo = {}
        this.#clock = document.createElement('div')
        this.#container = document.querySelector('.container')
        this.#postForm = document.createElement('form')
        this.#contactForm = document.createElement('form')
        this.#finalyMessage = document.createElement('div')
    }
    

    getTimeFromNewYear(){

        appendClockToContainer(this.#clock,this.#container)

        appendTextareaToContainer(this.#postForm, this.#container)

        this.#postForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            console.log(e.target.postText.value)
            if(e.target.postText.value){
                this.#userInfo.post = e.target.postText.value
                this.#postForm.remove()
                renderFormContact(this.#contactForm,this.#container)
            }
        })

        this.#contactForm.addEventListener('submit',(e)=>{
            e.preventDefault()  
            if(e.target.firstName.value && e.target.phone.value){          
                this.#userInfo.name = e.target.firstName.value,
                this.#userInfo.phone = e.target.phone.value
                sendMessageToTelegram(this.#userInfo)
                this.#contactForm.remove()
                renderFinalyMessage(this.#finalyMessage,this.#container)
            }
            
        })
    }


}

const app = new App()
app.getTimeFromNewYear()
