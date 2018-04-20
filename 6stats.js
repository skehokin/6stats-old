function capitalise(string){
//return a string which is the concatination of caps string[0]and string[1:]
thing=(string.charAt(0)).toUpperCase()+string.slice(1);
return thing;
}

function titlecaps(manyWords){
  manyWords=capitalise(manyWords);
  x=0;
  while (x!=-1){
    x=manyWords.indexOf(" ", x+1);
    manyWords=manyWords.slice(0,x+1)+manyWords.charAt(x+1).toUpperCase()+manyWords.slice(x+2);
  }
  return manyWords;
}
function sentencecaps(sentences){
  var newsentences="";
var splitsentences=sentences.split('. ');

for (var i = 0; i < splitsentences.length; i++) {
  if (i!=splitsentences.length-1){
newsentences=newsentences+capitalise(splitsentences[i])+". ";
}
else{
  newsentences=newsentences+capitalise(splitsentences[i]);


}
}
  return newsentences;
}


var l;
var g;
var f;
var t;
var e;
var x;
var n;
var v=0;
var Strength;
var Dexterity;
var Constitution;
var Intelligence;
var Wisdom;
var Charisma;

var ra;

var agd
agd=Math.random();
agd=(Math.floor(agd*100));


var ag;
ag=Math.random();

if (agd<80){
ag=15+(Math.floor(ag*35));
}
else if(agd<95 && agd>80){

ag=50+(Math.floor(ag*20));
}
else{
  ag=70+(Math.floor(ag*20));


  }

document.getElementById("age").innerHTML=ag+" equivalent human age";

ra=Math.random();
ra=(Math.floor(ra*7));
var races=["human","half-orc","half-elf","dwarf","elf","gnome","halfling"];

document.getElementById("race").innerHTML=capitalise(races[ra]);

while(v<6){

function roll(){
l=Math.random();
l=(Math.ceil(l*6));
return(l);
}

f=roll();
t=roll();
x=roll();
e=roll();


if (f<=t && f<=x && f<=e){

n=t+x+e;
v++;

    if(v==1){

      if (races[ra]=="half-orc"){
        n=n+2;
        }
      else if (races[ra]=="human"){
      n=n+1;
      }
      else{}

      if(ag>=35&&ag<53){
      n=n-1;
      }

      if(ag>=53&&ag<70){
      n=n-2;
      }

      if(ag>=70){
      n=n-3;
      }



    Strength=n;
    }
    else if(v==2){


      if (races[ra]=="elf"){
        n=n+2;}
      else if (races[ra]=="halfling"){
        n=n+2;}
      else if (races[ra]=="human"){
      n=n+1;
    }
    else{}


      if(ag>=35&&ag<53){
      n=n-1;
      }

      if(ag>=53&&ag<70){
      n=n-2;
      }

      if(ag>=70){
      n=n-3;
      }

    Dexterity=n;
    }
    else if(v==3){

    if (races[ra]=="half-orc"){
      n=n+1;
    }
    else if (races[ra]=="dwarf"){
      n=n+2;}
      else if (races[ra]=="human"){
    n=n+1;
    }
    else{}

      if(ag>=35&&ag<53){
      n=n-1;
      }

      if(ag>=53&&ag<70){
      n=n-2;
      }

      if(ag>=70){
      n=n-3;
      }


    Constitution=n;
    }

    else if(v==4){

      if (races[ra]=="gnome"){
        n=n+2;
      }
      else if (races[ra]=="human"){
      n=n+1;
      }
      else{}

      if(ag>=35&&ag<53){
      n=n+1;
      }

      if(ag>=53&&ag<70){
      n=n+2;
      }

      if(ag>=70){
      n=n+3;
      }



      Intelligence=n;
    }
    else if(v==5){


      if (races[ra]=="human"){
      n=n+1;
      }
      else{}

      if(ag>=35&&ag<53){
      n=n+1;
      }

      if(ag>=53&&ag<70){
      n=n+2;
      }

      if(ag>=70){
      n=n+3;
      }

      Wisdom=n;
    }
    else{

    if (races[ra]=="half-elf"){
      n=n+2;
    }
    else if (races[ra]=="human"){
    n=n+1;
    }
    else{}

      if(ag>=35&&ag<53){
      n=n+1;
      }

      if(ag>=53&&ag<70){
      n=n+2;
      }

      if(ag>=70){
      n=n+3;
      }

    Charisma=n;
    }

}

else if (t<=f && t<=x && t<=e){

n=f+x+e;
v++;

    if(v==1){
    Strength=n;
      if (races[ra]=="half-orc"){
        n=n+2;

        }
      else if (races[ra]=="human"){
      n=n+1;
      }
      else{}
    Strength=n;
    }
    else if(v==2){


      if (races[ra]=="elf"){
        n=n+2;}
      else if (races[ra]=="halfling"){
        n=n+2;}
      else if (races[ra]=="human"){
      n=n+1;
    }
    else{}

    Dexterity=n;
    }
    else if(v==3){

    if (races[ra]=="half-orc"){
      n=n+1;
    }
    else if (races[ra]=="dwarf"){
      n=n+2;}
      else if (races[ra]=="human"){
    n=n+1;
    }
    else{}

    Constitution=n;
    }

    else if(v==4){

      if (races[ra]=="gnome"){
        n=n+2;
      }
      else if (races[ra]=="human"){
      n=n+1;
      }
      else{}
      Intelligence=n;
    }
    else if(v==5){


      if (races[ra]=="human"){
      n=n+1;
      }
      else{}
      Wisdom=n;
    }
    else{

    if (races[ra]=="half-elf"){
      n=n+2;
    }
    else if (races[ra]=="human"){
    n=n+1;
    }
    else{}
    Charisma=n;
    }

}


else if (x<=t && x<=e && x<=f){
n=t+e+f;
v++;

    if(v==1){
    Strength=n;
      if (races[ra]=="half-orc"){
        n=n+2;

        }
      else if (races[ra]=="human"){
      n=n+1;
      }
      else{}
    Strength=n;
    }
    else if(v==2){


      if (races[ra]=="elf"){
        n=n+2;}
      else if (races[ra]=="halfling"){
        n=n+2;}
      else if (races[ra]=="human"){
      n=n+1;
    }
    else{}

    Dexterity=n;
    }
    else if(v==3){

    if (races[ra]=="half-orc"){
      n=n+1;
    }
    else if (races[ra]=="dwarf"){
      n=n+2;}
      else if (races[ra]=="human"){
    n=n+1;
    }
    else{}

    Constitution=n;
    }

    else if(v==4){

      if (races[ra]=="gnome"){
        n=n+2;
      }
      else if (races[ra]=="human"){
      n=n+1;
      }
      else{}
      Intelligence=n;
    }
    else if(v==5){


      if (races[ra]=="human"){
      n=n+1;
      }
      else{}
      Wisdom=n;
    }
    else{

    if (races[ra]=="half-elf"){
      n=n+2;
    }
    else if (races[ra]=="human"){
    n=n+1;
    }
    else{}
    Charisma=n;
    }

}


else {
n=" ";
}
if (n!=" "){

document.getElementById("yo").innerHTML=document.getElementById("yo").innerHTML+"<p class='bigp'> "+n+" </p>";}
}
var p;
p=Math.random();
p=(Math.floor(p*9));

var alignment=["lawful good","neutral good","chaotic good","lawful neutral","true neutral","chaotic neutral","lawful evil", "neutral evil", "chaotic evil"];
var specAlignment=capitalise(alignment[p])
function secondcap(good){
if (specAlignment.indexOf(good)!=-1){
specAlignment=specAlignment.slice(0,specAlignment.indexOf(good))+capitalise(specAlignment.slice(specAlignment.indexOf(good)));
}}
secondcap("good")
secondcap("evil")
secondcap("neutral")

document.getElementById("al").innerHTML=specAlignment;

var classes=["Strength","Dexterity","Constitution", "Wisdom", "Intelligence", "Charisma"];


var r="0";

var added=[];


if(Strength>=15){
var is;
is=Math.random();
is=(Math.floor(is*7));

var FLevel=Strength-14+is;


var strclass;
var half4;
half4=Math.random();
half4=(Math.floor(half4*2));
if (half4==1){
strclass="fighter";}
else{
  strclass="monk";

  }


r=1;
added.push(strclass);
}



if (Dexterity>=15){

var id;
id=Math.random();
id=(Math.floor(id*7));

var RLevel=Dexterity-14+id;



r=1;
added.push("rogue");
}
if (Constitution>=15){


  var ic;
ic=Math.random();
ic=(Math.floor(ic*7));

var CLevel=Constitution-14+ic;
var conclass;

if (alignment[p]=="lawful good"){
conclass="paladin";}
else{
  conclass="barbarian";

  }



r=1;
added.push(conclass);


}
if (Wisdom>=15){
    var iw;
iw=Math.random();
iw=(Math.floor(iw*7));

var WLevel=Wisdom-14+iw;

var wisclass;
var half2;
half2=Math.random();
half2=(Math.floor(half2*2));
if (half2==1){
wisclass="cleric";}
else{
  wisclass="druid";

  }



r=1;
added.push(wisclass);
}

if (Intelligence>=15){
var ii;
ii=Math.random();
ii=(Math.floor(ii*7));

var ILevel=Intelligence-14+ii;



r=1;
added.push("wizard");
}
if (Charisma>=15){

var ich;
ich=Math.random();
ich=(Math.floor(ich*7));
var ChLevel=Charisma-14+ich;


var chaclass;
var half3;
half3=Math.random();
half3=(Math.floor(half3*2));
if (half3==1){
chaclass="bard";}
else{
  chaclass="sorcerer";

  }


r=1;
added.push(chaclass);
}
if (r==0){

var ih;
ih=Math.random();
ih=(Math.floor(ih*7));
ih=ih+1;

added.push("commoner")
}









var firstclass=Math.floor(Math.random()*added.length)
var thing


if(firstclass=="rogue")
{
  thing=Dexterity;

  }

else if(firstclass=="monk"||firstclass=="fighter")
{
  thing=Strength;

  }

else if(firstclass=="paladin"||firstclass=="barbarian")
{
  thing=Constitution;

  }

else if(firstclass=="druid"||firstclass=="cleric")
{
  thing=Wisdom;

  }

else if(firstclass=="wizard")
{
  thing=Intelligence;

  }

else if(firstclass=="bard"||firstclass=="sorcerer")
{
  thing=Charisma;

  }

  else{thing=15;}


thing=thing-14;

var level=Math.round((((ag-10)/6)+thing));


document.getElementById("class").innerHTML=document.getElementById("class").innerHTML+"<br /> "+capitalise(added[firstclass])+" Level "+level;

//if the  person's age is above 35 or maybe 40, we'll add an additional class where they can have um another class with a certain lesser amount of levels I guess.

//_____________________________________________________________________________________________

//Gender and Stuff

var m=Math.floor(Math.random()*200);

var subjpronoun;
var objpronoun;
var posspronoun;
var reflexpronoun;

if(m<75){
subjpronoun="she";
objpronoun="her";
posspronoun="her";
reflexpronoun="herself";
}

if(m>=75&&m<125){
subjpronoun="they";
objpronoun="them";
posspronoun="their";
reflexpronoun="themselves";
}

if(m>=125){
subjpronoun="he";
objpronoun="him";
posspronoun="his";
reflexpronoun="himself";
}
var male=0;

if(m>100){
  male=1;

  }

document.getElementById("arrow").style.marginLeft=m+"px";


var sex;

sex=Math.floor(Math.random()*200);


document.getElementById("Sarrow").style.marginLeft=sex+"px";


var firstname;

var lastname;

function randomOutput(into) {

 return into[Math.floor(Math.random()*(into.length))]
}



var namebits1=["grey","chris","lian","el","sher","lock","lac","tac","gei","grin","shy","dor","lai","ky","pin","an","rod","fer","kir","ty","tyn","tyr","ry","ril","jen","jan","jo","ji","je","kor","tor","ker","he","her","hei","hy","hel","bel","a","at","bri","jes","gis","lit","lil","sky","lor","mei","my","wyl","ar","mer","ta","tar","ma","bai","ban","y","abra","sil","so","vi","va","lo","gris","jer","joc","gy","gi","jor","jin","jis","jir","jil","jei","jel","luc","jar","jai","cian","kel","ceil","cor","kin","con","ka","kes","kar","kit","kris","kis","ac","yan","yen","ya","ye","yer","er","ris","rin","ril","re","ren","ren","rem","rel","ra","rey","ro","ri","rei","ryl","rai","roc","ron","rian","ria","rhia","jia","amer","mada","et","ruc","bir","ba","bo","by","bi","basi","bai","bril","i","ir","il","e","le","ler","lyr","la","li","lo","lar","lan","lasi","leil","los","yil","les","thes","thea","the","thi","za","zai","ze","zir","zil","thir","thy","thar","thys","thor","sei","shei","sho","she","se","sor","sar","sari","sen","shen","shor","shar","sy","sai","ser","sia","shia","sir","shir","sa","sian","shil","si","shi","adre","cas"];

var femNamebits2=["na","cail","equin","ette","lette","ana","nie","lor","quil","ica","nelle","elle","anne","en","lian","lin","ler","et","lie","le","re","ra","ala","asta","alis","rie","asa","as","aria","ania","ian","lis","is","nin","la","a","eni","ava","avia","ley","al","esia","ece","ezia","ona","etia","nico","nica","anique","rose","een","n","etta","andra"];

var maleNamebits2=["ner","nor","nel","nand","el","arc","lock","ster","nye","nin","nan","zer","no","kil","quil","on","an","en","seph","nick","lian","ard","ico","rico","ler","lor","et","ham","art","le","ke","re","os","ro","ack","ick","alus","anus","alis","ask","ard","ley","anius","alios","anios","anos","alos","ian","ald","non","los","us","avian","o","n","icos","icus","roth","io","rigo","aise","al","kor","nico","nicus","nikos","al","ic","lo","los","e","nus","ax","ex","k","s","ander","aster"];

var otherIdeas=["stern"]

var namebits=["kor", "kin", "kip", "cal", "kias", "kar", "kan", "koak", "key", "kel", "keph", "keri","keo", "lin", "lor", "lal", "lias", "lar", "lan", "loak", "ley", "leph", "leri", "leo", "reo", "rin", "ror", "ral", "rias", "rar", "ran", "roak", "rey", "reph", "reri", "rel", "shin", "shor", "shal", "shias", "shar", "shan", "shoak", "shey","sheo", "shef", "sheri", "shel", "phin", "phor", "phal", "phias", "phar", "phan", "phoak", "phey", "pheri", "pin", "por", "pal", "pias", "par", "pan", "poak", "pey", "peri", "pheo", "phel", "frin", "fror", "fral", "frias", "frar", "fran", "froak", "frey", "frel", "freo", "beo", "bin", "bor", "bal", "bias", "bar", "ban", "boak", "bey", "bet", "beri", "bel",  "din", "dor", "dal", "dias", "dar", "dan", "doak", "dey", "deph", "deri", "del","deo", "xin", "xor", "xal", "xias", "xar", "xan", "xoak", "xey", "xeph", "xeri", "xel", "xeo", "tin", "tor", "tal", "tias", "tar", "tan", "teo", "toak", "tey", "teph", "teri", "tel", "ol", "rius", "in", "or", "al", "ias", "ar", "an", "oak", "ey", "eph", "eri", "el", "eo", "geo","gor", "gin", "gip", "gal", "gias", "gar", "gan", "goak", "gey", "gel", "geph", "geri"];

// var k=namebits.length;

// //alert(k);
// var nam;
// nam=Math.random();
// nam=(Math.floor(nam*namebits.length));

// var nam2;
// nam2=Math.random();
// nam2=(Math.floor(nam2*namebits.length));

// firstname=capitalise(namebits[nam]+namebits[nam2]);

var firstmorph=randomOutput(namebits1)


if (male!=1){
var secondmorph=randomOutput(femNamebits2);
}
else{
var secondmorph=randomOutput(maleNamebits2);
}

if (firstmorph==secondmorph || firstmorph.slice[-2]==secondmorph.slice[-2]) {

firstmorph=randomOutput(namebits1);

}

if (firstmorph.charAt(firstmorph.length-1)==secondmorph.charAt(0)){
  secondmorph=secondmorph.slice(1);
}

firstname=capitalise(firstmorph+secondmorph);


// document.getElementById("fname").innerHTML= capitalise(namebits[nam]);
// document.getElementById("fname").innerHTML=document.getElementById("fname").innerHTML+ namebits[nam2];

document.getElementById("fname").innerHTML=firstname;


var lastbits=["green","pen","dragon","bottle","tree","red","hilt","goblin","castle","brown","spire","killer","blue","black","heart","strong","claw","griffin","door","port","ship","raven","moon","whit","glass","forest","wander","weak","king","star","son","horse", "sword", "spell", "smith", "love", "fiddle", "bottom","kin","autumn","patch","garden","whiff","tunnel","prince","song","lock", "wind","fire","pit","horn","blow","swine", "folk", "mann", "blood", "mount", "hand","wright", "oak", "key", "shield", "beard", "knight", "spear", "dagger", "axe", "bird", "thunder", "lord", "royal", "pants","god","shoe","knee","nose", "face","dick", "brain","maiden", "ankle","friend","hill","sky","elm","eye","dead","spring","summer","winter","fucker","fish","stag","catcher","hunter","shark","fear","earl"];

//alert(lastbits.length);




var altname;
altname=Math.random();
altname=(Math.floor(altname*100));

 var child;

 if (male==1){
   child="son";

   }
   else{
    child="sdaughter";


     }



if (altname>90){

nam=Math.random();
nam=(Math.floor(nam*153));

var nam2;
nam2=Math.random();
lastname=capitalise(randomOutput(namebits1)+randomOutput(maleNamebits2))+child;


document.getElementById("lname").innerHTML=document.getElementById("lname").innerHTML+ lastname;


  }

  else{

var last;
last=Math.random();
last=(Math.floor(last*87));

var last2;
last2=Math.random();
last2=(Math.floor(last2*87));


document.getElementById("lname").innerHTML= capitalise(lastbits[last]);
if(last==last2){
lastname=lastbits[last];

} else{
document.getElementById("lname").innerHTML=document.getElementById("lname").innerHTML+ lastbits[last2];

lastname=capitalise(lastbits[last]+lastbits[last2]);

}


var dyn;
dyn=Math.random();
dyn=(Math.floor(dyn*100));

var numbers=["I","II","IV"];

var dy;
dy=Math.random();
dy=(Math.floor(dy*3));

if (dyn>85)
{ document.getElementById("lname").innerHTML=document.getElementById("lname").innerHTML+ " "+numbers[dy];



  }

  }



var mon;
mon=Math.random();
mon=(Math.floor(mon*3));


var weh;
weh=Math.random();


if(mon==0){
  weh=(Math.floor(weh*3000));

  }

else if(mon==1){
  weh=(Math.floor(weh*500));

  }
else{
  weh=(Math.floor(weh*50));

  }

var socialclass;
if(weh<20){
socialclass="abject poor";
}


if(weh>=20&&weh<50){
socialclass="underclass";
}

if(weh<100&&weh>=50){
socialclass="lower class";
}

if(weh<200&&weh>=100){
socialclass="lower middle class";
}

if(weh>=200&&weh<400){
socialclass="middle class";
}
if(weh>=400&&weh<500){
socialclass="upper middle class";
}

if(weh>=400&&weh<500){
socialclass="upper middle class";
}

if(weh>=500&&weh<1000){
socialclass="rich but no one knows why";
}

if(weh>=1000&&weh<1500){
socialclass="nouveau riche";
}

if(weh>=1500&&weh<2500){
socialclass="aristocracy";
}


if(weh>=2500){
socialclass="royalty";
}

document.getElementById("money").innerHTML="Social Class: "+titlecaps(socialclass);

var summary=[];
var withsummary=[]

var strange=[];

//character name then age and race. Then some stuff about gender and sexuality.
summary.push(added[firstclass]);


var age;

if(ag<18){
age="n adolescent "+races[ra];
summary.push("teen");
}

else if(ag>=18 &&ag<25){
age=" young adult "+races[ra];

}

else if(ag>=25 &&ag<40){
age="n adult "+races[ra]+" in the prime of " +posspronoun+" life";

}

else if(ag>=40 &&ag<50){
age=" middle-aged "+races[ra];

}


else if(ag>=50 &&ag<60){
age="n aging " +races[ra];

}

else if(ag>=60 &&ag<70){
age="n old " +races[ra];

}

else if(ag>=70 &&ag<80){
age=" fairly old "+races[ra];

}

else if(ag>=80 &&ag<90){
age="n ancient " +races[ra];

}

else{
age=" decrepit old " +races[ra];

}

var experience;

if(level<3&&subjpronoun!=="they"){
experience="is training as a";

}

if(level<3&&subjpronoun=="they"){
experience="are training as a";

}



if(level>=3&&level<6&&subjpronoun!=="they"){
experience="has some battle experience as a";

}

if(level>=3&&level<6&&subjpronoun=="they"){
experience="have some battle experience as a";

}

if(level>=6&&level<10&&subjpronoun!=="they"){
experience="has a great deal of battle experience as a";

}


if(level>=6&&level<10&&subjpronoun=="they"){
experience="have a great deal of battle experience as a";

}

if(level>=10&&subjpronoun!=="they"){
experience="has an immense amount of battle experience as a";

}

if(level>=10&&subjpronoun=="they"){
experience="have an immense amount of battle experience as a";

}
var sgcop;

if(subjpronoun=="they"){
sgcop=" are ";

}
else{sgcop=" is ";}

if (races[ra]!="human"){
document.getElementById("proseintro").innerHTML=firstname+" "+lastname+ " is a" +age+" - if " +subjpronoun+" were human, "+subjpronoun+" would be approximately "+ag+" years of age. "+capitalise(subjpronoun)+" "+experience+" "+added[firstclass]+".";}

else{
document.getElementById("proseintro").innerHTML=firstname+" "+lastname+ " is a" +age+" - " +subjpronoun+sgcop+ag+" years of age, and "+subjpronoun+" "+experience+" "+added[firstclass]+".";}


var haveverb;

if(subjpronoun=="they"){

haveverb="have";

}

else{haveverb="has";}


//"<p>"+firstname+" "+lastname+ " is a "+ag+" aged "+races[ra]+"</p>"

var verb;
    if(subjpronoun=="they"){
      verb=" ";
    }else{
      verb="s"

      }
var verb2;
    if(subjpronoun=="they"){
      verb2=" ";
    }else{
      verb2="es"

      }

var soctraits=[];

var phystraits=[];

var psychtraits=[];

var postraits=[]

var negtraits=[]

var gender;

var genderdesc;
var same;
var opp;
var donotverb;

if(subjpronoun=="they"){

donotverb="don't";
}

else{

donotverb="doesn't";

}
summary.push(races[ra]);
if(m<25){

phystraits.push("This person is very feminine.");
summary.push("hyperfeminine");
gender=" female";

genderdesc=firstname+" has strong feelings about both being female and presenting herself as female. she wears both makeup and feminine clothes almost constantly.";
same="women";
opp="men";

document.getElementById("stategender").innerHTML=document.getElementById("stategender").innerHTML+"Female";
}


if(m>=25&&m<50){

phystraits.push("This person looks female.");
gender=" female";
genderdesc=firstname+" presents as female, wearing feminine clothes and makeup as she feels is appropriate.";
same="women";
opp="men";
summary.push("female");
document.getElementById("stategender").innerHTML=document.getElementById("stategender").innerHTML+"Female";
}

if(m>=50&&m<75){

phystraits.push("This woman is not very womanly.");
gender=" female";
genderdesc=firstname+" presents as female, but doesn't tend to wear makeup or feminine clothes particularly often.";
same="women";
opp="men";
summary.push("tomboy");
document.getElementById("stategender").innerHTML=document.getElementById("stategender").innerHTML+"Female";
}


if(m>=75&&m<100){

phystraits.push("You can't tell by looking what gender this person is.");
gender="";
genderdesc="It's not really possible to detect which gender "+firstname+" considers themselves. they wear masculine clothes, at least.";
same="women";
opp="men";
summary.push("androgynous");
document.getElementById("stategender").innerHTML=document.getElementById("stategender").innerHTML+"?";
}


if(m>=100&&m<125){

phystraits.push("You can't tell by looking what gender this person is.");
gender="";
genderdesc="It's not really possible to detect which gender "+firstname+" considers themselves, but they do appear to be wearing makeup.";
same="men";
opp="women";
summary.push("androgynous");
document.getElementById("stategender").innerHTML=document.getElementById("stategender").innerHTML+"?";
}



if(m>=125&&m<150){

phystraits.push("This man is not very manly.");
gender="male";
genderdesc=firstname+" presents as male, but he's pretty effeminate. he'd probably wear women's clothes.";
same="men";
opp="women";
summary.push("effeminate");document.getElementById("stategender").innerHTML=document.getElementById("stategender").innerHTML+"Male";
}

if(m>=150&&m<175){

phystraits.push("This person looks male.");
gender="male";
genderdesc=firstname+" presents as male. Depending on situation, he may play up or play down his masculinity.";
same="men";
opp="women";
summary.push("male");
document.getElementById("stategender").innerHTML=document.getElementById("stategender").innerHTML+"Male";
}


if(m>=175){

phystraits.push("This person is very masculine.");
gender="male";
genderdesc=firstname+" is clearly very attached to being masculine, and attempts to exaggerate it at any point available to him.";
same="men";
opp="women";
summary.push("hypermasculine");
document.getElementById("stategender").innerHTML=document.getElementById("stategender").innerHTML+"Male";
}




var attraction;

if (sex<=20){
attraction="nobody";

}

if (sex>20&&sex<=65){
attraction="only "+opp;

}

if (sex>65&&sex<=100){
attraction="mostly "+opp+", very occasionally "+same;

}

if (sex>100&&sex<=130){
attraction="mostly "+opp+", sometimes "+same;

}

if (sex>130&&sex<=150){
attraction=opp+" and "+same+" equally ";

}

if (sex>150&&sex<=170){
attraction="mostly "+same+", sometimes "+opp;

}

if (sex>170&&sex<=185){
attraction="mostly "+same+", very occasionally "+opp;

}

if (sex>185){
attraction="only "+same;

}






var hei=Math.floor(Math.random()*200);
document.getElementById("heightarrow").style.marginLeft=hei+"px";
var height;

if (hei<25){

  phystraits.push("They are short for their gender and race.");
  height="very short";
  //summary.push("short");
negtraits.push(height);
  }

if (hei>=25&&hei<50){

height="short";
//summary.push("short");
negtraits.push(height);
}


if (hei>=50&&hei<150){

  phystraits.push("They are of medium height for their gender and race.");
  height="of medium height"
  }

  if (hei>=150&&hei<175){
  height="tall";
  phystraits.push("They are tall for their gender and race.");

  //summary.push("tall");
postraits.push(height);
  }

if(hei>=175){
height="very tall";

//summary.push("tall");
postraits.push(height);
}



var mus=Math.floor(Math.random()*50);
mus=mus+((Strength-8)*11);

if(mus<0){mus=0;} if(mus>200){mus=200;}

document.getElementById("musarrow").style.marginLeft=mus+"px";
var muscles;

if (mus>=150){

  phystraits.push("This person is hugely swole");
  muscles="extremely muscular"
  //summary.push("buff as hell");
postraits.push("buff as hell");

  }
if (mus>=50&&mus<100){

muscles="not very muscular"

}

if (mus>=100&&mus<150){

muscles="quite muscular"
//summary.push("buff");
postraits.push("buff");
}

var doverb;

if(subjpronoun=="they"){
doverb="do";

}
else{
doverb="does";


}

if (mus<25){
muscles="completely lacking in muscles. "+subjpronoun+" " +doverb+ " not  even lift";
//summary.push("feeble-limbed");
negtraits.push("feeble-limbed");
}

if (mus<50&&mus>=25){

  phystraits.push("This person clearly doesn't work out.");
  muscles="not at all muscular";
  //summary.push("weak-limbed");
  negtraits.push("weak-limbed");
  }


var fat=Math.floor(Math.random()*200);
if(fat>100){
fat=fat-((Charisma-8)*5)+10;
fat=fat-((Dexterity-8)*5)+10;}



if(weh<50){
fat=50-(Math.random()*50);
}

if(fat<25&&weh>100){
  fat=fat+25;

  }

if(fat<0){fat=0;} if(fat>200){fat=200;}

document.getElementById("fatarrow").style.marginLeft=fat+"px";

var weight;

if (fat>=175){

  phystraits.push("Is highly overweight.");
weight=subjpronoun+ sgcop+" morbidly obese and";
  //summary.push("hugely fat");
negtraits.push("hugely fat");

  }
if (fat>=150&& fat<175){

  phystraits.push("This person is quite overweight.");
  weight=subjpronoun+ sgcop+" quite overweight and";
//summary.push("fat");

negtraits.push("fat");
  }

if (fat>=125&& fat<150){

  phystraits.push("This person definitely has some fat on them.");
  weight="there's definitely some fat on "+posspronoun+" body, which is otherwise "

//summary.push("fat-ish");

negtraits.push("fat-ish");
  }

if (fat>=100&& fat<125){

  phystraits.push("This person is a little pudgy.");
  weight=subjpronoun+ sgcop+" a bit pudgy and ";

//summary.push("pudgy");

negtraits.push("pudgy");
  }

  if (fat>=50&& fat<100){

  phystraits.push("This person is somewhat thin.");
  weight=subjpronoun+ sgcop+" of medium weight and ";


}

  if (fat>=20&& fat<50){

  phystraits.push("This person is slim, they have very little fat on them.");
  weight="there is very little fat on "+posspronoun+ " body , which is otherwise ";
  //summary.push("skinny");
  postraits.push("thin");

  }

  if (fat<20){

  phystraits.push("This person is unhealthily thin.");
  weight=subjpronoun+ sgcop+" unhealthily thin and ";
//summary.push("starving");
negtraits.push("starving");
  }







var striveverb;
if(subjpronoun=="they"){
  striveverb="strive";

  }
  else{

    striveverb="strives";
    }

    var tendverb;
if(subjpronoun=="they"){
  tendverb="tend";

  }
  else{

    tendverb="tends";
    }


var dom=Math.floor(Math.random()*200);
document.getElementById("domarrow").style.marginLeft=dom+"px";

if (dom>150){
  soctraits.push("Strives for dominance.");
  dominance= striveverb+" for dominance";

  }

  if (dom<=150&&dom>100){

  dominance= tendverb+ " a little more towards dominance";
  }

  if (dom<=100&&dom>=50){

  dominance= tendverb+ " a little more towards submission";
  }

if (dom<50){
  soctraits.push("They are inclined to be submissive to others.");

  dominance=sgcop+"inclined to be submissive towards others";



  }


var clothes;
var aes=Math.floor(Math.random()*200);
document.getElementById("aesarrow").style.marginLeft=aes+"px";
if (aes>150){

  psychtraits.push("This person has a artistic sense of aesthetics.");

  }

  if (aes<50){

  psychtraits.push("This person couldn't create something beautiful even by accident.");

  }

var care=Math.floor(Math.random()*200);
document.getElementById("carearrow").style.marginLeft=care+"px";

var lookverb;
if (subjpronoun=="they"){
lookverb="look";
}
else{lookverb="looks";}

var wearverb;
if (subjpronoun=="they"){
wearverb="wear";
}
else{wearverb="wears";}

//ugly intricate
if (care>=150&&aes<50){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes="although "+firstname+"'s clothes have clearly been well-tended to, and are very neat and clean, the colours and style are horribly chosen. the effect is quite unpleasant."
//summary.push("neat but horribly dressed");
negtraits.push("neatly but horribly dressed");
  }

//ugly neat


if (care<150&&care>=100&&aes<50){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes="although "+firstname+"'s clothes are relatively neat, the colours and style are horribly chosen. "+subjpronoun+" "+ lookverb+" pretty bad."
  //summary.push("neat but badly dressed");

negtraits.push("neatly but badly dressed");
  }
//ugly tatty
if (care<100&&care>=50&&aes<50){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes=firstname+"'s clothes are a bit tatty and very ugly."
  //summary.push("messy and horribly dressed");

negtraits.push("messily and horribly dressed");

  }

//ugly, worn
  if (care<50&&aes<50){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes=firstname+" wears ugly clothes, in unpleasant colours, which are stained and worn."
    //summary.push("messy and horribly dressed");


negtraits.push("messily and horribly dressed");
  }

//beautiful, intricate

if (care>=150&&aes>=150){

  phystraits.push("They are dressed fabulously.");

  clothes=firstname+" wears artistically well-chosen, intricate clothes, which are perfectly clean - "+subjpronoun+" "+lookverb+" fabulous.";

  //summary.push("fabulously dressed");

postraits.push("fabulously dressed");
}


//beautiful, neat


if (care<150&&care>=100&&aes>=150){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes=firstname+"'s clothes are artistically well chosen and neat."
  //summary.push("beautifully dressed");
postraits.push("beautifully dressed");
  }
//beautiful,tatty

if (care<100&&care>=50&&aes>=150){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes="although "+firstname+"'s clothes are a little old and poorly cared for, they are artistically well chosen and beautiful."
  //summary.push("messily but fabulously dressed");

postraits.push("messily but fabulously dressed");
  }


//beautiful, worn
if (care<50&&aes>=150){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes="although "+firstname+"'s clothes are worn messily and with little care, "+posspronoun+" excellent sense of aesthetics shines through. "+subjpronoun+" "+ lookverb+"  wonderful."

//summary.push("messily but fabulously dressed");


postraits.push("messily but fabulously dressed");

  }


//conservative, worn

if (care<50&&aes>=50&&aes<100){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes=firstname+"'s clothes are stained, worn, and conservatively chosen."
  //summary.push("messy and conservatively dressed");
negtraits.push("messily and conservatively dressed");

  }



//conservative, tatty

if (care<100&&care>=50&&aes>=50&&aes<100){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes=firstname+"'s clothes are a bit tatty and conservatively chosen."
  //summary.push("messy and conservatively dressed");
  negtraits.push("messily and conservatively dressed");
  }


//conservative, neat

if (care<150&&care>=100&&aes>=50&&aes<100){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes=firstname+"'s clothes are neat but conservatively chosen."
  //summary.push("neatly and conservatively dressed");
postraits.push("neatly and conservatively dressed");
  }


//conservative, intricate

if (care>=150&&aes>=50&&aes<100){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes=firstname+"'s clothes are intricate and well-cared-for but conservatively chosen."
  //summary.push("perfectly but conservatively dressed");
postraits.push("perfectly but conservatively dressed");
  }


//nice, worn

if (care<50&&aes>=100&&aes<150){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes="although "+firstname+"'s clothes are worn messily and with little care, they are well-chosen, and look good."
//summary.push("messy but well dressed");
postraits.push("messily but well dressed");
  }
//nice, tatty

if (care<100&&care>=50&&aes>=100&&aes<150){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes="although "+firstname+"'s clothes are a bit tatty, they are well-chosen, and look good."

//summary.push("messy but well dressed");
postraits.push("messily but well dressed");
  }

//nice, neat.
if (care<150&&care>=100&&aes>=100&&aes<150){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes= firstname+"'s clothes are clean, neat, and well-chosen. "+subjpronoun+" " +lookverb+ " good."
//summary.push("neat and well dressed");

postraits.push("neatly and well dressed");

  }
//nice, intricate
if (care>=150&&aes>=100&&aes<150){

  phystraits.push("Clothes are messy and worn carelessly.");
  clothes= firstname+"'s clothes are intricate, perfectly clean and well-chosen. "+subjpronoun+" " +lookverb+ " very nice."

//summary.push("perfectly clean and well dressed");

postraits.push("perfectly clean and well dressed");
  }


var lib=Math.floor(Math.random()*200);

var whee=Math.random();
if(sex<20&&whee>0.5){
  lib=0;
  }
document.getElementById("libarrow").style.marginLeft=lib+"px";
var libido;
if (ag<15){
  libido="but"+sgcop+"not sure about the sex."

  }

  else{
if (lib<20){

  phystraits.push("This person is not interested in anyone's junk.");
  libido="and"+sgcop+"not interested in the sex."
  }

  if (lib>=20&&lib<=150){
    libido="and"+sgcop+"open to the sex."


    }

  if (lib>150){

  phystraits.push("This person really hopes any attractive person is up for it.");
  libido="and"+sgcop+"really interested in doing the sex."

  //summary.push("horny");
  negtraits.push("horny");

}

  }


var hair=Math.floor(Math.random()*200);

if(hair>100&&m>175){
  hair=hair-100;
}
  if(hair<100&&m<25){
  hair=hair+(100-m);

  }

if(hair<0){hair=0;} if(hair>200){hair=200;}

document.getElementById("hairarrow").style.marginLeft=hair+"px";

var hairlength;
if (hair<15){

  phystraits.push("They're basically bald.");
hairlength="bald";
  summary.push("bald");
  }

else{

if (hair>=15&&hair<25){

  phystraits.push("Short hair, in a masculine cut.");
  "Short hair, in a masculine cut."
  hairlength="short, in a masculine cut";
  withsummary.push("short");
  }

if (hair>=25&&hair<50){

  phystraits.push("Their hair is cut short but has gone a while without a haircut.");
  hairlength="short, but growing out";

withsummary.push("short");
  }


if (hair>=50&&hair<100){

  phystraits.push("Their hair is chin length.");
  hairlength="chin-length";
withsummary.push("chin-length");
  }
if (hair>=100&&hair<150){

  phystraits.push("Their hair is quite long, although it may be bound back.");
  hairlength="long";
withsummary.push("long");
  }

  if (hair>=150){

  phystraits.push("Their hair is very long, and, if it is not bound back, falls down to thigh level.");
  hairlength=" very long. If it is not bound back it falls almost to thigh level";
withsummary.push("long-ass");
  }


var curly;
var curl=Math.floor(Math.random()*200);
document.getElementById("curlarrow").style.marginLeft=curl+"px";

if (curl<50){

  phystraits.push("Hair is straight");
  curly="straight";

withsummary.push("straight");
  }

  if (curl>=50 && curl<100){

  phystraits.push("Hair is wavy");
  curly="wavy";
withsummary.push("wavy");
  }

  if (curl>=100 && curl<150){

  phystraits.push("Hair is curly");
  curly="curly";
withsummary.push("curly");
  }

  if(curl>=150){

  phystraits.push("Hair is tightly curled");
  curly="tightly curled";
withsummary.push("tightly curled");
  }




var color2=Math.floor(Math.random()*200);
document.getElementById("colorarrow").style.marginLeft=color2+"px";
if (ag>65){

haircolor="white";

withsummary.push(haircolor+" hair");
}
else{

if (color2>150){

  phystraits.push("Light Hair.");

  }

  if (color2<50){

  phystraits.push("Dark Hair");

  }

var redi=Math.floor(Math.random()*200);
document.getElementById("redarrow").style.marginLeft=redi+"px";

if (redi>150){

  phystraits.push("Hair is red.");

  }

if(hair!="bald"){

if(color2>=175&&redi<=150){

haircolor="platinum blonde";


}

if(color2>=175&&redi>150){

haircolor="light pink or some shit";

}


if(color2>=150&&color2<175&&redi>150){

haircolor="strawberry blonde";

}

if(color2>=150&&redi<=150){

haircolor="blonde";

}

if(color2>=100&&color2<150&&redi>150){

haircolor="red";

}

if(color2>=100&&color2<150&&redi<=150){

haircolor="light brown";

}

if(color2>=50&&color2<100&&redi<=150){

haircolor="dark brown";

}

if(color2>=50&&color2<100&&redi>150){

haircolor="dark red";

}

if(color2>=25&&color2<50&&redi>150){

haircolor="very dark red";

}

if(color2>=25&&color2<50&&redi<=150){

haircolor="very dark brown";

}


if(color2<25){

haircolor="black";

}
withsummary.push(haircolor+" hair");
}


}}

var shoul=Math.floor(Math.random()*200);
document.getElementById("shouldarrow").style.marginLeft=shoul+"px";


var conf=Math.floor(Math.random()*200);
document.getElementById("confarrow").style.marginLeft=conf+"px";


if (conf>150){

  soctraits.push("Easily resorts to physical violence.");
  selfesteem=" super high";
//summary.push("self-assured");
postraits.push("self-assured");
  }

  if (conf>=50&&conf<100){

    selfesteem="pretty low";

    }

      if (conf>=100&&conf<=150){

    selfesteem="pretty high";

    }


  if (conf<50){

  selfesteem=" super low";
  //summary.push("insecure");
  negtraits.push("insecure");
  }





var vio=Math.floor(Math.random()*200);

if (vio>100){
  vio=vio-((Wisdom-10)*10);

if(vio<0){vio=0;} if(vio>200){vio=200;}
  }

document.getElementById("vioarrow").style.marginLeft=vio+"px";
var resortverb;

if(subjpronoun=="they"){

  resortverb="resort";

  }

  else{resortverb="resorts";}

  var resistverb;

  if(subjpronoun=="they"){

  resistverb="resist";

  }

  else{resistverb="resists";}
var violence;

if (vio>150){

  soctraits.push("Easily resorts to physical violence.");
  violence=" easily "+resortverb +" to physical violence rather than discussion"
//summary.push("violent");
negtraits.push("violent");
  }

  if (vio>=50&&vio<100){

    violence=" generally "+ resistverb +" the temptation of physical violence"

    }

      if (vio>=100&&vio<=150){

    violence=" can be tempted to physical violence"

    }


  if (vio<50){

  soctraits.push("Very unlikely to resort to physical violence.");

  violence=sgcop+"very unlikely to resort to physical violence"
  //summary.push("non-violent");
postraits.push("non-violent");
  }



var soc=Math.floor(Math.random()*200);
soc=soc+((Charisma-10)*5)-10;

if(soc<0){soc=0;} if(soc>200){soc=200;}


document.getElementById("socarrow").style.marginLeft=soc+"px";

var sociable;
if (soc>150){

  soctraits.push("A social butterfly.");
  sociable="a social butterfly";
  //summary.push("sociable");
postraits.push("sociable");
  }

  if (soc>=100&&soc<=150){


  sociable="pretty gregarious";
  }


    if (soc>=50&&soc<100){


  sociable="somewhat reclusive";
  }

  if (soc<50){

  soctraits.push("A hermit. Avoids socialising.");
  sociable="a hermit";
//summary.push("anti-social")
negtraits.push("uninterested in socialising");
  }

var cyn=Math.floor(Math.random()*200);

if (cyn>100){
  cyn=cyn-((Wisdom-10)*5);
  }
else{
  cyn=cyn+((Wisdom-10)*5);

  }
if(cyn<0){cyn=0;} if(cyn>200){cyn=200;}
var expectverb;

if (subjpronoun=="they"){
  expectverb="expect";

  }else{

    expectverb="expects";

    }
document.getElementById("cynarrow").style.marginLeft=cyn+"px";
var cynicism;
if (cyn>150){

  psychtraits.push("A cynic. Expects the worst of people.");
  cynicism="a cynic - "+subjpronoun+" "+expectverb+" the worst of people.";
//summary.push("cynical");
negtraits.push("cynical");
  }

  if (cyn>=50&&cyn<=100){

  cynicism="pretty idealistic."
  }

  if (cyn>100&&cyn<=150){

  cynicism="pretty cynical."
  }

  if (cyn<50){


  cynicism="a committed idealist."

//summary.push("idealistic");
postraits.push("idealistic");
  }



var confl=Math.floor(Math.random()*200);

if(confl<0){confl=0;} if(confl>200){confl=200;}

var shyverb;

if (subjpronoun=="they"){

  shyverb="shy";
  }else{shyverb="shies";}

document.getElementById("conflictarrow").style.marginLeft=confl+"px";
if (confl>150){

  soctraits.push("Never " +shyverb+ " away from interpersonal conflict, seeking to out every disagreement early.");
  conflict="never " +shyverb+ " away from interpersonal conflict, seeking to out every disagreement early"

//summary.push("oppositional");
negtraits.push("oppositional");
  }

var avoidverb;

if (subjpronoun=="they"){

  avoidverb="avoid";
  }else{avoidverb="avoids";}

  if (confl<50){

  soctraits.push(avoidverb+ " a conflict for as long as possible, stifling any disagreement.");

  conflict=avoidverb+ " a conflict for as long as possible, stifling any disagreement"

 //summary.push("fawning");

negtraits.push("fawning towards authority");
}

  var preferverb;

if (subjpronoun=="they"){

  preferverb="prefer";
  }else{preferverb="prefers";}

  if (confl>=50&&confl<=100){

  conflict=preferverb+" to avoid a conflict"

  }

  if (confl>100&&confl<=150){

  conflict=preferverb+" to initiate a conflict"

  }
var skin1=Math.floor(Math.random()*200);
document.getElementById("skinarrow").style.marginLeft=skin1+"px";

if (skin1>=175){

  phystraits.push("Has light skin.");
  skin="ghostly pale";

  }
if (skin1<175&&skin1>=150){

  phystraits.push("Has light skin.");
  skin="pale";

  }

if (skin1<150&&skin1>=125){

  phystraits.push("Has light skin.");
  skin="tan brown";

  }

if (skin1<125&&skin1>=75){

  phystraits.push("Has light skin.");
  skin="mid brown";

  }


  if (skin1>=50&&skin1<75){

  phystraits.push("Has dark skin");
  skin="dark brown";
  }

  if (skin1>=25&&skin1<50){

  phystraits.push("Has dark skin");
  skin=" very dark";
  }


  if (skin1<25){

  phystraits.push("Has dark skin");
  skin="shiny dark";
  }


withsummary.push(skin+" skin");

var energy;

var hyper=Math.floor(Math.random()*200);
document.getElementById("hyperarrow").style.marginLeft=hyper+"px";

if (hyper>150){

  psychtraits.push("Hyperactive.");

  energy="energetic.";
  //summary.push("hyperactive");
postraits.push("energetic");
  }

if (hyper<=150&&hyper>=100){


  energy="not lacking in energy.";

  }

if (hyper<100&&hyper>=50){


  energy="fairly low in energy.";

  }

  if (hyper<50){

  psychtraits.push("Low in energy, slow and considered.");
  energy="low in energy, slow and considered in action.";

  //summary.push("lethargic");
negtraits.push("lethargic");

  }




var consc=Math.floor(Math.random()*200);
if(alignment[p]=="lawful good" || alignment[p]=="lawful neutral" || alignment[p]=="lawful evil" && consc<100){
consc=consc+(Math.random()*60);
}

else if(alignment[p]=="chaotic good" || alignment[p]=="chaotic neutral" || alignment[p]=="chaotic evil" && consc>100){
consc=consc-(Math.random()*60);
}
else{}

if(consc<0){consc=0;} if(consc>200){consc=200;}
document.getElementById("conscarrow").style.marginLeft=consc+"px";
var conscientious;

if (consc>150){

  psychtraits.push("Responsible, conscientious and diligent.");
  conscientious=subjpronoun+sgcop+"particularly responsible, conscientious and diligent. ";
//summary.push("diligent");

postraits.push("diligent");
  }

  else if (consc<50){

  psychtraits.push("Irresponsible, careless and lazy.");
  conscientious=subjpronoun+sgcop+"particularly irresponsible, careless and lazy.";
//summary.push("lazy");

negtraits.push("lazy");
  }

  else{
    conscientious="";

    }

var ambition;
var motivation=["power","prestige","appreciation","social change","political change","knowledge"]
var particularmotivation=motivation[Math.floor(Math.random()*motivation.length)]
var ambit=Math.floor(Math.random()*200);
document.getElementById("ambitarrow").style.marginLeft=ambit+"px";

if (ambit>150){
  ambition=subjpronoun+sgcop+"highly ambitious for "+particularmotivation+" ";
  psychtraits.push("Highly ambitious.");
//summary.push("ambitious");
negtraits.push("ambitious for "+particularmotivation);
  }

if (ambit<=150&&ambit>=100){
  ambition=subjpronoun+sgcop+"pretty ambitious for "+particularmotivation+" ";
  psychtraits.push("Highly ambitious.");

  }

  if(ambit>=50&&ambit<100){

  psychtraits.push("Unambitious.");
  ambition=subjpronoun+sgcop+"not very ambitious"

  }
  if(ambit<50){

  psychtraits.push("Unambitious.");
  ambition=subjpronoun+sgcop+"completely unambitious"
//summary.push("unambitious");
negtraits.push("unambitious");
  }

var emotions=" ";

var calc=Math.floor(Math.random()*200);
document.getElementById("calcarrow").style.marginLeft=calc+"px";

if (calc>150){

  psychtraits.push("Emotional. A mess.");
  emotions=" either not able or completely unwilling to control "+posspronoun+" emotions."
//summary.push("super emotional");


negtraits.push("super emotional");
}

if (calc<=150&&calc>=100){

  psychtraits.push("Emotional. A mess.");
  emotions=" definitely not afraid to demonstrate "+posspronoun+" emotions."
  }


if (calc<100&&calc>=50){

  psychtraits.push("Emotional. A mess.");
  emotions=" generally pretty unemotional and calculating."
  }



  if(calc<50){

  psychtraits.push("Calculating.");
  emotions=" suppress"+verb2+" "+posspronoun+" emotions completely, approaching life in a calculating fashion."
//summary.push("emotion-suppressing");
negtraits.push("emotion-suppressing");

  }



 var beard=" ";

var beard2=Math.floor(Math.random()*200);
if(beard2<0){beard2=0;} if(beard2>200){beard2=0;}
if (m>100){

  document.getElementById("beardarrow").style.marginLeft=beard2+"px";

if (ag<17){
beard=subjpronoun+sgcop+"too young to have a beard.";
}
else{
if(beard2<125){
phystraits.push("This person is clean-shaven.");
beard=subjpronoun+" "+sgcop+" clean-shaven.";
}

if (beard2>=125 &&beard2<130){

  phystraits.push("Has a moustache.");
  beard=subjpronoun+ " "+haveverb+" a glorious moustache.";
withsummary.push(" a glorious moustache");
  }

if (beard2>=130 &&beard2<140){

  phystraits.push("Has a moustache.");
  beard=subjpronoun+" "+haveverb+" a sleazy moustache.";
withsummary.push(" a sleazy moustache");
  }

if (beard2>=140 &&beard2<150){

  phystraits.push("Has a goatee.");
  beard=subjpronoun+" "+haveverb+" a goatee.";
withsummary.push(" a goatee");
  }

if (beard2>=150 &&beard2<160){

  phystraits.push("Has a beard, but no moustache.");
  beard=subjpronoun+" "+haveverb+" a beard with no moustache.";
withsummary.push(" a beard but no moustache");
  }

  if(beard2>=160 && beard2<190){

  phystraits.push("Has a full beard.");
  beard=subjpronoun+" "+ haveverb+ " a full beard.";
withsummary.push(" a full beard");
  }

  if(beard2>=190){

  phystraits.push("Has a long-ass philosopher beard.");
  beard=subjpronoun+" "+haveverb+" (or " +sgcop+ " aiming to grow) a long-ass philosopher beard.";
withsummary.push(" a long-ass beard");
  }

  }
}



var mood=Math.floor(Math.random()*200);
document.getElementById("moodarrow").style.marginLeft=mood+"px";


var temperament;

if (mood<50){
  psychtraits.push("A moody person.");
  temperament="moody and gloomy";
withsummary.push("a gloomy temperament");
  }

    if(mood<100&&mood>=50){

  psychtraits.push("Generally a positive person.");
  temperament="a little gloomy";
  }

    if(mood<=150&&mood>=100){

  psychtraits.push("Generally a positive person.");
  temperament="reasonably happy";
  }

  if(mood>150){

  psychtraits.push("Generally a positive person.");
  temperament="very cheerful";
withsummary.push(" a cheerful temperament");
  }

var giveashit;
var anx=Math.floor(Math.random()*200);
document.getElementById("anxarrow").style.marginLeft=anx+"px";

if (anx<50){

  psychtraits.push("Laid back.");
  giveashit="laid back.";
//summary.push("laid back");


postraits.push("laid back");
  }

  if (anx>=50&&anx<=100){
  giveashit="sort of laid back.";
  }

  if (anx>100&&anx<=150){
  giveashit="kind of uptight and judgemental.";
  }



if(anx>150){

  psychtraits.push("Judgemental.");
  giveashit="judgemental and uptight."
//summary.push("uptight");
negtraits.push("uptight");

  }
var placepreference=" ";
var city=Math.floor(Math.random()*200);
document.getElementById("cityarrow").style.marginLeft=city+"px";
if (city<50&&soc>150){

  psychtraits.push("Country person.");
  placepreference=firstname +" is a country person. everyone is just so friendly in the country! if "+subjpronoun+" "+sgcop+" in the city, "+subjpronoun+" hate"+verb+" it. ";
  }

  if(city>150&&soc>150){

  psychtraits.push("Country person.");
  placepreference=firstname +" is a city person. there's so many people to talk to in the city! if "+subjpronoun+" "+sgcop+" in the country, "+subjpronoun+" hate"+verb+" it. "

  }

if(city>150&&soc<50){

  psychtraits.push("Country person.");
  placepreference=firstname +" is a city person. because everyone leaves you alone in the city. if "+subjpronoun+" "+sgcop+" in the country, "+subjpronoun+" hate"+verb+" it. "

  }


if(city<50&&soc<50){

  psychtraits.push("Country person.");
  placepreference=firstname +" is a country person. because in the country, there's nobody for miles around. if "+subjpronoun+" "+sgcop+" in the city, "+subjpronoun+" hate"+verb+" it. "



  }

strange.push(placepreference);
var courageous="";
var courage=Math.floor(Math.random()*200);
document.getElementById("couragearrow").style.marginLeft=courage+"px";

if (courage<50){

  psychtraits.push("Craven and fearful.");
  courageous=subjpronoun+" "+haveverb+" at least one major fear.";
//summary.push("cowardly");
negtraits.push("cowardly");
  }

  if(courage>150){

  psychtraits.push("Courageous.");
  courageous=subjpronoun+sgcop+"highly courageous.";
//summary.push("courageous");
postraits.push("courageous"); }
var moralsummary=[];




var grouptypes= [posspronoun+" family",posspronoun+" country", posspronoun+" country", "the "+socialclass, "the "+races[ra]+" race", posspronoun+" faction",posspronoun+" friend group",posspronoun+" church", posspronoun+" partner"];

if (weh<100){
grouptypes.push(posspronoun+" gang");
}

var grpchose=Math.floor(Math.random()*grouptypes.length);


var groupish;
var group=Math.floor(Math.random()*200);
document.getElementById("grouparrow").style.marginLeft=group+"px";

if (group<100){

  soctraits.push("Focused on family or other social group.");
  groupish=" "+grouptypes[grpchose]+"'s";
  groupish2=" "+grouptypes[grpchose];
  groupish3=" "+grouptypes[grpchose];
  }

  if(group>=100){

  soctraits.push("Focused on individuals.");
  groupish=posspronoun+" own";
  groupish2=reflexpronoun;
  groupish3=subjpronoun;
  }

var seeverb;

if(subjpronoun=="they"){
  seeverb="see";

  }else{

    seeverb="sees";
    }

var self=Math.floor(Math.random()*50);
if(alignment[p]=="lawful good" || alignment[p]=="chaotic good" || alignment[p]=="neutral good"){
  var goodbal=150;
  self=self+goodbal;
}
else if(alignment[p]=="lawful evil" || alignment[p]=="chaotic evil" || alignment[p]=="neutral evil"){
  var evilbal=0;
  self=self+evilbal;

  }

else{
  var neutralbal=Math.floor(Math.random()*100);
  self=50+neutralbal;

  }
var selfness;
document.getElementById("selfarrow").style.marginLeft=self+"px";

if (self<50){


  selfness="selfish. "+ subjpronoun+" "+haveverb+" few problems with sacrificing everybody else, innocent or otherwise, to "+groupish+" benefit.";

//moralsummary.push("other-sacrificing");


negtraits.push("other-sacrificing");
  }

  if(self>=50&&self<100){

    selfness="selfish. "+ subjpronoun+" rarely "+seeverb+" a reason to give up "+groupish+" benefit for someone else.";
    //moralsummary.push("selfish");
negtraits.push("selfish");
    }

    if(self>=100&&self<=150){

    selfness="selfless, in that "+ subjpronoun+" regularly "+seeverb+" reasons to give up "+groupish+" benefit for someone else.";
    //moralsummary.push("un-selfish");

postraits.push("un-selfish");
    }


  if(self>150){

  soctraits.push("Sacrifices own benefit for others.");
  selfness="selfless. "+subjpronoun+" will sacrifice "+posspronoun+" own benefit, and life, for an innocent person.";

//moralsummary.push("self-sacrificing");

postraits.push("self-sacrificing");
  }


var empathy;

var wantverb;

if(subjpronoun=="they"){
  wantverb="want";

  }else{

    wantverb="wants";
    }


var empath=Math.floor(Math.random()*200);
/*
if(alignment[p]=="lawful evil" || alignment[p]=="chaotic evil" || alignment[p]=="neutral evil" && empath>150){

  empath=empath-(Math.random()*125);

  }*/
document.getElementById("empatharrow").style.marginLeft=empath+"px";



if (empath<50&&self<50){

  empathy=firstname+"'s low empathy makes it easier for "+objpronoun+" to do whatever "+subjpronoun+" need"+ verb+ " to. other people's pain is, also, a big perk.";
//moralsummary.push("sociopathic");
negtraits.push("sociopathic");
  }
  if (empath<100&&empath>=50&&self<50){

  empathy=firstname+" finds that twinges of empathy get in the way sometimes. other people's pain is usually pretty easy to deal with, though. also, sometimes hilarious.";
  }
    if (empath<150&&empath>=100&&self<50){

  empathy=firstname+" finds that empathy often gets in the way. however, it also makes it easier to manipulate others.";

negtraits.push("manipulative");
  }

  if(empath>=150&&self<50){

  soctraits.push("Cannot help but empathise with everyone and anyone.");
  empathy=firstname+" finds it very painful to hurt people, but "+subjpronoun+" know"+verb+" that it's necessary."
//moralsummary.push("empathetic");
postraits.push("empathetic");

  }
  //////


if (empath<50&&self<100&&self>=50){

  empathy=firstname+"'s low empathy makes it easier for "+objpronoun+" to do what "+subjpronoun+" need"+ verb+ " to do to keep "+groupish2+" safe.";
//fmoralsummary.push("hard-hearted");
negtraits.push("hard-hearted");
  }
  if (empath<100&&empath>=50&&self<100&&self>=50){

  empathy=firstname+" wishes that "+subjpronoun+" understood emotions better. it would make it easier to take care of "+groupish2+".";
  }
    if (empath<150&&empath>=100&&self<100&&self>=50){

  empathy=firstname+" is quite empathetic, although "+subjpronoun+ " prefer"+verb+" to focus on taking care of "+groupish2+".";
  }

  if(empath>=150&&self<100&&self>=50){


  empathy=firstname+" finds it very painful to hurt people for "+groupish+" sake, but "+subjpronoun+" know"+verb+" that it's necessary.";

//moralsummary.push("empathetic");

postraits.push("empathetic");
  }
  //////


if (empath<50&&self<150&&self>=100){

  empathy=firstname+" finds other people's emotions just confusing. "+subjpronoun+" want"+verb+" to be nice to people, but it's hard to figure out what they need.";
//moralsummary.push("autistic");
negtraits.push("emotionally oblivious");

  }
  if (empath<100&&empath>=50&&self<150&&self>=100){

  empathy=firstname+" wishes that "+subjpronoun+" understood emotions better. it would make it easier to provide for others.";
  }
    if (empath<150&&empath>=100&&self<150&&self>=100){

  empathy=firstname+" is quite empathetic - "+ subjpronoun+sgcop+" happy to be able to help other people as well as  "+groupish2+".";
  }

  if(empath>=150&&self<150&&self>=100){


  empathy="it's very painful for "+firstname+" when " +subjpronoun+ " "+haveverb+" to hurt people for "+groupish+" sake. "+subjpronoun+" make"+verb+" sure to do it as little as possible.";
  }
////////////

if (empath<50&&self>=150){

  empathy=firstname+" basically ignores people's emotions as incomprehensible and tries to do good in other ways.";
//moralsummary.push("autistic");
negtraits.push("emotionally oblivious");
  }

if (empath<100&&empath>=50&&self>=150){

  empathy="even though "+firstname+" finds other people's emotions pretty confusing, "+subjpronoun+" "+haveverb+" worked very hard to figure out how to help people anyway."
//moralsummary.push("autistic");
negtraits.push("emotionally oblivious");

  }
    if (empath<150&&empath>=100&&self>=150){

  empathy=firstname+"'s unfailing empathy tells "+objpronoun+" exactly where "+subjpronoun+" need"+verb+ " to go.";
//moralsummary.push("empathetic");
postraits.push("empathetic");

  }

  if(empath>=150&&self>=150){


  empathy=firstname+" finds it hard to hurt even the most disgustingly malevolent people and does so as little as possible.";

//moralsummary.push("excessively empathetic");
postraits.push("excessively empathetic");
  }

var generosity;

var greed=Math.floor(Math.random()*200);
/*if(alignment[p]=="lawful evil" || alignment[p]=="chaotic evil" || alignment[p]=="neutral evil" && greed>150){

  greed=greed-Math.floor(Math.random()*125);

  }*/
document.getElementById("greedarrow").style.marginLeft=greed+"px";

if (greed>125){

//moralsummary.push("generous");
postraits.push("generous");
}

if (greed<75){

//moralsummary.push("avaricious");


negtraits.push("avaricious");
}

////evil

if (greed<75&&self<50){

  soctraits.push("Hoards wealth, stingy and avaricious.");
  generosity=subjpronoun+" love"+verb+" money, hoard"+verb+" wealth. bathe"+verb+" in it.";
  }


if (greed>=75&&greed<=125&&self<50){


  generosity=subjpronoun+" "+donotverb+" really care about money. gain it, lose it, none of that really matters, as long as "+groupish3+" is doing well.";
  }


if (greed>125&&self<50){

  generosity=firstname+" is very generous. mainly because giving money to others is a great way to get them to do what you want. plus, it's so nice to be liked.";
  }


//////kind of a dick

if (greed<75&&self>=50&&self<=100){

  soctraits.push("Hoards wealth, stingy and avaricious.");
  generosity=subjpronoun+" love"+verb+" money, hoard"+verb+" wealth. bathe"+verb+" in it.";
  }


if (greed>=75&&greed<=125&&self>=50&&self<=100){


  generosity=subjpronoun+"  "+donotverb+" really care about money. gain it, lose it, none of that really matters, as long as "+groupish3+" is doing well.";
  }


if (greed>125&&self>=50&&self<=100){

  generosity=firstname+" is very generous. mainly because giving money to others is a great way to get what you need. plus, it's nice to be liked.";
  }

//////kind of nice
if (greed<75&&self>=100&&self<=150){

  soctraits.push("Hoards wealth, stingy and avaricious.");
  generosity=subjpronoun+" love"+verb+" money, hoard"+verb+" wealth. bathe"+verb+" in it.";
  }


if (greed>=75&&greed<=125&&self>=100&&self<=150){


  generosity=subjpronoun+" "+donotverb+" really care about money. gain it, lose it, none of that really matters, as long as the people around you are doing well.";
  }


if (greed>125&&self>=100&&self<=150){

  generosity=firstname+" is very generous. "+subjpronoun+" "+donotverb+ " need the money and other people do.";
  }
  if(greed>150){

  soctraits.push("Generous with their money.");

  }



//////good
if (greed<75&&self>150){

  soctraits.push("Hoards wealth, stingy and avaricious.");
  generosity=subjpronoun+" love"+verb+" money, hoard"+verb+" wealth. bathe"+verb+" in it.";
  }


if (greed>=75&&greed<=125&&self>150){


  generosity=subjpronoun+" "+donotverb+" really care about money. gain it, lose it, none of that really matters, as long as you're working to do the right thing.";
  }


if (greed>125&&self>150){

  generosity=firstname+" is very generous. even if "+subjpronoun+" need"+verb+" the money, other people need it more.";
  }
  if(greed>150){

  soctraits.push("Generous with their money.");

  }
var kindness;
var kind=Math.floor(Math.random()*200);

if(alignment[p]=="lawful evil" || alignment[p]=="chaotic evil" || alignment[p]=="neutral evil" && kind>150){

  kind=kind-(Math.random()*150);

  }

if(empath>150){

kind=kind+150;
}


document.getElementById("kindarrow").style.marginLeft=kind+"px";

if (kind<100&&self<50){

  soctraits.push("Enjoys watching people suffer.");
  kindness=firstname+" will do whatever "+subjpronoun+" can to provoke the most enjoyable suffering."
//moralsummary.push("dickish");
negtraits.push("dickish");
  }

  if(kind>=100&&self<50){
  kindness="behaving pleasantly towards those around "+objpronoun+" helps "+objpronoun+" pretend "+subjpronoun+" "+donotverb+" do all the atrocious shit "+subjpronoun+" "+doverb+"."
  soctraits.push("Enjoys helping people.");

//moralsummary.push("affably evil");
negtraits.push("affably evil");
  }

if (kind<100&&kind>=50&&self>=50&&self<=100){

  soctraits.push("Enjoys watching people suffer.");
  kindness="other people's pain is usually pretty funny, though!";
//moralsummary.push("schardenfreudy");
negtraits.push("schardenfreudy");
  }

if (kind<50&&self>=50&&self<=100){

  soctraits.push("Enjoys watching people suffer.");
  kindness=firstname+" ignores other people's preferences in conversation.";
//moralsummary.push("douchey");
negtraits.push("douchey");
  }


  if(kind>=100&&self>=50&&self<=100){
  kindness=firstname+" tries to be pleasant and kind, even towards enemies."
  soctraits.push("Enjoys helping people.");
  //moralsummary.push("excessively friendly");
  postraits.push("excessively polite");
  }


if (kind<100&&kind>=50&&self>150){

  soctraits.push("Enjoys watching people suffer.");
  kindness=subjpronoun+sgcop+"pretty okay with straight up pissing people off for fun. that doesn't mean "+subjpronoun+"'ll ignore the suffering of others, however. ";
  //moralsummary.push("annoying");
negtraits.push("annoying");
  }

if (kind<50&&self>150){

  soctraits.push("Enjoys watching people suffer.");
  kindness=firstname+" isn't interested in being polite or kind to anyone "+subjpronoun+" "+donotverb+" already like.";
negtraits.push("douchey");
  }

if(kind>=100&&kind<150&&self>150){
  kindness=firstname+" starts out pleasant and kind. respect must be earned, however."
//moralsummary.push("polite");
  soctraits.push("Enjoys helping people.");
  postraits.push("polite");
  }

  if(kind>=150&&self>150){
  kindness=firstname+" tries to be pleasant and kind, even towards enemies."
  soctraits.push("Enjoys helping people.");
  //moralsummary.push("kind");
  postraits.push("kind");
  }

if (kind<100&&self>100&&self<=150){

  soctraits.push("Enjoys watching people suffer.");
  kindness=subjpronoun+" enjoy"+verb+" watching other people freak out, and will often act however "+subjpronoun+" feel"+verb+" is most likely to secure a reaction. ";
//moralsummary.push("prankstery");
negtraits.push("prankstery");
  }

  if(kind>=100&&self>100&&self<=150){
  kindness=firstname+" is nice. it doesn't cost anything to be nice."
  soctraits.push("Enjoys helping people.");
  //moralsummary.push("polite");
postraits.push("polite");

  }

var vengence;

var venge=Math.floor(Math.random()*200);

/*
if(alignment[p]=="lawful evil" || alignment[p]=="chaotic evil" || alignment[p]=="neutral evil" && venge>100){
venge=venge-(Math.random()*100);
}*/
if(venge<0){venge=0;} if(venge>200){venge=200;}

document.getElementById("vengearrow").style.marginLeft=venge+"px";


if (venge<50){

  soctraits.push("Seeks vengeance for small grudges.");
  vengence=subjpronoun+" seek"+verb+" vengence for tiny infractions."
//moralsummary.push("petty");
negtraits.push("petty");

  }

if (venge>=50&&venge<100){

  soctraits.push("Seeks vengeance for small grudges.");
  vengence=subjpronoun+" seek"+verb+" vengence for relatively small infractions."

  }

if(venge>=100&&venge<150){

  soctraits.push("Never holds a grudge.");
  vengence=subjpronoun+" forgive"+verb+ " an infraction pretty quickly."
  }


  if(venge>=150){

  soctraits.push("Never holds a grudge.");
  vengence=subjpronoun+" forgive"+verb+ " an infraction almost as quickly as it occurs."
//moralsummary.push("forgiving");
postraits.push("forgiving");


}

var irritability=Math.round(Math.random()*200);

if (irritability>150&&anx>100){

negtraits.push("irritable");
}




var deadsins=["Pride","Sloth","Gluttony","Avarice","Envy","Wrath","Lust"]

var sinrand=Math.floor(Math.random()*7);

var countpos=0;


var countwith=0;

var countneg=0;

for (repeat4=summary.length-1;repeat4>=0;repeat4=repeat4-1)
{
  document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+ " "+summary[repeat4];


  }
var chachange=Math.round(Math.random()*20)

var appearance;

var persuasive;
var convince;
var looks;

var coinflip=Math.random();

var weirdthings=[];


if(Intelligence<9&&ag<50){
appearance=Charisma*10+chachange;
persuasive=Charisma*10-chachange;

}

else if(ag>=50){
appearance=Charisma*10-chachange;
persuasive=Charisma*10+chachange;


}

else{

if(coinflip>0.5){
appearance=Charisma*10-chachange;
persuasive=Charisma*10+chachange;
}

else{
appearance=Charisma*10+chachange;
persuasive=Charisma*10-chachange;
}


}
if (appearance<30){
looks="hideously ugly";
if (Math.random()>0.5){
strange.push(firstname+" wears a mask to hide "+posspronoun+" hideous visage. ");
}
negtraits.push(looks);
}
if (appearance>=30&&appearance<50){

looks="horribly ugly";
negtraits.push(looks);
}


if (appearance>=50&&appearance<80){
looks="pretty ugly";
negtraits.push(looks);
}

if (appearance>=80&&appearance<90){
looks="not pretty";
negtraits.push("not a pretty face");
}

if (appearance>=90&&appearance<110){
looks="plain in appearance";
negtraits.push(looks);
}

if (appearance>=110&&appearance<130){
looks="better than average in looks";
postraits.push(looks);
}

if (appearance>=130&&appearance<150){
if(m>100){
looks="good looking";
}

else{
looks="pretty";}
postraits.push(looks);
}

if (appearance>=150&&appearance<170){

if(m>100){
looks="extremely good looking";
}
else{
looks="beautiful";}
postraits.push(looks);
}

if (appearance>=170){

if(m>100){
looks="godlike in appearance";
}else{
looks="mind-blowingly gorgeous";}
postraits.push(looks);
}

if (Intelligence<6){
persuasive=20;
}

if (persuasive<50&&persuasive>0){

convince="halting";
withsummary.push("halting speech")

}
if (persuasive>=50&&persuasive<100){

convince="not at all persuasive";
negtraits.push("unpersuasive");
}
if (persuasive>=100&&persuasive<135){

convince="not especially persuasive, not especially unpersuasive";
negtraits.splice(0,0,"not especially persuasive");
}
if (persuasive>=135&&persuasive<=160){

convince="eloquent";
postraits.push(convince);
}
if (persuasive>160){

convince="that of a rhetorical genius";

postraits.push("inspiring");

}
if (persuasive<=0){
convince="nonexistant. "+subjpronoun+sgcop+"unable to speak."
negtraits.push("mute");
}


//humility/arrogance
var arrogance;
var humility=Math.round(Math.random()*200);
if (humility<50){
negtraits.push("arrogant");
}

if (humility>150){
postraits.push("humble");
}


if (humility>150&&conf<50){
arrogance=firstname+"'s lack of self-worth reveals itself in "+posspronoun+" humility. "
}
else if (humility>150&&conf>150){
arrogance=firstname+"'s confidence does not prevent "+objpronoun+" from demonstrating appealing humility. "
}

else if (humility<50&&conf>150){
arrogance=firstname+"'s strong self-confidence has soured into arrogance. "
}
else if (humility<50&&conf<50){
arrogance=firstname+" tries to hide "+posspronoun+" low self-worth through arrogance. "
}
else if(humility>150&&conf<=150&&conf>=50){
arrogance=firstname+" displays appealing humility and acknowledgement of "+posspronoun+" own flaws. "

}

else if(humility<50&&conf<=150&&conf>=50){
arrogance=firstname+" nevertheless approaches others with arrogance. "

}

else{arrogance=" "}

//deceptive/honest

var honesty=Math.round(Math.random()*200);
var deception;

if(alignment[p]=="lawful good"||alignment[p]=="lawful neutral"){

honesty=honesty+100;

}

if (honesty>150){
postraits.push("honest");

}
if (honesty<50){
negtraits.push("deceptive");
}


if (honesty>150&&persuasive>160){
deception=" "+firstname+" is almost always honest. on the rare occasion that "+subjpronoun+" feel"+verb+" that lying is necessary, however, "+subjpronoun+sgcop+"always believed - ";
}
else if (honesty<50&&persuasive>160){
deception=" for whatever reason, "+firstname+" always feels that hiding the truth is better than revealing it. moreover, "+subjpronoun+" run"+verb+" very little risk by doing so, since everyone always believes "+objpronoun+" - ";
}

else if (honesty<50&&persuasive>=100&&persuasive<=160){
deception=" for whatever reason, "+firstname+" always feels that hiding the truth is better than revealing it. "+subjpronoun+" "+haveverb+" to be somewhat cautious about this however, since "+posspronoun+" lies don't always escape detection - ";
}

else if (honesty>150&&persuasive>=100&&persuasive<=160){
deception=" "+firstname+" is almost always honest, and "+subjpronoun+sgcop+" generally also understood to have the right idea of things - ";
}




else if (honesty>150&&persuasive<100&&persuasive>=50){
deception=" "+firstname+" is almost always honest. unfortunately for "+objpronoun+", nobody finds "+objpronoun+" convincing - ";
}

else if (honesty<50&&persuasive<100&&persuasive>=50){
deception=" for whatever reason, "+firstname+" always feels that hiding the truth is better than revealing it. unfortunately for "+objpronoun+", nobody finds "+objpronoun+" convincing - ";
}

else if (honesty<50&&persuasive<50){
deception=" "+firstname+" is almost always honest. unfortunately for "+objpronoun+", "+subjpronoun+" "+haveverb+" a hard enough time expressing "+reflexpronoun+" at all, so people rarely believe "+subjpronoun+" "+haveverb+" anything worthwhile to say - ";
}

else if (honesty>150&&persuasive<50){
deception=" for whatever reason, "+firstname+" always feels that hiding the truth is better than revealing it. unfortunately for "+objpronoun+", "+subjpronoun+" "+haveverb+" a hard enough time expressing "+reflexpronoun+" at all, let alone lying - ";
}

else{
deception=" ";
}



//strange qualities

var bodyparts=["left upper arm","left shoulder","left elbow","left lower arm","left hand","right upper arm","right shoulder","right elbow","right lower arm","right hand","left hip","left thigh","left knee","left calf","left ankle","left foot","right hip","right thigh","right knee","right calf","right ankle","right foot","butt","lower back","stomach","chest","upper back","neck","face","chin","cheeks","forehead","crown"

]



var pet=Math.round(Math.random()*200);
var petkinds=["cat","ferret","rabbit","dog","bat","hamster","snake","turtle","raven","owl","lizard","tortoise","hedgehog","chinchilla","rat","mouse","stick insect","parrot"]
var petchoose= Math.floor(Math.random()*petkinds.length);

if(pet>180){

strange.push(subjpronoun+" "+haveverb+" a small pet "+petkinds[petchoose]+". ");
}


var posstattoo=["a scribble","an old partner's name","a tribal pattern", "a dead relative's portrait", "something 'deep'"]
if (weh>1000||aes>150){posstattoo.push("a beautiful pattern");posstattoo.push("a beautiful picture");}

var tattoochoose=Math.floor(Math.random()*posstattoo.length);

var tattoos=Math.round(Math.random()*200);

if (tattoos>180){
strange.push(subjpronoun+" "+haveverb+" a tattoo on "+posspronoun+" "+bodyparts[Math.floor(Math.random()*bodyparts.length)]+". it looks like "+posstattoo[tattoochoose]+". ");

}

var welltravelled=Math.round(Math.random()*200);
if(welltravelled>150&&ag>25)

{strange.push("it seems like "+firstname+" has visited everywhere around these parts that's worth visiting. ");}

if(welltravelled<25){
{strange.push("it seems like "+firstname+" has barely had the chance to see anything around these parts. maybe "+subjpronoun+sgcop+" sheltered? ");}

}

if(alignment[p]=="chaotic neutral" &&weh<200|| alignment[p]=="chaotic good" &&weh<200|| alignment[p]=="chaotic evil"&&weh<200){

if(ag<30){
strange.push(subjpronoun+sgcop+" something of a delinquent. ");
}

if(ag>=30){
strange.push(subjpronoun+sgcop+" something of a ruffian. ");
}
}

if(alignment[p]=="chaotic neutral" &&weh>=200|| alignment[p]=="chaotic good" &&weh>=200|| alignment[p]=="chaotic evil"&&weh>=200){


strange.push(subjpronoun+sgcop+" something of a rebel. ");

}


var weirdclothes=Math.round(Math.random()*200);

if(weirdclothes>180&&aes>100||weirdclothes>180&&aes<50){

strange.push(firstname+"'s clothes look like they might come from some other country, or be a costume. weird. ");


}
var accent;
var strangeaccent=Math.round(Math.random()*200);

if(strangeaccent>150&&strangeaccent<=175){

accent=" with an accent ";
 if (Charisma>13){

accent=accent+" (it's kinda sexy) ";
}
}




else if(strangeaccent>175&&strangeaccent<=195){

accent=" with a thick accent ";

if (Charisma>15){
accent=accent+" (it's still kinda sexy) ";
}
}




else if(strangeaccent>195){

accent= " with an uncomprehensibly thick accent ";
}

else{
accent=" ";

}



//firstname speaks in a voice that is

var voice=Math.round(Math.random()*200);
var voicetypes=["light",]
if (persuasive<75){
voicetypes.push("nasal","croaky","monotonous","grating","gutteral","high-pitched","hoarse","shrill","strangled","wheezy","lisping","raucous","eerie","off-putting","macabre","sinister");
}

if (calc>150){
voicetypes.push(
"brittle",
"breathy",
"hoarse",
"thick with emotion",
"intense",
"throaty",
"sentimental","nostalgic","affected","simpering","weepy","volatile","romantic","passionate","tearful");
}

if(calc>150&&soc>100){
voicetypes.push("gushing");
}

if(calc>150&&cyn<100){

voicetypes.push("romantic","ardent")
}

if(calc>100&&empath>150){

voicetypes.push("affectionate","caring","tender","admiring","considerate","compassionate","sensitive")

}

if (empath<100&&hyper<50&&calc<100){

voicetypes.push("languid","sluggish","indolent","passionless","coldhearted","impassive","unconcerned","dull");
}

if(empath<50){

voicetypes.push("insensitive","tactless","thoughtless","callous")
}


if (calc>150&&soc>150){
voicetypes.push("often a stage whisper");
}

if (calc<50){
voicetypes.push("flat",
"analytical",
"matter-of-fact","hard","pragmatic","cold","cool","serious","uncaring");
}

if (hyper>150){
voicetypes.push("fast");
voicetypes.push("energetic");
}

if (hyper>150&&mood>100){
voicetypes.push("bouncy");
}

if (hyper<50){
voicetypes.push("slow");
voicetypes.push("calm");
voicetypes.push("weary");
}

if (soc<50){
voicetypes.push("gruff",
"rough",
"taut",
"thin",
"whispery",
"taciturn",
"mysterious");

}


if (vio>150){
voicetypes.push("hot-headed");
voicetypes.push("threatening");
voicetypes.push("aggressive");
}


if (soc>150){
voicetypes.push("chatty");

}

if (soc>150&&mood>100){

voicetypes.push("eager");

}

if(courage>50&&hyper>50){

voicetypes.push("determined");
}

if(Intelligence>15&&persuasive<100){
voicetypes.push("unnecessarily wordy");
}
if(Intelligence>12&&arrogance>50&&cyn>100){
voicetypes.push("sarcastic");
voicetypes.push("sardonic");

}


if(mood<50&&conf<50&&hyper<50){
voicetypes.push("dead");
}

if (kind>100){

voicetypes.push(
"cordial",
"helpful",
"polite",
"respectful");
}
if (kind>100&&confl<150){
voicetypes.push("obliging");}

if(kind>100&&persuasive>125){
voicetypes.push("diplomatic",
"courtly");
}

if (kind>100&&self<150){

voicetypes.push("civil");

}

if (kind>150&&self>150){
voicetypes.push("benevolent",
"benign","kind");
}


if (kind>100&&mood>100&&soc>100){
voicetypes.push("amiable",
"affable",
"genial",
"companionable");
}

if(kind>100&&greed>150){
voicetypes.push("magnanimous");
}

if(kind>150&&consc>150){
voicetypes.push("reverent",
"worshipful");
}

if(kind>100&&anx<100){
voicetypes.push("easy");
}
if(kind>100&&consc>100){
voicetypes.push("knightly");
}

if(kind>100&&confl<100&&ambit>100&&conf<100&&vio<100){
voicetypes.push("fawning",
"flattering");
}
if(kind>100&&hyper<100&&anx<100){
voicetypes.push("peaceable");
}

if(kind<100&&venge<100){
voicetypes.push("vindictive");
}


if(venge<50){
voicetypes.push("vengeful");
}

if(kind<50&&mood<50){
voicetypes.push("waspish");
}

if(kind<100&&anx>150&&mood<100){
voicetypes.push("harsh",
"severe",
"strict",
"reproachful",
"denouncing");
}
if(anx>150&&calc>100){
voicetypes.push("censorious",
"indignant","offended");
}
if (anx>150){

voicetypes.push("inflexible",
"uncompromising");
}
if(kind<100&&self<50&&empath<100){

voicetypes.push("cruel",
"abusive","malicious","malevolent");
}

if(kind<100&&self<50&&mood<100){

voicetypes.push("spiteful",
"venomous");
}

if(kind<100&&soc<100&&mood<50){

voicetypes.push("bitter",
"catty","acerbic","caustic","scathing","tart","acrid","vitriolic");

if(humility<50){

voicetypes.push("sneering");
}
}
if (kind<100&&kind>50&&self<150&&self>50&&mood>100){
voicetypes.push("mischievous");

}
if(kind<100&&anx<100){

voicetypes.push("sordid");

}

if(consc>150&&Intelligence>6){

voicetypes.push("crisp");
}

if(group<50){
voicetypes.push("devoted");
}


if(honesty>150||honesty<50&&persuasive>170){

voicetypes.push("sincere",
"guileless", "artless", "frank", "candid", "naive", "straightforward", "direct", "innocent", "forthright","spontaneous");

if(confl>50){
voicetypes.push("outspoken");
}
}

if(humility<100&&kind<100){
voicetypes.push("snide", "withering");
}




if(Wisdom>14&&anx>50){
voicetypes.push("prudent");
}

if(mood>50&&anx<100&&energy>100&&conf>100){
voicetypes.push("effusive",
"extravagant","exuberant","grand","unrestrained","wild","effervescent","light-hearted","merry","blithe","airy","expansive");
if(cyn<50){
voicetypes.push("fanciful");

}

}
if(mood>100&&anx<100&&conf>100){
voicetypes.push("nonchalant");
}

if(mood>50&&energy>100&&conf>100){
voicetypes.push("ecstatic","enthusiastic","exhilarated","exultant");

}


if(mood>100&&confl>100&&courage<150&&persuasive<130&&calc>50){
voicetypes.push("whiny","fretful","fractious","petulant","querulous","obnoxious","pouting","bemoaning","plaintive","whimpering");

}


if(mood<100&&kind<150&&courage<150&&soc<100){
voicetypes.push("suspicious");
}


if(mood<100&&confl>100&&kind<100){
voicetypes.push("rancorous");

}


if(mood<100&&anx>150&&soc<100){
voicetypes.push("chilly");
}

if (mood>100&&empath<150&&kind<150&&kind>50&&consc<100&&anx<50){
voicetypes.push("teasing","impish","impertinent","flippant","frivolous","capering","sassy","comical","facetiou","whimsical","punny","audacious","cheeky","immature","unabashed","satirical","playful","provocative");

}

if(kind<100&&mood>100&&consc<125&&anx<100){
voicetypes.push("joking");
}

if(mood>100&&humility<100){
voicetypes.push("cocky");
}

if(empath<150&&kind<100&&consc<150&&anx<50){
voicetypes.push("profane","insolent","irreverent","inappropriate","offensive");
if(kind<50){
voicetypes.push("derisive","insulting","jeering","mocking","taunting");
}
}

if(Intelligence>12&&mood>100&&anx<100&&soc>100){
voicetypes.push("witty");
}

if(Intelligence>12&&mood>100&&anx<100&&cyn>100){
voicetypes.push("wry");
}


if(Intelligence>12&&mood<150&&anx<100&&cyn>100){
voicetypes.push("dry");
}

if(Intelligence>12&&cyn>150){
voicetypes.push("skeptical");
}

if(honesty<100&&consc<100&&anx<100&&persuasive>100&&persuasive<180){
voicetypes.push("coy","glib","artful","sly","guileful");
}

if(Wisdom<12&&Intelligence<15&&anx<100&&consc<150&&mood>100){
voicetypes.push(
"featherbrained","giddy","puerile","foolish","silly","fatuous","illogical","insipid","ditsy","goofy","eccentric");

}


if(Wisdom<12&&Intelligence<15&&calc>150){
voicetypes.push("unreasonable");
}

if(Wisdom<12&&Intelligence<10&&anx<100){

voicetypes.push("vapid","brainless","witless","dopey");
}


if(Wisdom<12&&Intelligence<15&&anx<100&&courage>150){
voicetypes.push("heedless","reckless");
}

if(anx<100&&kind<150&&conf>100&&humility>50){
voicetypes.push("blase","bored");
}

if(kind>100&&humility>150){
voicetypes.push("cultivated","refined");
}

if(Wisdom>13){
voicetypes.push("mature","knowing","worldly");
}

if(persuasive>150&&kind>100){
voicetypes.push("suave","urbane");
}

if(cyn>150){
voicetypes.push("disenchanted");
}

if(courage>100){
voicetypes.push("gritty","gusty");
}

if(irritability>100&&mood<100&&confl>100){
voicetypes.push("surly","ornery","sour","crotchety","cantankerous","irritable","truculent","huffy","irate","resentful","irascible","peevish","snippy");
if(anx>100){
voicetypes.push("dour","disapproving");
}
if(calc>100){
voicetypes.push("temperamental","sullen","sulky");
}
}


if(mood<100&&vio>150&&persuasive<100){
voicetypes.push("feral","bestial");
}

if(self<50&&empath<100&&persuasive<100){
voicetypes.push("merciless","pitiless","ruthless","remorseless","heartless");
}



if(empath>150&&conf<100&&anx>150){
voicetypes.push("guilty","shamed","tormented")
}

if(Intelligence>15&&persuasive>150){
voicetypes.push("incisive");
}

if(vio>150&&mood<150&&persuasive<100&&confl>50){

voicetypes.push("raging","enraged","furious","heated","fuming","incensed","wrathful");

if(anx>150){
voicetypes.push("outraged");}
if(self<50){
voicetypes.push("murderous");
}

if(hyper>100){
voicetypes.push("fierce");
}

}

if(kind<100&&anx<100&&consc<100&&mood>100){
voicetypes.push("insinuating");
}

if(soc<50&&mood<100&&persuasive<100){
voicetypes.push("brusque","prickly","abrupt","blunt","curt");
}


if(confl>150&&mood<100&&energy>100){
voicetypes.push("quarrelsome","argumentative");
}

if(mood<50){
voicetypes.push("bleak","somber","funereal","morose","melancholy","downcast","doleful","dismal","glum","grouchy","mournful","mopey","grumpy","dejected","desolate","despairing","woebegone","forlorn","hollow");
if(anx>100){
voicetypes.push("rueful","pained","troubled","anguished","distraught");
}
if(consc>100&anx>100){
voicetypes.push("stern","formidable");
}

}

if(confl>50&&courage>50&&energy<100){
voicetypes.push("resolute","stubborn","obstinate");

}

if(mood<100&&energy>150){
voicetypes.push("impatient","restless");
}

if(Wisdom<10&&hyper>150){
voicetypes.push("hasty");
}



if(Wisdom<10&&hyper>100&&confl>100){
voicetypes.push("impetuous");
}


if(hyper>100&&confl>100){
voicetypes.push("vehement");
}


if(anx<100&&consc<50&&calc>100){

voicetypes.push("mercurial","inconstant","flighty","temperamental","fickle","capricious");
}


if(conf<100&&persuasive<100){
voicetypes.push("awkward");

}

if(mood<100&&confl<50&&kind<150){

voicetypes.push("passive-aggressive");

}
if(weh<200&&persuasive<100){
voicetypes.push("uncouth",
"unrefined",
"oafish",
"rustic");
}

if(confl<100&&mood>100){

voicetypes.push("obedient");
}

if (mood<100&&cyn>150&&kind<150){
voicetypes.push("scoffing");
}



if(soc>150&&confl>150){
voicetypes.push("nosy","snooping","curious","prying");
if(anx>150){

voicetypes.push("inquisitorial")
}

}

if(Intelligence>14){
voicetypes.push("inquisitive","speculative","probing","quizzical");

}

if(Intelligence<10&&Wisdom<10&&humility>100&&mood<100){

voicetypes.push("confused","puzzled","baffled","befuddled","bewildered","dazed","distracted","flustered","disconcerted","addled");
}


if(energy<100&&confl<100){

voicetypes.push("indifferent","apathetic","passive","torpid");

if(anx<100){
voicetypes.push("offhand")
}

if(mood>100){
voicetypes.push("relaxed","contented","serene","patient","temperate");

if(anx<50){

voicetypes.push("insouciant","unconcerned");
}

if(Constitution<10){
voicetypes.push("exhausted","lethargic");
}

}


}

if(soc<50){
voicetypes.push("rusty");
}



if(courage<150&&cyn>150){
voicetypes.push("skeptical","doubtful","dubious","incredulous","unconvinced","mistrustful");
if(mood<100){
voicetypes.push("suspecting");
}
}

if(courage<100&&conf<100){
voicetypes.push("uneasy","wary"," irresolute","nervous","concerned","apprehensive","alarmed","worried","cautious");

if(soc<100){
voicetypes.push("shy");

}

}

if(courage<50){
voicetypes.push(
"timid","faltering"," hesitant"," shaking","timorous");

}

if(cyn<50){

voicetypes.push("trusting","dreamy");
}


if(cyn<50&&calc>150){

voicetypes.push("infatuated");
}


if(anx>150&&consc>100&&mood<100){

voicetypes.push("inflexible","strict","rigid","sober");
}

if (mood<100&&soc<150){
voicetypes.push("frustrated","repressed","reticent","reserved","withdrawn");
if(humility<50){

voicetypes.push("haughty","unapproachable");

}
}


if(mood<150&&confl>150&&kind<100){

voicetypes.push("hostile");

}

if(mood<150&&confl>150&&kind<100){

voicetypes.push("hostile");

}

if(mood<50&&calc>150&&confl>150){
voicetypes.push("demanding","resentful");

}


if(anx>100&&mood>100&&kind>150){
voicetypes.push("solicitous");
}


if(consc>150){
voicetypes.push("meticulous","dutiful");
}



if(consc>150&&anx>150){

voicetypes.push("fastidious","finicky","mincing","stiff","stuffy","prim","precise","proper","squeamish","artificial","prissy","affronted","puritanical","exacting","forbidding","scrupulous","hypercritical");

}

if(humility>100&&soc<150&&consc>150){
voicetypes.push("controlled","inobtrusive","steady","muted");

}

if(humility>100&&soc<150&&courage<50){
voicetypes.push("shrinking","subdued");
}


if(confl>150&&kind>150&&anx>100){

voicetypes.push("nagging")
}

if(conf<50&&confl<50&&anx>100){
voicetypes.push("helpless","subservient");

}

if(conf<50&&humility>150&&anx>100){

voicetypes.push("mortified","embarrassed","humiliated","ashamed","apologetic","penitent","regretful","reluctant","meek","stammering","uncomfortable","bashful","modest");
}

if(self<50&&kind<50){
voicetypes.push("bullying","harassing","hassling","needling","pestering","provoking","persecuting","irritating");
}

if(confl<50&&conf<50){
voicetypes.push("deferential","submissive","acquiescing","sycophantic","needy","adulatory","ingratiating","yielding","resigned");
if(courage<50){
voicetypes.push("cowering","sniveling");
}

}

if(confl<50&&conf>100){
voicetypes.push("compliant","tractable","flexible","adaptable","versatile","accomodating");
}


if(confl<50&&hyper<50){
voicetypes.push("docile")
}


if (venge<50){
voicetypes.push("lenient","merciful","indulgent","tractable","lax","pardoning","obliging","tolerant","permissive");
}
if(hyper>150&&mood>150){
voicetypes.push("lively","vivacious");

}

if(hyper>150){
voicetypes.push("breathless","restless","vigorous");

}

if(persuasive<100){
voicetypes.push("longwinded","soporific","carping");

}


if (confl>50&&conf>50&&anx<150){
voicetypes.push("independent");
}


if(Intelligence>13&&Wisdom>12&&empath>100){
voicetypes.push("asute","discerning","clever","adroit","shrewd","judicious","subtle","circumspect","profound","insightful","observant");


if(persuasive>120){
voicetypes.push("slick");

}
}


if(empath>150){
voicetypes.push("tactless");
}

if(soc<50){
voicetypes.push("guarded");
}

if(hyper>150&&Wisdom>10){
voicetypes.push("alert");
}

if(Intelligence>12){
voicetypes.push("inventive");

}

if(weh>1000&&persuasive>120){
voicetypes.push("sophistocated");

}

if(Intelligence>14&&calc<50){
voicetypes.push("logical","scholarly");
}



if(empath<100&&calc<50){
voicetypes.push("impartial","tactical","balanced","objective","lucid","contemplative","detached","dispassionate","neutral","even-handed","impersonal","distant");

}


if(hyper<150&&calc<50){
voicetypes.push("placid","stoic","sedate","composed","measured","reflective");

}

if(Wisdom>16||persuasive>170){
voicetypes.push("enlightened");
}

if(anx>150&&courage<150&&hyper>100){
voicetypes.push("vigilant");

}

if(mood>150&&courage<100&&calc>150){
voicetypes.push("awestruck","stupefied","astounded","startled","mystified","stunned");
}

if(lib>150){

voicetypes.push("lustful","salacious","licentious","indecent");
}

if(Wisdom<10){

voicetypes.push("self-indulgent");
}


if(empath>150&&kind<100){
voicetypes.push("pitying");
}

if (anx<50){

voicetypes.push("carefree","even-tempered","informal");
}

if (humility>150){
voicetypes.push("unassuming","self-effacing","unpretentious","modest","diffident");
}

if(mood>100&&hyper<150){
voicetypes.push("satisfied");

}

if (mood>100&&cyn>150){
voicetypes.push("ironical");
}

if(confl>150&&kind<150){
voicetypes.push("disparaging","dissenting","argumentative");

if(mood<100){
voicetypes.push("bristling");
}

}


if(confl>150&&mood>150){
voicetypes.push("bantering");
}


if(mood>100&&cyn>100&&anx<100){
voicetypes.push("amused");
}

if(conf<50){
voicetypes.push("self-mocking","self-pitying","self-critical","pitiful");

}


if(ag>50){
voicetypes.push("reminiscing");
}

if(calc>150&&cyn<50){
voicetypes.push("dramatic");
}


if(calc>150&&kind<100){
voicetypes.push("childish");
}

if(kind>150&&empath>150){
voicetypes.push("fond");
}
if(soc>100&&hyper>100&&persuasive>130&&group>50){
voicetypes.push("rallying");

}




if(persuasive>140){
voicetypes.push("husky",
"clear",
"modulated",
"silvery",
"flirty",
"warm",
"musical",
"motivating","captivating","hypnotic","beguiling","fascinating","pleasing","compelling","mellow","rich","smooth","soft","soothing","mellifluous","melodic","elegant");

}

if(persuasive>100){
voicetypes.push("likable");

}

if(m<130){
voicetypes.push("cute");
voicetypes.push("sweet");
voicetypes.push("flirty");

voicetypes.push("gentle");
voicetypes.push("mild");

}

if(m<50&&persuasive>150){
voicetypes.push("alluring");
voicetypes.push("lovely");
voicetypes.push("gracious");
voicetypes.push("charming");
if (humility>50){
voicetypes.push("demure ");}
}


if(anx>100&&humility<100&&persuasive>100&&consc>100){
voicetypes.push("virtuous","devout","righteous","saintly");
}

//zealous:arrogant, ambitious?, energised, confident

if(humility<100&&ambit>100&&hyper>100&&conf>100){
voicetypes.push("zealous")

}

if(m<50||m>100&&m<125){
voicetypes.push("saccharine");
voicetypes.push("honeyed");
voicetypes.push("syrupy");
voicetypes.push("cutesy");
voicetypes.push("foxy");
voicetypes.push("classy");
}

if (persuasive>100&&ambit>100){

voicetypes.push("purposeful");
}

if(m>150){
voicetypes.push("resonant","aggressive","beligerant","forceful","assertive","strong-willed","brazen","strong","deep")

}

if(hei>150&&fat>100|| hei>150&&mus>100)
{
voicetypes.push("gravelly","deep");
}

if(confl>150){
voicetypes.push("penetrating",
"strident","forceful","pushy");
}

if(vio>150&&persuasive<75){
voicetypes.push("menacing");

}

if (mood<100&&vio>100&&cyn>100){
voicetypes.push("grim");

}


if(fat>150&&humility<50){
voicetypes.push("plummy");
}




if(humility<50){
voicetypes.push("pompous");
voicetypes.push("condescending","puffed-up","arrogant","aloof","bragging","lordly","pretentious","contemptuous","conceited","disdainful","haughty","egotistical","overbearing","proud","supercilious","swaggering","self-satisfied",
"smug","self-justifying");
}
if(Wisdom>12){

voicetypes.push("sensible");
voicetypes.push("reasonable");

}

if(Wisdom>15){

voicetypes.push("wise");

}

if (Intelligence>12){

voicetypes.push("sharp","cunning");
}

if (courage<50) {voicetypes.push("tight", "tremulous", "wobbly");}

if(lib>150){
voicetypes.push("suggestive");
}

if(conf>100&&humility<100&&hyper>100&&confl>100){

voicetypes.push("authoritarian","commanding","dictatorial","imperious","dogmatic","domineering","imposing","officious","peremptory","bossy");

}

if(mood>150){
voicetypes.push("peppy","upbeat","jovial",
"joyful");
}

if(conf>150){
voicetypes.push("cocksure","bold","certain","poised","composed","gung ho","unflappable");
}

if(conf>150&&hyper>50){
voicetypes.push("decisive");
}


if(mood<50){
voicetypes.push("gloomy");
}

if(empath>150){
voicetypes.push("sympathetic");
voicetypes.push("supporting");
}

if(anx>150){
voicetypes.push("prudish");
}


if (socialclass=="underclass"){
voicetypes.push("low-class");
}

if (socialclass=="upper middle class"){
voicetypes.push("snooty");
}


var craziness=Math.round(Math.random()*200);

if (craziness>190){
voicetypes.push("erratic",
"hysteric",
"unglued",
"strung out",
"agitated",
"raving",
"unbalanced",
"frenzied",
"absurd",
"deranged",
"depraved","maniacal");
}


var voicequality1=voicetypes[Math.floor(Math.random()*voicetypes.length)];

var voicequality2=voicetypes[Math.floor(Math.random()*voicetypes.length)];

var vloopcount=0
while (voicequality1==voicequality2){

var voicequality2=voicetypes[Math.floor(Math.random()*voicetypes.length)];
vloopcount++
}
//alert("voiceloop count:"+vloopcount);
if (persuasive>0){

strange.push(firstname+ " speaks "+accent+" in a voice that is "+voicequality1+" and "+voicequality2+". ");

if(Intelligence<6)
strange.push(subjpronoun+" can't speak "+posspronoun+" native language grammatically. ");


}

//alert(voicetypes.length);


var scars=Math.round(Math.random()*200);

var scar1=bodyparts[Math.floor(Math.random()*bodyparts.length)]
var scar2=bodyparts[Math.floor(Math.random()*bodyparts.length)]

if (scars>150&&scars<=175&&ag>20){

strange.push(subjpronoun+" "+haveverb+" a scar on "+posspronoun+" "+scar1+". ");
}

if (scars>175&&ag>20){

if(scar1==scar2){

strange.push(subjpronoun+" "+haveverb+" a lot of scars on "+posspronoun+" "+scar1+". ");
}
else{

strange.push(subjpronoun+" "+haveverb+" scars on "+posspronoun+" "+scar1+" and "+scar2+". ");}
}

var countinterest=0;

bodyparts.push("eye","ear","nose");

var illnesses=[firstname+" has a missing "+bodyparts[Math.floor(Math.random()*bodyparts.length)]+". ",firstname+" has tentacles growing from "+posspronoun+" "+bodyparts[Math.floor(Math.random()*bodyparts.length)]+". ","hair won't grow from "+firstname+"'s "+bodyparts[Math.floor(Math.random()*bodyparts.length)]+". ",firstname+" has chronic pain in "+posspronoun+" "+bodyparts[Math.floor(Math.random()*bodyparts.length)]+". ",firstname+" is deaf. ",firstname+" is blind. ",firstname+" is an alcoholic. ",firstname+" is addicted to a stimulant. ", firstname+" has an STI. "]
if(Constitution<7){

illnesses.push(firstname+" has leprosy. ");
}

var iloopcount=0;

var illness1=illnesses[Math.floor(Math.random()*illnesses.length)]
var illness2=illnesses[Math.floor(Math.random()*illnesses.length)]
var illness3=illnesses[Math.floor(Math.random()*illnesses.length)]

while(illness1==illness2){
var illness2=illnesses[Math.floor(Math.random()*illnesses.length)]
iloopcount++;
}

while(illness2==illness3||illness1==illness3){
var illness3=illnesses[Math.floor(Math.random()*illnesses.length)]
iloopcount++;
}

//alert("iloopcount is:"+iloopcount);

if (Constitution<10){
strange.push(illness1);
}
if (Constitution<8){
strange.push(illness2);
}
if (Constitution<6){
strange.push(illness3);
}

if(illness1==firstname+" is an alcoholic. "&&Constitution<10||illness2==firstname+" is an alcoholic. "&&Constitution<10||illness3==firstname+" is an alcoholic. "&&Constitution<10){
document.getElementById("weirdfacts").innerHTML=document.getElementById("weirdfacts").innerHTML+ "drinking. ";

countinterest=1;

}

//if con is less than 10 - possible strange illnesses

//for instance: they have tentacles growing from a bodypart
//missing bodypart
//hair won't grow from body part
//chronic pain in body part
//missing eye
//blindness
//deafness
//alcoholism
//addicted to another drug - including tabacco - lower willpower?
//albino
//have leprosy


//what are they afraid of?

var fears=["fire","crowds","authority","speaking with strangers","betrayal","poisoned food","vomiting","success","failure","spiders","death","the dark","snakes","dogs","heights","thunder","small spaces","sickness","holes","public speaking","being alone","birds","intimacy","water","blood","foreigners","cats","dragons","bridges","magic","undead","falling ill","pain"];
var fear1=fears[Math.floor(Math.random()*fears.length)];
var fear2=fears[Math.floor(Math.random()*fears.length)];
var fear3=fears[Math.floor(Math.random()*fears.length)];
var fear4=fears[Math.floor(Math.random()*fears.length)];
var fear5=fears[Math.floor(Math.random()*fears.length)];
if(courage<50){
strange.push(subjpronoun+sgcop+" afraid of "+fear1+". ");
}
if(courage<40&&fear1!=fear2){
strange.push("also "+fear2+". ");
}
if (courage<40&&fear1==fear2){strange.push("really afraid of "+fear1+". ");}

if(courage<30&&fear3!=fear1||courage<30&&fear3!=fear2){
strange.push("and "+fear3+". ");
}

if(courage<30&&fear3==fear1||courage<30&&fear3==fear2){
strange.push("did I mention "+fear3+"? "+subjpronoun+sgcop+" really afraid of "+fear3+". ");
}


if(courage<20&&fear4!=fear1||courage<20&&fear4!=fear2||courage<20&&fear4!=fear3){
strange.push("and "+fear4+". ");
}

if(courage<20&&fear4==fear1||courage<20&&fear4==fear2||courage<20&&fear4==fear3){
strange.push("did I mention "+fear4+"? "+subjpronoun+sgcop+" really afraid of "+fear4+". ");
}



if(courage<10&&fear5!=fear4||courage<20&&fear5!=fear1||courage<20&&fear5!=fear2||courage<20&&fear5!=fear3){
strange.push("and "+fear5+". ");
}

if(courage<10&&fear5==fear4||courage<20&&fear5==fear1||courage<20&&fear5==fear2||courage<20&&fear5==fear3){
strange.push("did I mention "+fear5+"? "+subjpronoun+sgcop+" really afraid of "+fear5+". ");
}

if(courage<30){
strange.push("basically a lot of things. ");
}




var kindsofcrazy=["goes cloud-cookoo-lander","suddenly believes "+subjpronoun+sgcop+" someone else"," has a panic attack when "+subjpronoun+" run"+verb+" into "+fear1+" ","finds it difficult to believe that the enemy wants to injure "+objpronoun,"believes "+reflexpronoun+" to be immortal"]

crazychoice=Math.floor(Math.random()*kindsofcrazy.length);

crazy=kindsofcrazy[crazychoice];

if(added[firstclass]="barbarian"){kindsofcrazy.push("suddenly rages and becomes violent");}
if (craziness>190){

strange.push(firstname+" occasionally "+crazy+". ");

}

var posscolors=["white","red","silver","grey","black","red","maroon","yellow","olive","lime","green","aqua","teal","blue","navy","fuchsia","purple"]

var colorchoice=Math.floor(Math.random()*posscolors.length);
var favcol=posscolors[colorchoice];
strange.push(posspronoun+" favourite colour is "+favcol+". ");








var weirdfeatures=""

for (repeat9=0;repeat9<strange.length;repeat9++){

weirdfeatures=weirdfeatures+ strange[repeat9];

}
document.getElementById("proseincidental").innerHTML=sentencecaps(weirdfeatures);


/*
for (repeat10=0;repeat10<voicetypes.length;repeat10++)
{

document.getElementById("voiceposs").innerHTML=document.getElementById("voiceposs").innerHTML+ voicetypes[repeat10]+" ";

}

*/




document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+ " who is ";

/*
for (repeat2=0;repeat2<moralsummary.length;repeat2=repeat2+2)
{
if(repeat2==0){
document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+ moralsummary[repeat2];

}
else{

  document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML +", "+moralsummary[repeat2];

  }
  }*/

for (repeat6=negtraits.length-1;repeat6>=1;repeat6=repeat6-(Math.ceil(Math.random()*3))){




document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+ " "+negtraits[repeat6]+", ";
  countneg++;

  }


if (countneg==0){
document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+ " "+negtraits[0]+" ";}

else{
document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+ " and "+negtraits[0]+" ";

}


document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+" but also ";
for (repeat5=postraits.length-1;repeat5>=1;repeat5=repeat5-(Math.ceil(Math.random()*3)))
{


document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+ postraits[repeat5]+", ";
  countpos++

  }
if (countpos==0){
document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+ " "+postraits[0]+". ";}

else{
document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+ " and "+postraits[0]+". ";

}

var interests=[];

var history=Math.round(Math.random()*200);
var politics=Math.round(Math.random()*200);
var philosophy=Math.round(Math.random()*200);
var timetravel=Math.round(Math.random()*200);
var mechanicaldevices=Math.round(Math.random()*200);
var intellectualpuzzles=Math.round(Math.random()*200);
var languages=Math.round(Math.random()*200);
var ancientlanguages=Math.round(Math.random()*200);
var magicitems=Math.round(Math.random()*200);

var tactics=Math.round(Math.random()*200);
var logistics=Math.round(Math.random()*200);
var libraries=Math.round(Math.random()*200);
var truthseeking=Math.round(Math.random()*200);
var astronomy=Math.round(Math.random()*200);
var engineering=Math.round(Math.random()*200);
var mathematics=Math.round(Math.random()*200);

var heroicstories=Math.round(Math.random()*200);
var funnystories=Math.round(Math.random()*200);
var horrificstories=Math.round(Math.random()*200);
var weather=Math.round(Math.random()*200);
if(funnystories>150){
  interests.push("funny stories");
  }
if(heroicstories>170){
  interests.push("heroic stories");
  }
if(horrificstories>170){
  interests.push("horrific stories");
  }

if(Intelligence>12){
if(truthseeking>170){
  interests.push("truth seeking");
  }

}

if(Intelligence>15){

  if (engineering>170){
  interests.push("engineering");

  }


  if(astronomy>170){
  interests.push("astronomy");
  }

if(history>170){
  interests.push("history");
  }
  if(politics>170){
  interests.push("politics");
  }
  if(philosophy>170){
  interests.push("philosophy");
  }
  if(timetravel>170){
  interests.push("time-travel");
  }
  if(mechanicaldevices>170){
  interests.push("mechanical devices");
  }
  if(intellectualpuzzles>170){
  interests.push("intellectual puzzles");
  }
  if(languages>170){
  interests.push("languages");
  }

  if(ancientlanguages>170){
  interests.push("ancient languages");
  }
  if(magicitems>170){
  interests.push("magic items");
  }
  if(tactics>170){
  interests.push("tactics");
  }
  if(logistics>170){
  interests.push("logistics");
  }
  if(libraries>170){
  interests.push("libraries");
  }
  if(mathematics>170){
  interests.push("mathematics");
  }
if(weather>170){
interests.push("weather");
}


}
if(Intelligence>13&&Intelligence<=15&weh>1000){

  if (engineering>170){
  interests.push("engineering");

  }


  if(astronomy>170){
  interests.push("astronomy");
  }


  if(history>170){
  interests.push("history");
  }
  if(politics>170){
  interests.push("politics");
  }
  if(philosophy>170){
  interests.push("philosophy");
  }
  if(timetravel>170){
  interests.push("time-travel");
  }
  if(mechanicaldevices>170){
  interests.push("mechanical devices");
  }
  if(intellectualpuzzles>170){
  interests.push("intellectual puzzles");
  }
  if(languages>170){
  interests.push("languages");
  }

  if(ancientlanguages>170){
  interests.push("ancient languages");
  }
  if(magicitems>170){
  interests.push("magic items");
  }
  if(tactics>170){
  interests.push("tactics");
  }
  if(logistics>170){
  interests.push("logistics");
  }
  if(libraries>170){
  interests.push("libraries");
  }
if(mathematics>170){
  interests.push("mathematics");
  }
if(weather>170){
interests.push("weather");
}


}
var hobbies=[];
var weightlifting=Math.round(Math.random()*200);
var rockclimbing=Math.round(Math.random()*200);
var wrestling=Math.round(Math.random()*200);
var boxing=Math.round(Math.random()*200);


if (Strength>13){
 if (weightlifting>165){
hobbies.push("weightlifting");
}

 if (wrestling>165){
hobbies.push("wrestling");
}
 if (rockclimbing>165){
hobbies.push("rock climbing");
}
if (boxing>165){
hobbies.push("boxing");
}

}

var costuming=Math.round(Math.random()*200);
var sewing=Math.round(Math.random()*200);
var art=Math.round(Math.random()*200);
var interiordecorating=Math.round(Math.random()*200);
var architecture=Math.round(Math.random()*200);
var fortunetelling=Math.round(Math.random()*200);
if (aes>100){

if(costuming>170){
  hobbies.push("costuming");
  }
if(sewing>170){
  hobbies.push("sewing");
  }
if(art>170){
  hobbies.push("art");
  }

if(interiordecorating>170){
  hobbies.push("interior decorating");
  }
if (architecture>170){

hobbies.push("architecture");

}
}

var surgery=Math.round(Math.random()*200);
var stiltwalking=Math.round(Math.random()*200);
var acrobatics=Math.round(Math.random()*200);
var juggling=Math.round(Math.random()*200);

if (Dexterity>14&&Wisdom>13){
if(surgery>170){
  hobbies.push("surgery");
  }
if(stiltwalking>170){
  hobbies.push("stiltwalking");
  }
if(acrobatics>170){
  hobbies.push("acrobatics");
  }
if(juggling>170){
  hobbies.push("jugging");
  }

}
var mcreatures=Math.round(Math.random()*200);
var minvention=Math.round(Math.random()*200);


if (persuasive>150||added[firstclass]=="wizard"||added[firstclass]=="sorcerer"){
if(fortunetelling>170){
hobbies.push("fortune telling");}
}
var debating=Math.round(Math.random()*200);
if (persuasive>150&&Intelligence>10)
{
if(debating>170){
hobbies.push("debating");
}
}

if(added[firstclass]=="wizard"||added[firstclass]=="sorcerer"){
if(mcreatures>170){
hobbies.push("magical creatures");
}
if(minvention>170){
hobbies.push("magical invention");

}
}

//evil hobbies
var serialkilling=Math.round(Math.random()*200);
var torture=Math.round(Math.random()*200);
var rape=Math.round(Math.random()*200);
var kidnapping=Math.round(Math.random()*200);
var gaslighting=Math.round(Math.random()*200);
var breakingpersonality=Math.round(Math.random()*200);
var emotionalabuse=Math.round(Math.random()*200);
var physicalabuse=Math.round(Math.random()*200);
var mindrape=Math.round(Math.random()*200);
var cannibal=Math.round(Math.random()*200);
var necromance=Math.round(Math.random()*200);
var slaughter=Math.round(Math.random()*200);
var genocide=Math.round(Math.random()*200);
var sacrifice=Math.round(Math.random()*200);


if(empath<50&&self<50){

if(serialkilling>190){
  hobbies.push("serial killing");
  }
if(torture>170){
  hobbies.push("torture");
  }

if(rape>190){
  hobbies.push("rape");
  }

if(kidnapping>190){
  hobbies.push("kidnapping");
  }
if(gaslighting>170){
  hobbies.push("gaslighting");
  }

if(breakingpersonality>170){
  hobbies.push("breaking people's personalities");
  }

if(emotionalabuse>170){
  hobbies.push("emotional abuse");
  }

if(physicalabuse>170){
  hobbies.push("physical abuse");
  }
if(cannibal>195){
  hobbies.push("cannibalism");
  }
if(slaughter>170){
  hobbies.push("slaughter");
  }

if(genocide>180){
  hobbies.push("genocide");
  }

}

//wizard/sorcerer&&evil - chance of necromancer

if(added[firstclass]=="wizard"||added[firstclass]=="sorcerer"||added[firstclass]=="cleric"){

if(self<50){
 if(mindrape>170){
hobbies.push("mind rape");
}
 if(necromance>120){
hobbies.push("necromancy");
}
 if(sacrifice>170){
hobbies.push("human sacrifice");
}


}


}


//professions - wisdom.



var blacksmithing=Math.round(Math.random()*200);
var  animals=Math.round(Math.random()*200);
var  othercultures=Math.round(Math.random()*200);
var  carpentry=Math.round(Math.random()*200);
var building=Math.round(Math.random()*200);
var bookmaking=Math.round(Math.random()*200);
var  householdmanagement=Math.round(Math.random()*200);
var mining=Math.round(Math.random()*200);
var gravedigging=Math.round(Math.random()*200);
var ratcatching =Math.round(Math.random()*200);

var apothecary =Math.round(Math.random()*200);

var brewing=Math.round(Math.random()*200);
var cooking=Math.round(Math.random()*200);
var meditating=Math.round(Math.random()*200);
var healthfoods=Math.round(Math.random()*200);
var kids=Math.round(Math.random()*200);
var teaching=Math.round(Math.random()*200);
var falconry=Math.round(Math.random()*200);
var landscaping=Math.round(Math.random()*200);
var farming=Math.round(Math.random()*200);
var gardening=Math.round(Math.random()*200);
var plants=Math.round(Math.random()*200);
var birdwatching=Math.round(Math.random()*200);
var glassblowing=Math.round(Math.random()*200);

if(Wisdom>13){

if(blacksmithing>100&&Strength>13){
hobbies.push("blacksmithing");

}
if(animals>170){
hobbies.push("animals");

}
if(othercultures>170){
interests.push("other cultures");

}
if(carpentry>170){
hobbies.push("carpentry");

}
if(building>100&&Strength>13){
hobbies.push("building");

}

if(bookmaking>170){
hobbies.push("bookmaking and printing");

}
if(householdmanagement>170){
hobbies.push("household management");

}


if(mining>150&&Strength>13){
hobbies.push("mining");

}
if(ratcatching>170&&weh<200){
hobbies.push("rat catching");

}


if(apothecary>170&&Intelligence>13){
hobbies.push("apothecary");

}

if(brewing>170){
hobbies.push("brewing");

}

if(cooking>170){
hobbies.push("cooking");

}
if(meditating>170){
hobbies.push("meditating");

}
if(healthfoods>170){
hobbies.push("healthy foods");

}
if(kids>170){
hobbies.push("looking after children");

}

if(teaching>170&&persuasive>100&&Intelligence>10){
hobbies.push("teaching");
}
if(falconry>170){
hobbies.push("falconry");
}
if(weather>170){
hobbies.push("weather");
}
if(landscaping>170){
hobbies.push("landscaping");
}
if(farming>170){
hobbies.push("farming");
}
if(gardening>170){
hobbies.push("gardening");
}
if(plants>170){
hobbies.push("botany");
}
if(birdwatching>170){
hobbies.push("bird-watching");
}
if(glassblowing>170&&Dexterity>14){
hobbies.push("glassblowing");
}
}

var teamsport=Math.round(Math.random()*200);

if (Constitution>12&&Charisma>12&&teamsport>180){
 hobbies.push("team sports");

}
var economics=Math.round(Math.random()*200);
var commerce=Math.round(Math.random()*200);
var networking=Math.round(Math.random()*200);
var socialclimbing=Math.round(Math.random()*200);



if (Charisma>13){
if (economics>150&&Intelligence>13){
interests.push("economics");
}
if (commerce>150){
interests.push("commerce");
}
if (networking>170){
interests.push("networking");

}
if (socialclimbing>170){
interests.push("social climbing");

}

}

var organisedcrime=Math.round(Math.random()*200);
var blackmail=Math.round(Math.random()*200);
var robbery=Math.round(Math.random()*200);
var shoplifting=Math.round(Math.random()*200);
var arson=Math.round(Math.random()*200);
var smuggling=Math.round(Math.random()*200);
var graverobbing=Math.round(Math.random()*200);
var mugging=Math.round(Math.random()*200);
var extortion=Math.round(Math.random()*200);



if(alignment[p]=="chaotic neutral" || alignment[p]=="chaotic good" || alignment[p]=="chaotic evil"){
if (organisedcrime>170){
interests.push("organised crime");
}
if (blackmail>170){
interests.push("blackmail");
}
if (shoplifting>170){
interests.push("shoplifting");
}
if (robbery>170){
interests.push("robbery");
}
if (arson>170){
interests.push("arson");
}
if (smuggling>170){
interests.push("smuggling");
}
if (graverobbing>170){
interests.push("graverobbing");
}
if (mugging>170){
interests.push("mugging");
}
if (extortion>170){
interests.push("extortion");
}
}

var drinking=Math.round(Math.random()*200);
var dueling=Math.round(Math.random()*200);
var barfighting=Math.round(Math.random()*200);
if (Wisdom<14&&drinking>150){

hobbies.push("drinking");
}

if (vio>150){

  if (dueling>100){hobbies.push("dueling");}
  if (barfighting>100){hobbies.push("barfighting");}

}


var geography=Math.round(Math.random()*200);
var local=Math.round(Math.random()*200);
var nobility=Math.round(Math.random()*200);
var religion=Math.round(Math.random()*200);
var undead=Math.round(Math.random()*200);
var mythology=Math.round(Math.random()*200);
var planes=Math.round(Math.random()*200);

if(Intelligence>12){

if (geography>180){interests.push("geography");}

if (local>180){interests.push("local knowledge");}
if (nobility>180){interests.push("nobility");}
if (religion>180){interests.push("religion");}
if (undead>180){interests.push("undead");}
if (mythology>180){interests.push("mythology");}
if (planes>180){interests.push("planes");}
}

var charity=Math.round(Math.random()*200);

if (self>150&&charity>150){

hobbies.push("charity work");

}

var conspiracies=Math.round(Math.random()*200);

if (conspiracies>170&&Intelligence<10)
{

interests.push("conspiracies");
}

var colours=["blue","sky blue","green","red","lime green","yellow","orange","lilac"];

var animals=["tiger","dragon","rakshasa","rabbit","cat","dog","elephant","wolf","turtle","lion"];

clrcount=Math.floor(Math.random()*colours.length);
animalscount=Math.floor(Math.random()*animals.length);

var collectsoptions=["weapons",
"jewelery",
"magic items",
"spell components",
colours[clrcount]+" things",
animals[animalscount]+" things",
"interesting homewares",
"small mechanisms",
"artworks",
"musical instruments",
"clothes",
"mementos","things which are patterned like flowers","things made out of bone","luxuries"];

var collectscount=Math.floor(Math.random()*collectsoptions.length);

var collects=Math.round(Math.random()*200);

if (collects>150){

hobbies.splice(0,0,"collecting "+collectsoptions[collectscount]);

}

 //"









var withdesc=subjpronoun+" "+haveverb+" ";


for (repeat1=0;repeat1<withsummary.length-1;repeat1=repeat1+1)
{
  withdesc=withdesc+ withsummary[repeat1]+", ";
countwith++;
}



if (countwith==0){
  withdesc=withdesc+" "+withsummary[0]+". "
}

else{
withdesc=withdesc+ " and "+withsummary[withsummary.length-1]+". ";

}
document.getElementById("summary").innerHTML=document.getElementById("summary").innerHTML+sentencecaps(withdesc);

var weirdfactscontainer=""
for (repeat7=0;repeat7<interests.length-1;repeat7=repeat7+Math.ceil(Math.random()*3))
{
weirdfactscontainer=weirdfactscontainer+ interests[repeat7]+". ";
countinterest++;
}


for (repeat8=0;repeat8<hobbies.length-1;repeat8=repeat8+Math.ceil(Math.random()*3))
{
weirdfactscontainer=weirdfactscontainer+hobbies[repeat8]+". "
countinterest++;
}
if (countinterest!=0){
document.getElementById("weirdfacts").innerHTML=sentencecaps(weirdfactscontainer);
}
else{

document.getElementById("weirdfacts").innerHTML=document.getElementById("weirdfacts").innerHTML+ "None to speak of. ";


}


document.getElementById("testpronouns").innerHTML=subjpronoun+objpronoun+posspronoun+reflexpronoun+"<br />"+firstname+lastname;


var physdesc=sentencecaps("Physically, "+firstname+" is "+height+" for a "+gender+ " "+races[ra] +" and "+posspronoun+" frame is "+muscles+". "+weight+" "+looks+". <br />"+firstname+" has "+skin+" skin and "+haircolor+" hair, which is "+curly+" and "+hairlength+". "+beard+" "+clothes+"<br />"+genderdesc+" "+ subjpronoun+ sgcop +"attracted to "+attraction+ " "+libido);

var baldphysdesc= sentencecaps("Physically, "+firstname+" is "+height+" for a "+gender+ " "+races[ra] +" and "+posspronoun+" frame is "+muscles+".  "+weight+" "+looks+". <br />"+firstname+" has "+skin+" skin and is bald. "+beard+" "+clothes+"<br/> "+genderdesc+" "+ subjpronoun+ sgcop +"attracted to "+attraction+ " "+libido);

if (hairlength!="bald"){
document.getElementById("prosephys").innerHTML=physdesc;
}
else{
document.getElementById("prosephys").innerHTML=baldphysdesc}

var socdesc= sentencecaps(firstname+" usually appears "+temperament+" and is " +sociable+". " +posspronoun+" self-esteem is "+selfesteem+" and "+subjpronoun+sgcop+energy+" "+arrogance+subjpronoun+" " +conflict+". " +subjpronoun+ " "+violence+" in social situations."+deception+posspronoun+" speech is "+convince+". ")

var moraldesc=sentencecaps("morally, " +firstname+ " is primarily " +selfness+ " "+empathy+" "+kindness+" "+vengence+" "+generosity);

var psychdesc=sentencecaps(firstname+ " is "+cynicism+" "+conscientious+subjpronoun+sgcop+giveashit+" "+courageous+" "+ambition+ " and"+emotions);

document.getElementById("prosesoc").innerHTML=socdesc;

document.getElementById("prosemoral").innerHTML=moraldesc;

document.getElementById("prosepsych").innerHTML=psychdesc;



