//Muzak Script - The-Spot.net

<script LANGUAGE="JavaScript">
var nummidi = 18
day = new Date()
seed = day.getTime()
ran = parseInt(((seed - (parseInt(seed/1000,10) * 1000))/10)/100*nummidi + 1,10)

if (ran == (1))
midi=("media/music/africanwalk.wma")
if (ran == (2))
midi=("media/music/bassriff.wma")
if (ran == (3))
midi=("media/music/comedy.wma")
if (ran == (4))
midi=("media/music/darkgrooverock.wma")
if (ran == (5))
midi=("media/music/darkgroovehip.wma")
if (ran == (6))
midi=("media/music/drums1.wma")
if (ran == (7))
midi=("media/music/goodthing.wma")
if (ran == (8))
midi=("media/music/groove1.wma")
if (ran == (9))
midi=("media/music/groove2.wma")
if (ran == (10))
midi=("media/music/guitar1.wma")
if (ran == (11))
midi=("media/music/house.wma")
if (ran == (12))
midi=("media/music/jazz.wma")
if (ran == (13))
midi=("media/music/pop.wma")
if (ran == (14))
midi=("media/music/reggae.wma")
if (ran == (15))
midi=("media/music/stateside.wma")
if (ran == (16))
midi=("media/music/sundaze.wma")
if (ran == (17))
midi=("media/music/synth.wma")
if (ran == (18))
midi=("media/music/thankyou.wma")



document.write('<EMBED SRC= "' + midi + '" HEIGHT=60 WIDTH=144 BGCOLOR="#1c3a58" TXTCOLOR="#FFFFFF" NOSAVE=TRUE LOOP="TRUE" AUTOSTART=TRUE>') document.write('<BGSOUND SRC= "' + midi + '" HEIGHT=55 WIDTH=200 NOSAVE=TRUE loop=infinite AUTOSTART=TRUE>') </script>

//If you want to use more music clips, specify how many in the variable 
//nummidi and add as many lines if (ran == (X)) midi=("musicX.mid") as needed.
