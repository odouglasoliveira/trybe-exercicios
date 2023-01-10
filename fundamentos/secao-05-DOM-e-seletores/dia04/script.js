const backgroundPanel = document.getElementById('control');
backgroundPanel.addEventListener('click', (event) => {
    let value = event.target.innerText;
    console.log(value)
    changeBackgroundColor(value);
})


const changeBackgroundColor = (value) => {
    const body = document.getElementById('body');
    body.style.backgroundColor = value
}

