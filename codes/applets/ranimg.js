//Random Image Script - The-Spot.net
var ranimg = 2
day = new Date()
seed = day.getTime()
ran = parseInt(((seed - (parseInt(seed/1000,10) * 1000))/10)/100 * ranimg + 1,10)

if (ran == (1))
ranimg = ("logo_phpBB.gif")
if (ran == (2))
ranimg = ("logo_forum.gif")

document.write('<img src="templates/subSilver/images/' + ranimg + '" border="0" alt="{L_INDEX}" vspace="1" />')
