var score=document.querySelector("#score");
var scr=0;
score.innerHTML=scr;
var level=document.querySelector("#level"); 
level.innerHTML=1;
var word=document.querySelector("#word");
var display=document.querySelector("#display");
var array=[["GABS","GABY","GADE","GADI","GADS","GAED","GAEN","GAES","mile","milk","mill","mind","mine","miss","mode","mood","moon","more","most","move","much","must","name","navy","near","neck","need","news","next","nice","nick","nine","none","nose","note","okay","once","only","onto","open","oral","over","pace","pack","page","paid","pain","pair","palm","park","part","pass","past","path","peak","pick","pink","pipe","plan","play","plot","plug","plus","poll","pool","poor","port","post","pull","pure","push","race","rail","rain","rank","rare","rate","read","real","rear","rely","rent","rest","rice","rich","ride","ring","rise","risk","road","rock","role","roll","roof","room","root","rose","rule","rush","ruth","safe","said","sake","sale","salt","same","sand","save","seat","seed","seek","seem","seen","self","sell","send","sent","sept","ship","shop","shot","show","shut","sick","side","sign","site","size","skin","slip","slow","snow","soft","soil","sold","sole","some","song","soon","sort","soul","spot","star","stay","step","stop","such","suit","sure","take","tale","talk","tall","tank","tape","task","team","tech","tell","tend","term","test","team","tech","tell","tend","term","test","text","than","that","them","then","they","thin","this","thus","till","time","tiny","told","toll","tone","tony","took","tool","tour","town","tree","trip","true","tune","turn","twin","type","unit","upon","used","user","vary","vast","very","vice","view","vote","wage","wait","wake","walk","wall","want","ward","warm","wash","wave","ways","weak","wear","week","well","went","were","west","what","when","whom","wide","wife","wild","will","wind","wine","wing","wire","wise","wish","with","wood","word","wore","work","yard","yeah","year","your","zero","able"],
           ["claim","class","enter","entrer","field","fifth","fifty","fight","final","first","fixed","flash","fleet","floor","fluid","focus","force","forth","forty","forum","found","frame","frank","fraud","fresh","front","fruit","fully","funny","giant","given","glass","globe","going","grace","grade","grand","grant","grass","great","green","gross","group","grown","guard","guess","guest","guide","happy","harry","heart","heavy","hence","henry","horse","hotel","house","human","ideal","image","index","inner","input","issue","japan","jimmy","joint","jones","judge","known","label","large","laser","later","laugh","layer","learn","lease","least","leave","legal","level","lewis","light","limit","links","lives","local","logic","loose","lower","lucky","lunch","lying","magic","major","maker","march","maria","match","maybe","mayor","meant","media","metal","might","minor","minus","mixed","model","money","month","moral","motor","mount","mouse","mouth","movie","music","needs","never","newly","night","noise","north","noted","novel","nurse","occur","ocean","offer","often","order","other","ought","paint","panel","paper","party","peace","peter","phase","phone","photo","piece","pilot","pitch","place","plain","plane","plant","plate","point","pound","power","press","price","pride","prime","print","prior","prize","proof","proud","prove","queen","quick","quiet","quite","radio","raise","range","rapid","ratio","reach","ready","refer","right","rival","river","robin","roger","roman","rough","round","route","royal","rural","scale","scene","scope","score","sense","serve","seven","shall","shape","share","sharp","sheet","shelf","shell","shift","shirt","shock","shoot","short","shown","sight","since","sixth","sixty","sized","skill","sleep","slide"],
           ["double","gather","gender","german","global","golden","ground","growth","guilty","handed","handle","happen","hardly","headed","health","height","hidden","holder","honest","impact","import","income","indeed","injury","inside","intend","intent","invest","island","itself","jersey","joseph","junior","killed","labour","latest","latter","launch","lawyer","leader","league","leaves","legacy","length","lesson","letter","lights","likely","linked","liquid","listen","little","living","losing","lucent","luxury","mainly","making","manage","manner","manual","margin","marine","marked","market","martin","master","matter","mature","medium","member","memory","mental","merely","merger","method","middle","miller","mining","minute","mirror","mobile","modern","modest","module","moment","morris","mostly","mother","motion","moving","murder","museum","mutual","myself","narrow","nation","native","nature","nearby","nearly","nights","nobody","normal","notice","notion","number","object","obtain","office","offset","online","option","orange","origin","output","oxford","packed","palace","parent","partly","patent","people","period","permit","person","phrase","picked","planet","player","please","plenty","pocket","police","policy","prefer","pretty","prince","prison","profit","proper","proven","public","pursue","raised","random","rarely","rather","rating","reader","really","reason","recall","recent","record","reduce","reform","regard","regime","region","relate","relief","remain","remote","remove","repair","repeat","replay","report","rescue","resort","result","retail","retain","return","reveal","review","reward","riding","rising","robust","ruling","safety","salary","sample","saving","saying","scheme","school","screen","search","season"]];
var i=0;
var j=0;
var count=0;
function timmer()
{
	display.innerHTML=(array[j][Math.floor(Math.random()*100)]).toLowerCase();
	var time=setTimeout(myFunction, 1000);
	function myFunction()
	{
		if(display.innerHTML==word.value)
		{
			document.getElementById('word').value = '';
			i++;
			count++;
			scr+=10;
			score.innerHTML=scr;
			if (count==13)
			{
				j++;
				level.innerHTML=j+1;
				i=0;
			}
			if (j==3)
			{
				display.innerHTML="CONGOS YOU WON !!";
			}
			else
				timmer();
			
		}
		else
		{
			display.innerHTML="TRY AGAIN!!";
			document.getElementById('word').value = '';

		}

	}
}
function restart()
{
	i=0;
	scr=0;
	j=0;
	count=0;
	score.innerHTML=0;
	level.innerHTML=1;
	timmer();
}
