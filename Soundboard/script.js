const sounds = ["audio1", "audio2", "audio3", "audio4", "audio5", "audio6"]

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound

    btn.addEventListener("click", () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById("buttons").appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}