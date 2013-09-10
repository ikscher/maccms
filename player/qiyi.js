
if(/^(\-?)(\d+)$/.test(MacPlayer.playurl)) {
	MacPlayer.playhtml = '<embed type="application/x-shockwave-flash" src="http://www.iqiyi.com/player/20121017112902/Player.swf" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="always" wmode="transparent" menu="false" always="false"  pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+MacPlayer.height+'" flashvars="flag=0&coreUrl=http://www.qiyipic.com/1000/fix/cp_2023_pp.jpg&vid='+MacPlayer.playurl+'">';
}
else{
	MacPlayer.playhtml = '<embed type="application/x-shockwave-flash" src="http://www.iqiyi.com/player/20130826100433/Player.swf" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="always" wmode="transparent" menu="false" always="false"  pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+MacPlayer.height+'" flashvars="cid=qc_100001_100014&coreUrl=http://www.qiyipic.com/flashcp/fix/cp2182.jpg&tipdataurl=http://static.qiyi.com/ext/201308231442/tipdata.xml&components=feffffeee&preloader=http://www.iqiyi.com/player/20130515145936/preloader.swf&vipPreloader=http://www.iqiyi.com/player/20130121161835/vip.swf&adurl=http://www.iqiyi.com/player/a114d849b3a694542a5b707ec9c2ee5764d8472fa5.swf&flashP2PCoreUrl=http://www.qiyipic.com/20067/fix/library.jpg&origin=flash&pageOpenSrc=1&expandState=true&albumId=559328&tvId=&autoplay=true&isMember=false&cyclePlay=false&share_sTime=0&share_eTime=0&vid='+MacPlayer.playurl+'">';
}

MacPlayer.show();