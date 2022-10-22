const strings=document.querySelector('.strings')
const everyString=[g,c,e,a]
const indCorr=[,1,,2,,3,,4]
const sounds=['g','c','e','a']

strings.childNodes.forEach((node,ind)=>
node.addEventListener('click',()=>{
    stopSong()
    const newInd=ind-indCorr[ind]
    const sound=sounds[newInd]
    document.getElementById(sound).play()
}))
function stopSong(){
    sounds.forEach(sound=>{
        const audio=document.getElementById(sound)
        audio.pause()
    audio.currentTime=0;
})
}