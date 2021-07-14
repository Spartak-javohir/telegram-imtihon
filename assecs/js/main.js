const burgerMenuBtnElem = document.querySelector('#burgerMenuButton')
const shedowElem = document.querySelector('.shedow')
const menuSettingsElem = document.querySelector('.menu__settings')
const allChatsHiddenElem = document.querySelector('.all-chats__hidden')
const nightModeElem = document.querySelector('.pusk')
const menuElem = document.querySelector('.menu')
const settingsModalElement = document.querySelector(".settings__modal")
const chatModalElem = document.querySelector(".chat__modal")
const allChatsListElem = document.querySelector('.all-chats__list')
const leftArrowButton = document.querySelector(".left-arrow_button")
const settingsElement = document.querySelector("#settings")
const threeDot = document.querySelector("#threedot")
const threedotList = document.querySelector(".threedot__list")
const closeSettings = document.querySelector("#closeSettings")

const emojiList = document.querySelector(".emoji-list")
const messageTextForm = document.querySelector(".message__form")
const emojiButton = document.querySelector(".emoji__button")
const centerChatElem = document.querySelector('.center-chat')
const rigthAllChatsHidden = document.querySelector('.rigth__all-chats__hidden')
const ikkinchi = document.querySelector('.ikkinchi')
const profileIconButtonElem = document.querySelector('.right__unchun')
const smilebtn = document.querySelector('.emoji__button')

let storagedata = JSON.parse(localStorage.getItem('mydata'))

const emojies = ["😀", "😋", "😅", "😏", "😀", "😃", "😄", "😁", "😆", "😄", "😅", "😂", "😏", "😞", "😅", "😚", "🙊", "😌", "😀", "😋", "😆", "😐", "😕", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤚", "🖐", "✋"]

let inputValue = ""
let currentChat = 1
//nastroyka



burgerMenuBtnElem.addEventListener('click', () => {
    menuElem.style.transform = 'none'
    shedowElem.style.display = 'block'

})
settingsElement.addEventListener("click", evt => {
    settingsModalElement.classList.remove("settingsHidden")
    menuElem.classList.add("hidden")
    menuElem.style.transform = "translateX(-100%)"


})
closeSettings.addEventListener("click", evt => {
    settingsModalElement.classList.add("settingsHidden")
    shedowElem.style.display = 'none'

})
threeDot.addEventListener("click", event => {
    threedotList.classList.toggle("threedotHidden")
})
shedowElem.addEventListener('click', () => {
    settingsModalElement.classList.add("settingsHidden")
    menuElem.style.transform = 'translateX(-100%)'
    shedowElem.style.display = 'none'
})


//kontakt

let user =(localStorage.getItem('mydata')) ? storagedata:{
    config: {
        background: 'red',
        myName: 'Javohir',
        myOldNames: [],
        myProfilePhoto: 'https://via.placeholder.com/150'
    },
    chats: [{
            chatId: 1,
            chatName: 'Muhammadbek',
            profileImg: 'https://picsum.photos/100?random=1&grayscale',
            chatNumber: '+998 99 142-34-71',
            chatMessages: []
        },
        {
            chatId: 2,
            chatName: 'Axmadbek',
            profileImg: 'https://picsum.photos/100?random=2',
            chatNumber: '+998 99 999-99-99',
            chatMessages: []
        },
        {
            chatId: 3,
            chatName: 'Xabibullohbek',
            profileImg: 'https://picsum.photos/100?random=3',
            chatNumber: '+998 99 333-33-33',
            chatMessages: []
        },
        {
            chatId: 4,
            chatName: 'Farruxbek',
            profileImg: 'https://picsum.photos/100?random=4',
            chatNumber: '+998 99 333-33-33',
            chatMessages: []
        },
        {
            chatId: 5,
            chatName: 'Jonhbek',
            profileImg: 'https://picsum.photos/100?random=5',
            chatNumber: '+998 99 333-33-33',
            chatMessages: []
        },
        {
            chatId: 6,
            chatName: 'Sarvarbek',
            profileImg: 'https://picsum.photos/100?random=6',
            chatNumber: '+998 99 333-33-33',
            chatMessages: []
        },
        {
            chatId: 7,
            chatName: 'Rustambek',
            profileImg: 'https://picsum.photos/100?random=7',
            chatNumber: '+998 99 333-33-33',
            chatMessages: []
        },
        {
            chatId: 8,
            chatName: 'Oyatullohbek',
            profileImg: 'https://picsum.photos/100?random=8',
            chatNumber: '+998 99 333-33-33',
            chatMessages: []
        }, {
            chatId: 9,
            chatName: 'Ozodbek',
            profileImg: 'https://picsum.photos/100?random=9&graysale&blur',
            chatNumber: '+998 12 34 56 78',
            chatMessages: []
        }
    ]
}

localStorage.setItem('mydata', JSON.stringify(data))

//li click bolishi
const messageListElem = document.querySelector('.message__list')
const selectBoxElem = document.querySelector('.select-box')
const textLiElem = document.querySelector('.text__li')
const profileNameElem = document.querySelector('.profile__name')
const profileSlogElem = document.querySelector('.profile__slog')
const infoNameImgElem = document.querySelector('.info__name__img')
const infoNameTextElem = document.querySelector('.info__name__text')
const obileNumElem = document.querySelector('.obile__num')
const mobileNumElem = document.querySelector('.mobile__num')
const profileDivElem = document.querySelector('.profile__div')
const userInfoTimeElem = document.querySelector('.user__info__time')
const logouchun = document.querySelector('.logouchun')
const raqamuchun = document.querySelector('.raqamuchun')
const ismuchun = document.querySelector('.ismuchun')

const searchFormElement = document.querySelector(".search__form")
const searchInputElement = document.querySelector(".search__input")
const searchListElement = document.querySelector(".all-chats__list")
const searchNameElement = searchListElement.querySelectorAll(".account__name")

searchInputElement.addEventListener("click", event => {
    event.target.classList.add("border-input")
})

profileDivElem.addEventListener('click', () => {
    chatModalElem.style.display = 'block'
})
userInfoTimeElem.addEventListener('click', () => {
    chatModalElem.style.display = 'none'

})

function chatRender() {
    for (let i of user.chats) {
        const liElem = document.createElement('li')
        const imgLogoElem = document.createElement('img')
        const h2Elem = document.createElement('h5')
        const pElem = document.createElement('p')
        const divElem = document.createElement('div')
        const divElem1 = document.createElement('div')
        const divElem2 = document.createElement('div')
        const time = document.createElement('p')
        imgLogoElem.src = i.profileImg
        h2Elem.textContent = i.chatName
        pElem.textContent = 'salom'
        time.textContent = 'Mon'

        liElem.classList.add('contactLi')

        divElem.appendChild(imgLogoElem)
        divElem1.appendChild(h2Elem)
        divElem1.appendChild(pElem)
        divElem.appendChild(divElem1)
        divElem2.appendChild(time)
        liElem.appendChild(divElem)
        liElem.appendChild(divElem2)
        allChatsListElem.appendChild(liElem)
        divElem1.style.marginLeft = '10px'
        divElem.style.display = 'flex'
        divElem.style.alignItems = 'center'
        pElem.style.color = 'grey'
        time.style.color = 'grey'
        const textLiElem = document.querySelector('li')
        h2Elem.classList.add ('account__name')
        liElem.addEventListener('click', (e) => {

            // renderMessages(messagesListElement, user.message)
            // localStorage.setItem("data", JSON.stringify(malumot))

            textLiElem.classList.add('text__item')
            textLiElem.innerText = 'salom'
            textLiElem.style.display = 'block'
            messageListElem.style.display = 'flex'
            messageListElem.style.justifyContent = 'space-between'
            selectBoxElem.style.display = 'none'
            messageListElem.appendChild(textLiElem)

            //info
            profileNameElem.innerText = i.chatName
            mobileNumElem.innerText = i.chatNumber
            profileSlogElem.innerText = 'last seen recently'
            infoNameImgElem.src = i.profileImg
            infoNameTextElem.innerText = i.chatName
            chatModalElem.style.display = 'none'
            logouchun.src = i.profileImg
            raqamuchun.innerText = i.chatNumber
            ismuchun.innerText = i.chatName

            messageTextareaElem.disabled = false

        })
    }
}

chatRender()

const contacts = document.querySelectorAll('.contactLi')
const userLi = document.querySelector('.contactLi')

const messageTextareaElem = document.querySelector('.message__textarea')

let tallangan;

contacts.forEach((element, index) => {
    element.addEventListener('click', event => {
        contacts.forEach(el => el.classList.remove('active'))
        element.classList.add('active')
        tallangan = index
        messageTextForm.addEventListener('submit', event => {
            event.preventDefault()
            user.chats[tallangan].chatMessages.push({
                message: messageTextareaElem.value
            })
            
           
            messageTextForm.reset()
            const newLiELem = document.createElement('li')
            const newUlElem = document.createElement('ul')
            const newLiELem2 = document.createElement('li')
            newLiELem.appendChild(newUlElem)
            messageListElem.appendChild(newLiELem)

            user.chats[tallangan].chatMessages.forEach(element => {
               for (let i in element){
            newLiELem.textContent =element[i]
            // newLiELem.style.display = 'inline-block'
            newLiELem.style.background= 'rgba(50, 220, 226, 0.651)'
               }
            });
            newLiELem.style.display = 'flex'
            newLiELem.style.justifyContent = 'flex-end'
            newUlElem.appendChild(newLiELem2)
            messageListElem.style.display = 'flex'
            messageListElem.style.flexDirection = 'column'
            
            messagesTextInput.addEventListener("keyup", event => {
                if (event.keyCode == 13) {
                   if (messagesTextInput.value == 0) return
                   let messageBody = event.target.value
                   let userData = malumot.find(user => user.id == currentChat)
                   let userIndex = malumot.findIndex(user => user.id == currentChat)
                   malumot[userIndex] = userData
                   localStorage.setItem("data", JSON.stringify(malumot))
             
                   userData.message.push({
                      body: messageBody,
                      isMine: true
                   })
             
                   renderMessages(messagesListElement, userData.message)
                   localStorage.setItem("data", JSON.stringify(malumot))
                   event.target.value = ""
                }
             })
             

        })
    })
})
const section = document.querySelector('.bodyi')
const settingsMainElem = document.querySelector('.settings__main')
nightModeElem.addEventListener('click', () => {
    section.classList.toggle('uzgardi')


})


profileIconButtonElem.addEventListener('click', () => {
    rigthAllChatsHidden.style.display = 'block'
    centerChatElem.style.width = "43%"
})

ikkinchi.addEventListener('click', () => {
    rigthAllChatsHidden.style.display = 'none'
    centerChatElem.style.width = '70%'
})

emojies.forEach(e => {
    let smileLiElem = document.createElement('li')
    smileLiElem.textContent = e
    emojiList.appendChild(smileLiElem)
    smileLiElem.classList.add = 'smiles'
    smileLiElem.addEventListener('onclick', () => {
        messageTextForm.reset()
        messageTextareaElem.textContent = smileLiElem.textContent
    })

});

const smile = document.querySelector('.smiles')

smilebtn.addEventListener('click', () => {
    emojiList.classList.toggle('emojiListHidden')

})
