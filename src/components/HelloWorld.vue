<template>
  
        <v-app id="inspire">
          
      
          <v-app-bar 
          color="#000000"
          app
          >
            <v-app-bar-nav-icon
            color="#6200EA"
             @click="drawer = !drawer"
             ></v-app-bar-nav-icon>
             
            <v-toolbar-title><h1 style="color: #6200EA">  Hideno Avatar</h1></v-toolbar-title>
            <h1 style="margin-left: 73%; color: #FFFFFF">{{argent}}💵</h1>
          </v-app-bar>
      
          <v-navigation-drawer
            color="#000000"
            v-model="drawer"
            fixed
            temporary
          >
          <br> <br> <br>
          <v-btn
          style="width: 90%; margin-left: 5%"
          color="#6200EA"
          elevation="2"
          rounded
          @click="page = 0; drawer = false"

        >Magasin</v-btn> <br> <br>
        <v-btn
        style="width: 90%; margin-left: 5%"
          color="#6200EA"
          elevation="2"
          rounded
          
          @click="page = 1; drawer = false"
          
        >Déplacement</v-btn> <br> <br>
        <v-btn
        style="width: 90%; margin-left: 5%"
          color="#6200EA"
          elevation="2"
          rounded
          @click="page = 2; drawer = false"
        >Quête</v-btn>
          </v-navigation-drawer>
          
          <v-window
          v-model="page"
          
        >
          <v-window-item
           
          >
          <v-main style="background-color: #6200EA;">
           
            <v-container>
            
                
                    <v-tabs
                      background-color="#000000"
                      dark
                      next-icon="mdi-arrow-right-bold-box-outline"
                      prev-icon="mdi-arrow-left-bold-box-outline"
                      show-arrows
                    >
                      <v-tabs-slider color="#2196F3"></v-tabs-slider>
      <v-tab>Sac</v-tab>
      <v-tab>Visage</v-tab>
      <v-tab>Cheveux</v-tab>
      <v-tab>Chapeau</v-tab>
      <v-tab>Tête</v-tab>
      <v-tab>Main principale</v-tab>
      <v-tab>Main secondaire</v-tab>
                      <v-tab-item
        v-for="n in 7"
        :key="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in dossier[test[n - 1]].length"
              :key="i"
              cols="12"
              md="4"
            >
           
            
            
                <v-img
                
                :src="`${test[n - 1]}/${dossier[test[n - 1]][i - 1]}`"
                :lazy-src="`b_back/${test[n]}`"
                max-height="100"
                max-width="100"
                aspect-ratio="1"
              ><v-btn style="top : 50%; left: 40%"
              
              
              color="#6200EA"
              elevation="2"
              rounded
              icon
              @click="overlay = true; objet = `${test[n - 1]}/${dossier[test[n - 1]][i - 1]}`"
            ><v-icon large>
                mdi-lock
              </v-icon></v-btn></v-img>
            

            
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
                    </v-tabs>
                
                    <v-overlay
                    :z-index="zIndex"
                    :value="overlay"
                  >
                  <v-sheet
                    color="white"
                    elevation="1"
                    height="500"
                    rounded
                    width="500"
                    >
                    <v-img
                
                    :src="objet"
                    :lazy-src="`b_back/${test[n]}`"
                    max-height="120"
                    max-width="120"
                    aspect-ratio="1"
                    style="left: 35%; top: 10%"
                  >
                  </v-img>
                  <h1 style="margin-left: 35%; margin-top: 20%; color: #000000">Prix: {{ prix }} 💵</h1>
                  <v-btn
                  style="width: 70%; margin-left: 15%; margin-top: 10%"
                  color="#6200EA"
                  elevation="2"
                  rounded
                 >Acheter</v-btn>
                 <v-btn
                  style="width: 50%; margin-left: 25%; margin-top: 5%"
                  color="#D50000"
                  elevation="2"
                  rounded
                  @click="overlay = false"
                 >Annuler</v-btn>
                  
                  
                  </v-sheet>
                  </v-overlay>
                    
                
             
            </v-container>
          
          </v-main>
        </v-window-item>
        <v-window-item>
          <v-main style="background-color: #6200EA;">
           
            <v-container>
          <p>test</p>
</v-container>
          
      </v-main>
        </v-window-item>
        <v-window-item>
          <v-main style="background-color: #6200EA;">
           
            <v-container>
          
          </v-container>
          
      </v-main>
        

        </v-window-item>
      </v-window>
        </v-app>
      
        
     
      
</template>

<script>
export default {
  data: () => ({
       drawer: null,
      hover: false,
      test: ["b_back", "b_face", "b_hair", "b_hats", "b_heads", "b_mainhand", "b_offhand"],

      dossier: {"b_back":["baby.png","Banana.png","bigCapeblue.png","bigCapeGreen.png","bigCapeRed.png","cash.png","champ.png","CuteWings.png","DarkWings.png","DemonTail.png","demonWing.png","demonWingBlue.png","demonWingDark.png","fairy_wings.png","fairy_wisp.png","frogbag.png","golden_cape.png","Hearts.png","Jetpack.png","LightWings.png","moneybag.png","nut_shield.png","polka_dot_egg.png","polka_dot_egg2.png","pretty_hair1.png","smallCapeBlue.png","smallCapeGreen.png","smallCapeRed.png","snail_house.png","spikedshellGreen.png","stinky.png","tail1.png","tail2.png","tail3.png","TravelBackPack.png","TravelBackPackBig.png","tube_backpack.png","TurtleShellBlue.png","TurtleShellGreen.png","TurtleShellpurple.png","TurtleShellRed.png"],"b_face":["3D.png","angryface.png","Bandage.png","banditmaskbig.png","banditmasksmall.png","beak.png","bearded.png","bigcryface.png","big_beak.png","blobFace.png","blueMask.png","BlueShades.png","blush.png","bunnyface.png","clown_nose.png","cookie.png","cthulhu.png","cute_face.png","darkMask.png","dogface.png","drool_face.png","eatingtoast.png","elephantsnout.png","EvilFace.png","Eyebrows.png","eyepatch.png","eyes1.png","fishmouth.png","flyeye.png","glasses1.png","glasses2.png","glasses3.png","glasses4.png","googlyeyes.png","graybeared.png","greenmask.png","HeartEyes.png","heist_mask1.png","heist_mask2.png","heist_mask3.png","hockey_mask.png","hollowEyes.png","Illmask.png","italian_boi.png","jokerface.png","joy.png","KarpBeard.png","kitsune_mask.png","kittywhiskers.png","knight_visor.png","Lonk.png","madface.png","metal_mask.png","monkeyface.png","Moth.png","mustache.png","NoFace.png","NoOne.png","ohno.png","Patch.png","PlagueMask.png","plankface.png","purpleetes.png","redMask.png","RedRoundGlasses.png","RedShades.png","SadFace.png","sadness.png","Shades.png","shadesBluePink.png","shadesPinkYellow.png","shadesYellowGreeen.png","sleepingmaskBlue.png","sleepingmaskPink.png","Sly.png","smirkface.png","snorkel.png","SpaceHelmet.png","TeamBandanaBlue.png","TeamBandanaRed.png","theoneeye.png","Tusks.png","ugandan.png","uirghface.png","villain.png","visor_green.png","visor_orange.png","VR.png","watching_goggles.png","web_spinner.png","winterscarf_blue.png","winterscarf_pink.png","winterscarf_red.png","yaasface.png","yayface.png"],"b_heads":["Cyborg.png","FlinkFrog.png","GiftFace.png","Girl.png","Kitty.png","MelonFace.png","Octo.png","PigFace.png","Pumpkin.png","Robot.png","SkullFace.png","slimeHead.png","SlimeHeadBodyColour.png","SubToastHead.png","TellyFace.png","ToastHead.png","YellowMan.png"],"b_hair":["hair1.png","hair10.png","hair11.png","hair12.png","hair13.png","hair14.png","hair15.png","hair16.png","hair17.png","hair18.png","hair19.png","hair2.png","hair20.png","hair21.png","hair22.png","hair23.png","hair24.png","hair25.png","hair26.png","hair27.png","hair28.png","hair29.png","hair3.png","hair30.png","hair31.png","hair32.png","hair33.png","hair34.png","hair35.png","hair36.png","hair37.png","hair38.png","hair39.png","hair4.png","hair40.png","hair41.png","hair42.png","hair43.png","hair44.png","hair45.png","hair46.png","hair47.png","hair48.png","hair49.png","hair5.png","hair50.png","hair51.png","hair52.png","hair53.png","hair54.png","hair55.png","hair56.png","hair57.png","hair58.png","hair59.png","hair6.png","hair60.png","hair61.png","hair62.png","hair63.png","hair64.png","hair65.png","hair66.png","hair67.png","hair68.png","hair69.png","hair7.png","hair70.png","hair71.png","hair8.png","hair9.png"],"b_hats":["adventuring_hat.png","alien_head.png","ancient_fighter.png","archerHat.png","asianfarmer.png","bandanablue.png","bandanaorange.png","bandanapurple.png","bandanared.png","baseballcapblack.png","baseballcapBlue.png","baseballcapblue2.png","baseballcapcute.png","baseballcapgreen.png","baseballcaprainbow.png","baseballcapred.png","baseballcapred2.png","beanieDark.png","beanieLight.png","Birdnest.png","blue_wig.png","BobRoss.png","bomb_hat1.png","bomb_hat2.png","bomb_hat3.png","bomb_hat4.png","bongoHat.png","bowlerhat.png","Bunnyears.png","Bunnyears2.png","caktushelmet.png","Cap.png","CapBack.png","cap_blue.png","cap_green.png","cap_icon.png","cap_pink.png","cap_purple.png","cap_red.png","cap_yellow.png","CatEars.png","chickenhair.png","chopper.png","ChristmasBlue.png","christmasGreen.png","christmasRed.png","construnctionHelmet.png","cook.png","crown.png","crystalcrown.png","darkhood.png","detectivehat.png","dev.png","Dinosaurhat.png","dogears.png","duckcap.png","Egg.png","EggShellBlank.png","EggShellBlue.png","EggShellgolden.png","EggShellgreen.png","EggShelltiel.png","EggShellWhite.png","evil_horns.png","evil_princess.png","fez.png","fighter_bandana.png","fish.png","fisherHat.png","floppy_hat.png","flower_witch.png","forhead.png","froghood.png","Froglord.png","frogohat.png","Funky.png","Halloween1.png","Halo.png","headphonesblue.png","headphonesgreen.png","headphonespurple.png","headphonesred.png","headphoneswhite.png","healer.png","high_noon.png","hollowHorns.png","hornedmushroom.png","hornhelm.png","leaf.png","Lhat.png","magichat1.png","magichat2.png","magichat3.png","magichat4.png","messy_hair.png","mexicangeek.png","militaryhelm.png","monkeyPrince.png","mummy.png","mushroom1up.png","mushroomorange.png","mushroomsuper.png","mushroom_hat.png","mushroom_palette.png","nightcap_blue.png","nightcap_green.png","nightcap_purple.png","nightcap_red.png","nurse.png","Octo.png","orangeleaf.png","PatreonHelm.png","patricksday.png","pioletcap.png","pioletGuide.png","piolethat.png","PirateBandana.png","PirateHat.png","PlagueHat.png","Police.png","poopcorn.png","poophat.png","poopmoji.png","poopshiny.png","princess_hair.png","private_investigator.png","propellerhat.png","remotes.png","retrospace.png","Ribbon.png","RibbonBlue.png","robotic_helm.png","rubberduck.png","sailorhat.png","Seedling.png","sharkhat.png","shell_green.png","shell_green_spike.png","shell_red.png","Skull.png","SkullGold.png","Slime.png","slime_boss.png","snowhat_blue.png","snowhat_pink.png","snowhat_red.png","spaghetti.png","spikedhair.png","spiky_shell_blue.png","Squid_Blue.png","Squid_green.png","Squid_pink.png","Squid_yellow.png","strawhat.png","sushi1.png","toiletpaper.png","toon_evil_horns.png","toon_purple_cap.png","toon_red_cap.png","toon_yellow_cap.png","tophat.png","Turtle.png","TwitchHelm.png","unihorn.png","wings.png","winterhat_blue.png","winterhat_green.png","winterhat_orange.png","witch_hat.png"],"b_mainhand":["balloonblue.png","balloongreen.png","balloonRed.png","balloonyellow.png","Banana.png","baseball_bat.png","battleaxe.png","BirthdayCake.png","BlanketBlue.png","BlanketRed.png","BobRossPalette.png","bomb.png","bookblue.png","bookOld.png","bookRed.png","bow.png","boxingGloveblue.png","boxingGloveRed.png","bright_sword.png","carrot.png","cellphone.png","chickenWing.png","club.png","coffee.png","cookie_shield.png","crowbar.png","cutlass.png","double_sword.png","Easterbasket1.png","Easterbasket2.png","FaraWand.png","flagDenmark.png","flippedsaberBlue.png","flippedsaberDark.png","flippedsaberGreen.png","flippedsaberRed.png","fork.png","icecream.png","katana.png","key_sword.png","knife.png","lantern.png","LightsaberBlue.png","LightsaberDark.png","LightsaberGreen.png","LightsaberPurple.png","LightsaberRed.png","light_sword.png","lollipop.png","mace.png","magicbook.png","magicstaff.png","ModHammer.png","njkatana.png","njnuncuck.png","njsai.png","Njstick.png","PatreonCanon.png","petfrog.png","plunger.png","poopstick.png","poopstickgold.png","potion_blue.png","potion_green.png","potion_purple.png","potion_red.png","powerful_sword.png","powerhand.png","remote_black.png","remote_blue.png","remote_green.png","remote_pink.png","remote_red.png","remote_yellow.png","ropesnake.png","rusty_sword.png","ShieldBlue.png","ShieldgoldenToast.png","ShieldGreen.png","ShieldLollypop.png","ShieldNoFace.png","ShieldRed.png","ShieldSkinFace.png","ShieldSub.png","ShieldVikingbig.png","shovel.png","shuriken.png","SodaPop.png","spoon.png","StarWand.png","TeamPaintBrushBlue.png","TeamPaintBrushRed.png","TeamSwordBlue.png","TeamSwordRed.png","TwitchCanon.png","whip.png","wood_shield.png","wood_staff.png"],"b_offhand":["Banana.png","battleaxe.png","bookblue.png","bookold.png","bookRed.png","boxinggloveblue.png","boxingGloveRed.png","carrot.png","cellphone.png","club.png","coffee.png","crowbar.png","cutlass.png","double_sword.png","Easterbasket1.png","Easterbasket2.png","FaraWand.png","flagDenmark.png","flintlockpistol.png","fork.png","glowy_sword.png","halberd.png","icecream.png","knife.png","lantern.png","LightsaberBlue.png","LightsaberDark.png","LightsaberGreen.png","LightsaberPurple.png","LightsaberRed.png","light_sword.png","lollipop.png","mace.png","magicbook.png","magicstaff.png","ModHammer.png","njkatana.png","njnuncuck.png","njsai.png","Njstick.png","orange_sword.png","petfrog.png","plunger.png","poopstick.png","poopstickgold.png","powerful_sword.png","remote_black.png","remote_blue.png","remote_green.png","remote_pink.png","remote_red.png","remote_yellow.png","ropesnake.png","ShieldgoldenToast.png","ShieldLollypop.png","shovel.png","shuriken.png","spoon.png","StarWand.png","TeamPaintBrushBlue.png","TeamPaintBrushRed.png","TeamSwordBlue.png","TeamSwordRed.png","video_game_gun.png","video_game_gun2.png","whip.png","wood_shield.png","wood_staff.png","wood_sword.png"]},
      overlay: false,
      objet: "",
    zIndex: 0,
    prix: 0,
    argent: 0,
    model: 0,
    page: 0,
    
    }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

