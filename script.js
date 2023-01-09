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
    const li = document.createElement('li')
    const nick = document.createElement('span')
    const com = document.createElement('span')
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    nick.innerText = nickname + ' '
    com.innerText = comment
    editButton.innerText = '수정'
    deleteButton.innerText = '삭제'
    //이벤트 달기
    editButton.addEventListener('click', editFunc)
    deleteButton.addEventListener('click', deleteFunc)
    li.append(nick)
    li.append(com)
    li.append(editButton)
    li.append(deleteButton)
    commentList.append(li)
}

const deleteFunc = (e) => {
    console.log('e.currentTarget.parentNode : ', e.currentTarget.parentNode)
    e.currentTarget.parentNode.remove() //현재 타겟의 부모노드, 즉 li?
}

const editFunc = (e) => {
    console.log('e: ', e)
    console.log('e.currentTarget', e.currentTarget) //<button>수정</button>
    console.log('e.currentTarget.parentNode', e.currentTarget.parentNode) //<li><span>닉네임</span><><>......</li>
    // const editButton = (editButton.innerText = '수정완료')//
    // editButton.removeEventListener('click') //************** removeEventListner

    console.log(
        'e.currentTarget.parentNode.childNodes : ',
        e.currentTarget.parentNode.childNodes
    )
    console.log(
        'e.currentTarget.parentNode.childNodes[0] : ',
        e.currentTarget.parentNode.childNodes[0]
    )
    console.log(
        'e.currentTarget.parentNode.childNodes[0].innerText :',
        e.currentTarget.parentNode.childNodes[0].innerText //가르송
    )
    console.log(
        'e.currentTarget.parentNode.childNodes[1].innerText : ',
        e.currentTarget.parentNode.childNodes[1].innerText
    )

    //

    const commentList = document.getElementById('commentList')
    const li = document.createElement('li')
    const nick = document.createElement('span')
    const editInput = document.createElement('input') //comment

    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    nick.innerText = e.currentTarget.parentNode.childNodes[0].innerText
    editInput.type = 'text'
    editInput.value = e.currentTarget.parentNode.childNodes[1].innerText

    editButton.innerText = '수정확인'
    deleteButton.innerText = '삭제'
    //이벤트 달기

    e.currentTarget.parentNode.remove() //부모노드, 즉 li 삭제

    editButton.addEventListener('click', addList)
    deleteButton.addEventListener('click', deleteFunc)
    li.append(nick)
    li.append(editInput)
    li.append(editButton)
    li.append(deleteButton)
    commentList.append(li)
}

//페이지 로딩
const init = () => {
    console.log('data: ', data)
    data.forEach((item) => {
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
