const handleSubmit = (event) => {
    event.preventDefault() //어떤 이벤트를 명시적으로 처리하지 않은 경우 기본 동작을 실행하지 않도록 지정
    const nickname = event.currentTarget.nickname.value //event.currentTarget은 이벤트의 현재 대상을 식별
    const comment = event.currentTarget.comment.value
    addList(nickname, comment)
    event.currentTarget.nickname.value = ''
    event.currentTarget.comment.value = ''
}

const addList = (nickname, comment) => {
    //html에서 내용 추가할 곳의 id 부터 받아오기
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

    const editFunc = (e) => {
        //console.log('comment', comment)
        console.log('e.currentTarget', e.currentTarget)
        console.log('e.currentTarget.parentNode', e.currentTarget.parentNode)
        e.currentTarget.parentNode.remove() //삭제가 안되는 이유를 모르겠음
        const nick = document.createElement('span')
        const editInput = document.createElement('input')
        const editConfirm = document.createElement('button')
        const deleteButton = document.createElement('button')
        nick.innerText = nickname
        //nick.tagName
        editInput.type = 'text'
        editInput.value = comment
        editConfirm.innerText = '수정 확인'
        deleteButton.innerText = '삭제'
        editConfirm.addEventListener('click', handleSubmit)

        li.append(nick)
        li.append(editInput)
        li.append(editConfirm)
        li.append(deleteButton)
        commentList.append(li)
    }
    const deleteFunc = (e) => {
        console.log('e.currentTarget.parentNode : ', e.currentTarget.parentNode)
        e.currentTarget.parentNode.remove() //현재 타겟의 부모노드, 즉 li?
    }

    editButton.addEventListener('click', editFunc)
    deleteButton.addEventListener('click', deleteFunc)
    li.append(nick)
    li.append(com)
    li.append(editButton)
    li.append(deleteButton)
    commentList.append(li)
}
