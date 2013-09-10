<?php
/*
软件名称：MacCMS
'开发作者：MagicBlack    官方网站：http://www.maccms.com/
'--------------------------------------------------------
'适用本程序需遵循 CC BY-ND 许可协议
'这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和使用；
'不允许对程序代码以任何形式任何目的的再发布。
'--------------------------------------------------------
*/
?>
<?php
	require_once ("inc/config.php");
	if(app_install==0){ header("Location:install/index.php" );	}
	require_once ("inc/conn.php");
    $page = be("all", "page");
    if (!isNum($page)){ $page = 1;} else { $page = intval($page);}
    if ($page < 1){ $page = 1;}
    
    if (app_vodviewtype < 2 || app_vodviewtype == 3){
        attemptCacheFile ("app", "index".$page);
        $template->html = getFileByCache("template_index", root ."template/" . app_templatedir . "/" . app_htmldir . "/index.html");
        $mac["appid"] = 10;
        $mac["page"] = $page;
        $cacheName = "vodindex".$page;
        if (chkCache($cacheName)){
            $template->html = getCache($cacheName);
        }
        else{
            $template->mark();
            $template->vodpagelist();
            $template->pageshow();
            $template->ifEx();
            setCache ($cacheName, $template->html,0);
        }
        setCacheFile ("app", "index".$page, $template->html);
        $template->run();
        echo $template->html;
    }
    else{
        redirect ( $template->getIndexLink() );
    }
    dispseObj();
?>