function _0x5018(_0x4d03ae,_0x48b1c9){const _0x75b3a5=_0x75b3();return _0x5018=function(_0x50182e,_0xe1958a){_0x50182e=_0x50182e-0x119;let _0xc8a69a=_0x75b3a5[_0x50182e];return _0xc8a69a;},_0x5018(_0x4d03ae,_0x48b1c9);}const _0x4db4d1=_0x5018;(function(_0x52d631,_0x2d8f22){const _0x22e270=_0x5018,_0x5f5812=_0x52d631();while(!![]){try{const _0x4badbc=parseInt(_0x22e270(0x123))/0x1*(-parseInt(_0x22e270(0x141))/0x2)+parseInt(_0x22e270(0x134))/0x3*(parseInt(_0x22e270(0x11a))/0x4)+parseInt(_0x22e270(0x14f))/0x5*(-parseInt(_0x22e270(0x13e))/0x6)+parseInt(_0x22e270(0x14d))/0x7*(-parseInt(_0x22e270(0x15e))/0x8)+-parseInt(_0x22e270(0x148))/0x9*(-parseInt(_0x22e270(0x138))/0xa)+parseInt(_0x22e270(0x13d))/0xb*(-parseInt(_0x22e270(0x12e))/0xc)+parseInt(_0x22e270(0x11b))/0xd;if(_0x4badbc===_0x2d8f22)break;else _0x5f5812['push'](_0x5f5812['shift']());}catch(_0x144764){_0x5f5812['push'](_0x5f5812['shift']());}}}(_0x75b3,0x5a524));const {zokou}=require('../framework/zokou'),s=require('../set'),fs=require('fs');function getDescriptionFromEnv(_0x35905a){const _0x5e0e09=_0x5018;filePath='./app.json';const _0x4e0886=fs['readFileSync'](filePath,_0x5e0e09(0x12d)),_0x2655a8=JSON['parse'](_0x4e0886),_0x34117a=_0x2655a8[_0x5e0e09(0x14b)][_0x35905a];return _0x34117a&&_0x34117a[_0x5e0e09(0x15a)]?_0x34117a[_0x5e0e09(0x15a)]:_0x5e0e09(0x155);}function _0x75b3(){const _0x2fcb55=['\x20\x20\x20\x20╭──────༺♡༻──────╮\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ENZO MD-settings\x0a\x20\x20\x20\x20╰──────༺♡༻──────╯\x0a\x0a','settings','BOT_NAME','352990yqSUUA','message','Heroku\x20var\x20changes\x20,\x20rebootings....','extendedTextMessage','warncount','41668wJOeEm','12BPBjJb','nom','getallvar','4EiKtnP','HEROKU_APY_KEY','-\x20*','PM_CHATBOT','AUTO_READ_STATUS','*\x20=>\x20','key','81YVStCM','PRESENCE','*\x20*','env','getvar','155211ZWjDGV','\x0aChoose\x20a\x20variable\x20by\x20its\x20number','187185hzCxlf','Only\x20Mods\x20can\x20use\x20this\x20command','only\x20Mods\x20can\x20use\x20this\x20commande','insert\x20the\x20variable\x20name\x20in\x20capital\x20letter','PM_PERMIT','HEROKU_APP_NAME','The\x20environment\x20variable\x20description\x20was\x20not\x20found.','yes','Please\x20fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_APY_KEY\x20environment\x20variables','setprefix','stanzaId','description','get','PUBLIC_MODE','command\x20reserved\x20for\x20bot\x20owner','136feNUzz','Error','heroku-client','4xUZwVr','10055565bRecMy','AUTO_DOWNLOAD_STATUS','/config-vars','/apps/','split','PREFIX','variable\x20refresh,\x20restart\x20in\x20progress....','patch','157398kvQiEn','WARN_COUNT','*Heroku\x20Vars\x20list\x20*\x0a\x0a','sendMessage','ANTI_DELETE_MESSAGE','BOT_MENU_LINKS','*Name*\x20:','*Description*\x20:','🍁\x20*','Heroku','utf-8','228etxbWx','awaitForMessage','length','text','heroku','join','352029CeQSIO'];_0x75b3=function(){return _0x2fcb55;};return _0x75b3();}zokou({'nomCom':'setvar','categorie':_0x4db4d1(0x132)},async(_0x89c838,_0x1b7dd1,_0x458a27)=>{const _0x4db003=_0x4db4d1,{ms:_0x49725f,repondre:_0x101d12,superUser:_0x2649cb,arg:_0x17cff4}=_0x458a27;if(!_0x2649cb){_0x101d12(_0x4db003(0x151));return;};if(s[_0x4db003(0x154)]==null||s[_0x4db003(0x142)]==null){_0x101d12('Please\x20fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_APY_KEY\x20environment\x20variables');return;};if(!_0x17cff4[0x0]||!_0x17cff4[_0x4db003(0x133)]('')[_0x4db003(0x11f)]('=')){_0x101d12('Bad\x20format\x20;\x20Exemple\x20of\x20using\x20:\x0asetvar\x20OWNER_NAME=Fredora');return;};const _0x381a2c=_0x17cff4[_0x4db003(0x133)]('\x20'),_0x1e948b=require('heroku-client'),_0x46f1d8=new _0x1e948b({'token':s[_0x4db003(0x142)]});let _0x2e89e0='/apps/'+s[_0x4db003(0x154)];await _0x46f1d8['patch'](_0x2e89e0+_0x4db003(0x11d),{'body':{[_0x381a2c[_0x4db003(0x11f)]('=')[0x0]]:_0x381a2c[_0x4db003(0x11f)]('=')[0x1]}}),await _0x101d12(_0x4db003(0x13a));}),zokou({'nomCom':_0x4db4d1(0x140),'categorie':_0x4db4d1(0x132)},async(_0x516e99,_0x415586,_0x526c58)=>{const _0x25353d=_0x4db4d1,{ms:_0x584daf,repondre:_0x5af953,superUser:_0x453088,arg:_0xe84daa}=_0x526c58;if(!_0x453088){_0x5af953('only\x20mods\x20can\x20use\x20this\x20commande');return;};if(s[_0x25353d(0x154)]==null||s['HEROKU_APY_KEY']==null){_0x5af953(_0x25353d(0x157));return;};const _0x58f4ef=require(_0x25353d(0x119)),_0x4f3535=new _0x58f4ef({'token':s['HEROKU_APY_KEY']});let _0x1480c2=_0x25353d(0x11e)+s[_0x25353d(0x154)],_0x5f2c6e=await _0x4f3535[_0x25353d(0x15b)](_0x1480c2+_0x25353d(0x11d)),_0x13222b=_0x25353d(0x125);for(vr in _0x5f2c6e){_0x13222b+=_0x25353d(0x12b)+vr+'*\x20'+'=\x20'+_0x5f2c6e[vr]+'\x0a';}_0x5af953(_0x13222b);}),zokou({'nomCom':_0x4db4d1(0x14c),'categorie':'heroku'},async(_0x58a6f4,_0x59e6ce,_0x10aa59)=>{const _0x3eddd3=_0x4db4d1,{ms:_0x4cfe9c,repondre:_0x191ee9,superUser:_0x4017ae,arg:_0x23c562}=_0x10aa59;if(!_0x4017ae){_0x191ee9(_0x3eddd3(0x150));return;};if(s[_0x3eddd3(0x154)]==null||s[_0x3eddd3(0x142)]==null){_0x191ee9('Please\x20fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_APY_KEY\x20environment\x20variables');return;};if(!_0x23c562[0x0]){_0x191ee9(_0x3eddd3(0x152));return;};try{const _0x22646=require(_0x3eddd3(0x119)),_0x2f7e09=new _0x22646({'token':s[_0x3eddd3(0x142)]});let _0x19deba=_0x3eddd3(0x11e)+s['HEROKU_APP_NAME'],_0x269d8a=await _0x2f7e09[_0x3eddd3(0x15b)](_0x19deba+_0x3eddd3(0x11d));for(vr in _0x269d8a){if(_0x23c562[_0x3eddd3(0x133)]('\x20')===vr)return _0x191ee9(vr+'=\x20'+_0x269d8a[vr]);}}catch(_0x18606e){_0x191ee9(_0x3eddd3(0x15f)+_0x18606e);}}),zokou({'nomCom':_0x4db4d1(0x136),'categorie':'Heroku'},async(_0x53607c,_0x267b79,_0x15523d)=>{const _0x6b0c25=_0x4db4d1,{ms:_0xb66a55,repondre:_0x17b1b2,superUser:_0x3a5b5c,auteurMessage:_0x4c70ac}=_0x15523d;if(!_0x3a5b5c){_0x17b1b2(_0x6b0c25(0x15d));return;};let _0x39c108=[{'nom':_0x6b0c25(0x145),'choix':[_0x6b0c25(0x156),'no']},{'nom':_0x6b0c25(0x11c),'choix':[_0x6b0c25(0x156),'no']},{'nom':_0x6b0c25(0x153),'choix':[_0x6b0c25(0x156),'no']},{'nom':_0x6b0c25(0x15c),'choix':[_0x6b0c25(0x156),'no']},{'nom':'STARTING_BOT_MESSAGE','choix':[_0x6b0c25(0x156),'no']},{'nom':_0x6b0c25(0x127),'choix':[_0x6b0c25(0x156),'no']},{'nom':_0x6b0c25(0x149),'choix':['1','2','3','4']},{'nom':_0x6b0c25(0x144),'choix':[_0x6b0c25(0x156),'no']}],_0x3723be=_0x6b0c25(0x135);for(v=0x0;v<_0x39c108['length'];v++){_0x3723be+=v+0x1+_0x6b0c25(0x143)+_0x39c108[v][_0x6b0c25(0x13f)]+'*\x0a';}_0x3723be+=_0x6b0c25(0x14e);let _0x21ca50=await _0x267b79['sendMessage'](_0x53607c,{'text':_0x3723be},{'quoted':_0xb66a55});console['log'](_0x21ca50);let _0x4cd198=await _0x267b79[_0x6b0c25(0x12f)]({'chatJid':_0x53607c,'sender':_0x4c70ac,'timeout':0xea60,'filter':_0x5b57c9=>_0x5b57c9['message'][_0x6b0c25(0x13b)]&&_0x5b57c9[_0x6b0c25(0x139)][_0x6b0c25(0x13b)]['contextInfo'][_0x6b0c25(0x159)]==_0x21ca50[_0x6b0c25(0x147)]['id']&&(_0x5b57c9['message'][_0x6b0c25(0x13b)]['text']>0x0&&_0x5b57c9[_0x6b0c25(0x139)]['extendedTextMessage'][_0x6b0c25(0x131)]<=_0x39c108['length'])}),_0x590e99=_0x4cd198[_0x6b0c25(0x139)][_0x6b0c25(0x13b)][_0x6b0c25(0x131)]-0x1,{nom:_0x44695b,choix:_0x39fdd4}=_0x39c108[_0x590e99],_0x191a85=_0x6b0c25(0x135);_0x191a85+=_0x6b0c25(0x129)+_0x44695b+'\x0a',_0x191a85+=_0x6b0c25(0x12a)+getDescriptionFromEnv(_0x44695b)+'\x0a\x0a',_0x191a85+='┌──────\x20⋆⋅☆⋅⋆\x20──────┐\x0a\x0a';for(i=0x0;i<_0x39fdd4[_0x6b0c25(0x130)];i++){_0x191a85+=_0x6b0c25(0x14a)+(i+0x1)+_0x6b0c25(0x146)+_0x39fdd4[i]+'\x0a';}_0x191a85+='\x0a└──────\x20⋆⋅☆⋅⋆\x20──────┘\x0a\x0aPlease\x20reply\x20on\x20message\x20with\x20the\x20number\x20corresponding\x20to\x20your\x20choice';let _0x13d36c=await _0x267b79[_0x6b0c25(0x126)](_0x53607c,{'text':_0x191a85},{'quoted':_0x4cd198}),_0x5b72e7=await _0x267b79[_0x6b0c25(0x12f)]({'chatJid':_0x53607c,'sender':_0x4c70ac,'timeout':0xea60,'filter':_0x36adeb=>_0x36adeb[_0x6b0c25(0x139)][_0x6b0c25(0x13b)]&&_0x36adeb['message'][_0x6b0c25(0x13b)]['contextInfo']['stanzaId']==_0x13d36c['key']['id']&&(_0x36adeb[_0x6b0c25(0x139)][_0x6b0c25(0x13b)][_0x6b0c25(0x131)]>0x0&&_0x36adeb['message'][_0x6b0c25(0x13b)][_0x6b0c25(0x131)]<=_0x39fdd4[_0x6b0c25(0x130)])}),_0x486a86=_0x5b72e7[_0x6b0c25(0x139)][_0x6b0c25(0x13b)][_0x6b0c25(0x131)]-0x1;const _0x706777=require(_0x6b0c25(0x119)),_0x578567=new _0x706777({'token':s[_0x6b0c25(0x142)]});let _0x113aa4=_0x6b0c25(0x11e)+s['HEROKU_APP_NAME'];await _0x578567[_0x6b0c25(0x122)](_0x113aa4+_0x6b0c25(0x11d),{'body':{[_0x44695b]:_0x39fdd4[_0x486a86]}}),await _0x17b1b2(_0x6b0c25(0x121));});function changevars(_0x272aba,_0x555599){const _0x57a7f1=_0x4db4d1;zokou({'nomCom':_0x272aba,'categorie':_0x57a7f1(0x12c)},async(_0x28d912,_0x43b135,_0x3034ea)=>{const _0xe83841=_0x57a7f1,{arg:_0x3541b7,superUser:_0x5c436b,repondre:_0x31e1ae}=_0x3034ea;if(!_0x5c436b){_0x31e1ae(_0xe83841(0x15d));return;};if(s['HEROKU_APP_NAME']==null||s['HEROKU_APY_KEY']==null){_0x31e1ae(_0xe83841(0x157));return;};if(!_0x3541b7[0x0]){_0x31e1ae(getDescriptionFromEnv(_0x555599));return;};const _0x4cb902=require(_0xe83841(0x119)),_0x5ad476=new _0x4cb902({'token':s[_0xe83841(0x142)]});let _0x1680e2=_0xe83841(0x11e)+s[_0xe83841(0x154)];await _0x5ad476[_0xe83841(0x122)](_0x1680e2+_0xe83841(0x11d),{'body':{[_0x555599]:_0x3541b7['join']('\x20')}}),await _0x31e1ae(_0xe83841(0x121));});};changevars(_0x4db4d1(0x158),_0x4db4d1(0x120)),changevars('linkmenu',_0x4db4d1(0x128)),changevars(_0x4db4d1(0x13c),_0x4db4d1(0x124)),changevars('botname',_0x4db4d1(0x137));
