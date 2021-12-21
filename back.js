const mathRandom=(min=0,max=1)=>{min=Math.ceil(min);return Math.floor(Math.random()*(Math.floor(max)-min+1)+min)}
const mathRandomFrom=(array=[false,true])=>{return array[Math.ceil(Math.random()*array.length)-1]}

