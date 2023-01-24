// json은 백엔드와 프론트의 통신 규약이다. 백, 프론트 둘다 사용함

//전역객체 (함수 바깥에서)-서버에 저장되어 있는 데이터 불러오기
const data = [
    [
        '닉넴지을게없니',
        '아바타2는 CG는 적었고, 그냥 나비족 섭외하는게 힘들었을 듯',
    ],
    ['가르송', '레미레미도레미극장판이라니가슴이웅장해진다'],
]
const addList = (nickname, comment) => {
    //html에서 내용 추가할 곳의 id 부터 받아오기
    console.log('addList의 nickname', nickname)
    console.log('addList의 comment', comment)
    const commentList = document.getElementById('commentList')
    const f = document.createElement('form')
    const li = document.createElement('li')
    const nick = document.createElement('span')
    nick.innerText = nickname + ' '
    const com = document.createElement('span')
    com.innerText = comment
    const editButton = document.createElement('button')
    editButton.innerText = '수정'
    const deleteButton = document.createElement('button')
    deleteButton.innerText = '삭제'

    //editFunc
    const editFunc = (e) => {
        e.preventDefault() //form 안에 submit 역할하는 버튼을 눌러도 새로고침 되지 않음
        const nickname = com.innerText
        nick.remove()
        const orCom = com.innerText
        com.remove()
        const editInput = document.createElement('input')
        editInput.type = 'text'
        editInput.value = orCom
        li.prepend(editInput) //prepend() :콘텐츠를 선택한 요소 "내부의 시작 부분"에서 삽입
        li.prepend(nick)

        //li.append(editInput)
        console.log('e.currentTarget', e.currentTarget) //<button>수정</button>
        e.currentTarget.innerText = '수정완료'
        e.currentTarget.removeEventListener('click', editFunc)
        // e.currentTarget.addEventListener('click', editSuccess)
    }
    //이벤트 달기
    editButton.addEventListener('click', editFunc)
    deleteButton.addEventListener('click', deleteFunc)
    li.append(nick)
    li.append(com)
    li.append(editButton)
    li.append(deleteButton)
    f.append(li)
    commentList.append(f)
}

const deleteFunc = (e) => {
    console.log('e.currentTarget.parentNode : ', e.currentTarget.parentNode)
    e.currentTarget.parentNode.remove() //현재 타겟의 부모노드, 즉 li?
}

// const editFunc = (e) => {
//     //e.currentTarget.parentNode.remove() //부모노드, 즉 li 삭제
//     console.log('e: ', e)
//     console.log('e.currentTarget', e.currentTarget) //<button>수정</button>
//     console.log('e.currentTarget.parentNode', e.currentTarget.parentNode) //<li><span>닉네임</span><><>......</li>
//     // const editButton = (editButton.innerText = '수정완료')//
//     // editButton.removeEventListener('click') //************** removeEventListner

//     console.log(
//         'e.currentTarget.parentNode.childNodes : ',
//         e.currentTarget.parentNode.childNodes
//     )
//     console.log(
//         'e.currentTarget.parentNode.childNodes[0] : ',
//         e.currentTarget.parentNode.childNodes[0]
//     )
//     console.log(
//         'e.currentTarget.parentNode.childNodes[0].innerText :',
//         e.currentTarget.parentNode.childNodes[0].innerText //가르송
//     )
//     console.log(
//         'e.currentTarget.parentNode.childNodes[1].innerText : ',
//         e.currentTarget.parentNode.childNodes[1].innerText
//     )
//     // const commentList = document.getElementById('commentList')
//     // const li = document.createElement('li')
//     // const nickname = e.currentTarget.parentNode.childNodes[0]
//     // const comment = e.currentTarget.parentNode.childNodes[1]

//     // e.currentTarget.parentNode.childNodes[0].remove()
//     // e.currentTarget.parentNode.childNodes[1].remove()

//     // const editInput = document.createElement('input')
//     // editInput.type = 'text'
//     // editInput.value = comment

//     // //

//     const commentList = document.getElementById('commentList')
//     const li = document.createElement('li')
//     const nick = document.createElement('span')
//     const editInput = document.createElement('input') //comment

//     const editButton = document.createElement('button')
//     const deleteButton = document.createElement('button')

//     nick.innerText = e.currentTarget.parentNode.childNodes[0].innerText
//     editInput.type = 'text'
//     editInput.value = e.currentTarget.parentNode.childNodes[1].innerText

//     editButton.innerText = '수정확인'
//     deleteButton.innerText = '삭제'
//     // //이벤트 달기

//     // // e.currentTarget.parentNode.remove() //부모노드, 즉 li 삭제

//     // editButton.addEventListener(
//     //     'click',
//     //     addList(
//     //         e.currentTarget.parentNode.childNodes[0].innerText,
//     //         editInput.value
//     //     )
//     // )
//     deleteButton.addEventListener('click', deleteFunc)
//     li.append(nick)
//     li.append(editInput)
//     li.append(editButton)
//     li.append(deleteButton)
//     commentList.append(li)
// }

//페이지 로딩
const init = () => {
    console.log('data: ', data)
    data.forEach((item) => {
        //반복문을 각각 실행
        console.log('item: ', item)
        addList(item[0], item[1])
        console.log('item[0]: ', item[0])
        console.log('item[1]: ', item[1])
        console.log('함수부름')
    })
}
init()

const handleSubmit = (event) => {
    event.preventDefault() //어떤 이벤트를 명시적으로 처리하지 않은 경우 기본 동작을 실행하지 않도록 지정
    const nickname = event.currentTarget.nickname.value //event.currentTarget은 이벤트의 현재 대상을 식별
    const comment = event.currentTarget.comment.value
    addList(nickname, comment)
    event.currentTarget.nickname.value = ''
    event.currentTarget.comment.value = ''
}
