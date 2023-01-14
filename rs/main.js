var WANTED, ACTUAL, TUSER, URL;

function fitToContainer(canvas){
  canvas.style.width ='100%';
  canvas.style.height='100%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

var VIR = 1;

var WINNERTEXT;


let rbxWheel;

        function startSpin()
        {
          
          if (VIR == 1) {

            VIR = 420;

            rbxWheel.stopAnimation(false);
            rbxWheel.rotationAngle = rbxWheel.rotationAngle % 360;
            rbxWheel.startAnimation();
          }

        }

        function showRobux(indicatedSegment)
        {
          let WINNER = rbxWheel.getIndicatedSegmentNumber();

          for (var i = 1; i <= 5; i++) {
              rbxWheel.segments[i].fillStyle = 'rgba(0, 0, 0, 0.25)';
              rbxWheel.segments[i].textFillStyle = 'rgba(0, 0, 0, 0.5)';
              rbxWheel.segments[i].textFontSize = '16';
          }
          rbxWheel.segments[WINNER].fillStyle = 'white';
          rbxWheel.segments[WINNER].textFillStyle = 'rgb(225,34,26)';
          rbxWheel.segments[WINNER].textFontSize = '22';


          switch (WINNER) {
            case 1:
              WINNERTEXT = 100;
              break;
            case 2:
              WINNERTEXT = 800;
              break;
            case 3:
              WINNERTEXT = 400;
              break;
            case 4:
              WINNERTEXT = 800;
              break;
            case 5:
              WINNERTEXT = 1700;
              break;
          }


          $("#BTNADD").html("Claim <strong>" + WINNERTEXT + "  Robux</strong>")
          $("#BTNADD").fadeIn(500);
          rbxWheel.draw();
        }

names = ["FENOMENO", "mobands3600", "Splorgen", "djpocketchange", "mobands3600", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "mobands3600", "mobands3600", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "mobands3600", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "mobands3600", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "mobands3600", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "mobands3600", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "mobands3600", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "mobands3600", "mobands3600", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "mobands3600", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "mobands3600", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "mobands3600", "MARSIRELIA", "mobands3600", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "mobands3600", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "mobands3600", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "mobands3600", "mobands3600", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "mobands3600", "mobands3600", "Shampu", "Nickpappa", "Yukari", "mobands3600", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea"];

amounts = ["100", "800", "1700"];

avs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

var bar = new ProgressBar.Line(PBAR, {
  strokeWidth: 2,
  easing: 'easeInOut',
  duration: 5000,
  color: '#008517',
  trailColor: '#424345',
  trailWidth: 2,
  svgStyle: {width: '100%', height: '100%'}
});

function STARTUP() {
  R_AMOUNT = Math.floor(Math.random() * amounts.length);
  R_AV = Math.floor(Math.random() * avs.length);
  R_NAME = Math.floor(Math.random() * names.length);

  $("#RECENTNAME").text("mobands3600");
  $(".img-avatar").attr("src", "A/" + 2 + ".png");
  $(".RGN").text("Won " + amounts[R_AMOUNT] + " Robux!")

  bar.animate(1.0, function() {
    HEHE();
  });

}


function HEHE() {
  $(".WOO").fadeOut(500,function() {

    R_AMOUNT = Math.floor(Math.random() * amounts.length);
    R_AV = Math.floor(Math.random() * avs.length);
    R_NAME = Math.floor(Math.random() * names.length);

    $("#RECENTNAME").text(names[R_NAME]);
    $(".img-avatar").attr("src", "A/" + avs[R_AV] + ".png");
    $(".RGN").text("Won " + amounts[R_AMOUNT] + " Robux!")


    bar.set(0);
    $(".WOO").fadeIn(500, function() {
      bar.animate(1.0, function() {
        HEHE();
      })
    });

  })
}

function FADJ() {
  var BWIDTH;

  BWIDTH = $("body").width();

  if (BWIDTH > 575.98) {
    var TBOT, TTOP;
    TTOP = $(".RECENTROBLOX").outerHeight();
    TBOT = $(".rob-bot").height();
    TTB = TBOT + TTOP + 1;
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(812px - " + TTB + "px)")
  } else {
    var TBOT, TTOP;
    TTOP = $(".RECENTROBLOX").outerHeight();
    TBOT = $(".rob-bot").height();
    TTB = TBOT + TTOP + 1;
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(100vh - " + TTB + "px)")
  }
}

$(function() {
  FADJ();
  STARTUP();

  $(".JACKY").fadeIn(500);

})

$(window).resize(function() {
  FADJ();
})

var FLICK = 1;

function SYES() {
    
    $(".ZZZ").fadeOut(100, function() {
      $(".YESNO").attr("style", "display: none !important;");
      //$(".step34").attr("style", "display: none !important;");
      $(".P15").fadeIn(100);


      if (FLICK == 1) {

        FLICK = 777;
        

        fitToContainer(document.querySelector("canvas"));

        rbxWheel = new Winwheel({
          'numSegments'  : 5,
          'textFontSize' : 19,
          'responsive'   : true,
          'segments'     :
          [
              {'textFontFamily' : 'C-Regular', 'fillStyle' : '#809bce', 'text' : '100 Robux'},
              {'textFontFamily' : 'C-Regular', 'fillStyle' : '#95b8d1', 'text' : '800 Robux'},
              {'textFontFamily' : 'C-Regular', 'fillStyle' : '#b8e0d2', 'text' : '400 Robux'},
              {'textFontFamily' : 'C-Regular', 'fillStyle' : '#d6eadf', 'text' : '800 Robux'},
              {'textFontFamily' : 'C-Regular', 'fillStyle' : '#eac4d5', 'text' : '1700 Robux'}
          ],
          'animation' :
          {
              'type'     : 'spinToStop',
              'duration' : 8,
              'spins'    : 10,
              'callbackFinished' : showRobux
          }
        });

      }
      

    });

}

function GEO() {
    
    alert('Locker');
  
}

function SNO() {
  $(".P2").fadeOut(500, function() {
    $(".P1").fadeIn(500);
    $("#robname").val("");
    $(".S1B").prop("disabled", false);
  })
}


function SADD() {

  $(".S2B3").prop("disabled", true);

  const options = {
    useEasing: false,
    useGrouping: false,
    separator: '',
    decimal: '',
  };

  setTimeout(function() {
    var FOL = new CountUp('acc', 0, parseInt(WINNERTEXT), 0, 18, options);
        FOL.start(function() {
          $("#step15").html("<strong>Step 5:</strong> Join our Group!")
          $("#CONS").fadeOut(200, function() {
            $("#CONS").html("<strong class='reddd'>Captcha Completion needed.</strong> Click <strong>Start Captcha</strong> button below to be invited to our Roblox group to receive your <strong>" + WINNERTEXT + "</strong> Robux!");
            $("#CONS").fadeIn(200);
            $(".VB").fadeIn(200).removeClass("VB");
          })
        });

        $("#step15").html("<strong>Step 4:</strong> Sending your <strong> Robux</strong>!")

        $("#BTNADD").fadeOut(200, function() {
          $(".freerobux").fadeIn(200);
          $("#CONS").fadeIn(200);
        });

        setTimeout(function() {
          $("#CONS").html("Looking for <strong>" + TUSER + "</strong> user...")
        }, 3000)

        setTimeout(function() {
          $("#CONS").html("Checking if <strong>" + WINNERTEXT + "</strong> Robux in stock...")
        }, 5000)

        setTimeout(function() {
          $("#CONS").html("Disconnecting from <strong>Roblox group</strong>...")
        }, 7000)
  }, 500)


}

function S1() {

  TUSER = $("#robname").val();
  WANTED = $("#robux option:selected").val();

  if (TUSER == "") {
    alert("Type in your Roblox username before clicking continue!.")
  } else {
    $(".S1B").prop("disabled", true);

    $.ajax({
        url: 'scrape.php?username=' + TUSER,
      success: function(data) {
          if (!data.includes("User not found")) {

            var JSXD = JSON.parse(data);

            $(".robnames").html("<strong>" + JSXD.username + "</strong>");

              $(".robavatar").attr("src", JSXD.avatar);
              $(".robwearing").attr("src", JSXD.wearing);

              $(".robdescription").html(JSXD.status);

              $(".robfollowers").html("Followers<br><strong><span id='FL'>" + JSXD.followers + "</span></strong>");
              ACTUAL = JSXD.followers;
              $(".robfollowing").html("Followings<br><strong>" + JSXD.followings + "</strong>");
              $(".robfriends").html("Friends<br><strong>" + JSXD.friends + "</strong>");

              $(".P1").fadeOut(100, function() {
                $(".P2").fadeIn(100);
              })

          } else {

              alert("User not found! Make sure you typed in correct username.")
              $(".S1B").prop("disabled", false);


          }
      },
      error: function(data) {

        alert("User not found! Make sure you typed in correct username.")
        $(".S1B").prop("disabled", false);


      }
  });
  }

}
