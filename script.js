/**
 * NEXUSTYPE ENGINE OPERATIONAL ARCHITECTURE
 * Core State Machine for Content Synthesis, Dynamic Capture and Device Responsive Workspaces
 */

// Application Data Stores Configured via Native Storage Engine
const STORAGE_KEY = 'NEXUSTYPE_METRICS_V2';
const TEXT_DATABASE = {
 
    quotes: [
        "The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 1 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 2 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 3 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 4 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipline. On day 5 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 6 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 7 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 8 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 9 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipline. On day 10 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 11 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 12 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 13 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 14 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipline. On day 15 Alex wrote notes completed tasks met new",




        "people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 16 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 17 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 18 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 19 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipline. On day 20 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 21 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 22 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 23 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 24 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipline. On day 25 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 26 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 27 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 28 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 29 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipl",


        "ine. On day 30 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 31 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 32 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 33 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 34 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipline. On day 35 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 36 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 37 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 38 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 39 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipline. On day 40 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 41 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 42 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 43 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 44 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people what.",

        "keep moving forward with courage kindness and discipline. On day 45 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 46 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 47 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 48 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 49 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipline. On day 50 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 51 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 52 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 53 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 54 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great achievements over time. The future belongs to people who keep moving forward with courage kindness and discipline. On day 55 Alex wrote notes completed tasks met new people and ended the evening with gratitude. The Journey of Alex began in a small village where every morning started with hope. Alex loved reading books learning new skills and helping friends. One day Alex decided to travel to a big city to study computers and build a better future. On day 56 Alex wrote notes completed tasks met new people and ended the evening with gratitude. In the city everything looked different. The roads were busy the buildings were tall and people worked hard every day. Alex met kind teachers friendly classmates and helpful neighbors. Every lesson brought more confidence and every mistake became a chance to learn. On day 57 Alex wrote notes completed tasks met new people and ended the evening with gratitude. After many months Alex completed small projects and slowly became a skilled developer. The first program was simple but it solved a real problem. That success inspired Alex to continue practicing every single day. On day 58 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Years later Alex started a small company with trusted friends. They believed honesty teamwork and patience were more important than quick success. Customers appreciated their work and recommended them to others. On day 59 Alex wrote notes completed tasks met new people and ended the evening with gratitude. Alex often told young students Never stop learning because every day gives you another opportunity to improve. Small efforts repeated every day become great"
    ],
    hindi: [

        
        "Ek chhote se gaon Rampur ke kinaare ek purani aur tooti hui haveli thi jiske baare me har koi kehta tha ki wahan raat ke baad koi zinda lautkar nahi aata. Gaon ke log us jagah ka naam sunte hi darr jaate the, lekin 18 saal ka Rohan bachpan se hi bahadur aur bahut zyada curious tha. Ek din uske Dadaji ne use ek purana naksha diya aur kaha ki is haveli ke neeche ek gupt surang hai jahan kabhi ek imaandaar raja ne apna khazana chhupaya tha, lekin us khazane ki raksha sirf talwaron ya taalon se nahi balki ajeeb paheliyon aur rahasyamayi taakaton se hoti hai. Rohan ne faisla kiya ki wo is raaz ka pata zaroor lagayega. Agli raat wo ek torch, ek rassi, ek diary aur ek compass lekar haveli pahunch gaya. Haveli ka bada lohe ka gate zor ki awaaz ke saath khula aur hawa itni thandi thi jaise kisi ne achanak sardiyon ko bula liya ho. Andar har taraf dhool, makdi ke jaale aur tooti hui tasveeren lagi thi. Jaise hi Rohan ne pehla kadam rakha uske peeche gate apne aap band ho gaya. Usne himmat nahi haari aur aage badhta gaya. Ek kamre me usse deewar par ajeeb nishaan bane mile jo uske Dadaji ke diye hue nakshe se milte the. Usne deewar ke ek pathar ko dabaya aur zameen dheere dheere khul gayi. Neeche andheri surang thi. Rohan torch jalakar neeche utar gaya. Kuch door chalne ke baad use teen raste dikhe. Diary me likha tha ki sirf wahi insaan sahi raasta chun sakta hai jo apne darr par kabu rakh sake. Achanak use kisi ke chalne ki awaaz sunai di. Usne peeche mudkar dekha lekin wahan koi nahi tha. Thodi der baad phir wahi awaaz aayi aur is baar use laga jaise koi uske bilkul paas khada ho. Rohan ne himmat jutai aur seedha chal diya. Kuch hi kadam baad uske saamne ek purani murti thi jiske haath me ek chamakta hua neela patthar tha. Jaise hi usne patthar uthaya poori surang hilne lagi aur deewaron se pathar girne lage. Rohan daudta hua aage badha aur ek bade se darwaze ke saamne pahunch gaya jahan likha tha Lalach tumhari sabse badi haar hai. Darwaza kholte hi uske saamne sona, heere aur anmol khazane ka dher laga tha lekin usi waqt ek gahri awaaz gunji Sirf wahi vyakti is khazane ko le ja sakta hai jo sirf utna hi le jitni usse zarurat ho. Rohan ne socha agar wo sab kuch le gaya to shayad ye haveli hamesha ke liye toot jayegi aur gaon par koi badi musibat aa jayegi. Isliye usne sirf ek chhota sa sone ka sikka uthaya. Jaise hi usne aisa kiya poora kamra roshni se bhar gaya aur saamne ek buzurg raja ki aatma prakat hui. Raja muskuraya aur bola Tumne imaandari aur samajhdari ki asli pariksha pass kar li. Asli khazana sona nahi balki sachchai aur himmat hai. Itna kehkar usne Rohan ko ek purani kitab di jisme gaon ke purkhon ka pura itihaas aur kai chhipe hue raaz likhe the. Rohan kitab lekar bahar nikal aaya aur usne dekha ki suraj ugne wala tha. Haveli dheere dheere mitti me sama gayi jaise wo kabhi thi hi nahi. Gaon wapas pahunchne par kisi ko yakeen nahi hua lekin jab usne kitab dikhai to buzurg log hairan reh gaye kyunki usme wahi baatein likhi thi jo sirf unke purkhe jaante the. Us din ke baad Rohan gaon ka sabse sammanit yuva ban gaya. Lekin kahani yahin khatam nahi hoti. Kai saal baad jab Rohan us kitab ko phir se padh raha tha tab uske andar se ek aur chhota sa naksha gira jiske neeche sirf ek line likhi thi Yeh to sirf pehla darwaza tha, asli rahasya pahaadon ke us paar tumhara intezar kar raha hai. Rohan ne aasman ki taraf dekha, halka sa muskuraya, apna bag uthaya aur ek naye romanch ki taraf chal pada, kyunki kuch raaz aise hote hain jo sirf unhi logon ko milte hain jo darr se nahi balki himmat se apna safar shuru karte hain.",
        "Train Number 33022 ko log aaj bhi Bharat ki sabse rahasyamayi train ke naam se yaad karte hain. Kehte hain ki lagbhag tees saal pehle ye train ek shaam apni aakhri yatra par nikli thi. Train me sauon yatri safar kar rahe the aur sab kuch bilkul saamanya tha. Raat ko driver ne control room ko aakhri sandesh bheja ki train surang number 17 me pravesh kar rahi hai. Uske baad radio hamesha ke liye khamosh ho gaya. Agli subah railway ki team surang tak pahunchi lekin wahan na engine tha na bogiyan aur na hi kisi durghatna ka koi nishaan. Jaise poori train hawa me gayab ho gayi ho. Is ghatna ki jaanch kai saal tak chali lekin koi sach saamne nahi aaya. Log is kahani ko bhool gaye. Kai saal baad Aarav naam ka ek journalist purani railway files dekh raha tha tab use assistant driver ki ek diary mili. Diary ke aakhri panne par likha tha agar kisi raat surang ke andar neeli roshni dikhe to train ko rokna mat. Aarav ne sach jaanne ka faisla kiya aur ek raat camera, torch aur recording machine lekar surang pahunch gaya. Raat hote hi achanak hawa thandi ho gayi aur track zor se kampne lage. Andhere me door se ek purani train ki headlight chamki. Dheere dheere Train 33022 uske saamne aakar ruk gayi. Sabse hairani ki baat ye thi ki train bilkul nayi lag rahi thi aur uske andar baithe logon ke chehre par koi ghabrahat nahi thi. Unhe lag raha tha jaise unka safar abhi shuru hua ho. Aarav ne himmat karke train me kadam rakha. Andar ki ghadiyan tees saal purana samay dikha rahi thi. Har seat par wahi yatri baithe the jo kabhi laapata ghoshit kiye gaye the. Ek buzurg aadmi ne dheere se kaha hum log kabhi is duniya se gaye hi nahi hum bas waqt ke ek chakkar me phans gaye hain. Jitni der train chalti hai utni der hamare liye kuch minute guzarte hain lekin bahar kai saal beet jaate hain. Tabhi poori train me neeli roshni phail gayi aur ek zor ki awaaz gunji ki jo bahar ki duniya ka hai use turant laut jana chahiye. Aarav daudkar gate ki taraf bhaga aur chalti train se surang ke kinare kood gaya. Jab usne peeche mudkar dekha to train dheere dheere dhund me gayab ho chuki thi. Camera me sirf khaali track record hua tha lekin uski jeb me ek purana ticket pada tha jis par Train Number 33022 aur tees saal purani tareekh chhapi hui thi. Aaj bhi har saal usi tareekh aur usi samay kuch log kehte hain ki surang number 17 ke paas purani seeti ki awaaz sunai deti hai aur door andhere me ek headlight chamakti nazar aati hai. Lekin jo bhi us roshni ka peecha karta hai woh kabhi wapas nazar nahi aata. Train Number 33022 ko log aaj bhi Bharat ki sabse rahasyamayi train ke naam se yaad karte hain. Kehte hain ki lagbhag tees saal pehle ye train ek shaam apni aakhri yatra par nikli thi. Train me sauon yatri safar kar rahe the aur sab kuch bilkul saamanya tha. Raat ko driver ne control room ko aakhri sandesh bheja ki train surang number 17 me pravesh kar rahi hai. Uske baad radio hamesha ke liye khamosh ho gaya. Agli subah railway ki team surang tak pahunchi lekin wahan na engine tha na bogiyan aur na hi kisi durghatna ka koi nishaan. Jaise poori train hawa me gayab ho gayi ho. Is ghatna ki jaanch kai saal tak chali lekin koi sach saamne nahi aaya. Log is kahani ko bhool gaye. Kai saal baad Aarav naam ka ek journalist purani railway files dekh raha tha tab use assistant driver ki ek diary mili. Diary ke aakhri panne par likha tha agar kisi raat surang ke andar neeli roshni dikhe to train ko rokna mat. Aarav ne sach jaanne ka faisla kiya aur ek raat camera, torch aur recording machine lekar surang pahunch gaya. Raat hote hi achanak hawa thandi ho gayi aur track zor se kampne lage. Andhere me door se ek purani train ki headlight chamki. Dheere dheere Train 33022 uske saamne aakar ruk gayi. Sabse hairani ki baat ye thi ki train bilkul nayi lag rahi thi aur uske andar baithe logon ke chehre par koi ghabrahat nahi thi. Unhe lag raha tha jaise unka safar abhi shuru hua ho. Aarav ne himmat karke train me kadam rakha. Andar ki ghadiyan tees saal purana samay dikha rahi thi. Har seat par wahi yatri baithe the jo kabhi laapata ghoshit kiye gaye the. Ek buzurg aadmi ne dheere se kaha hum log kabhi is duniya se gaye hi nahi hum bas waqt ke ek chakkar me phans gaye hain. Jitni der train chalti hai utni der hamare liye kuch minute guzarte hain lekin bahar kai saal beet jaate hain. Tabhi poori train me neeli roshni phail gayi aur ek zor ki awaaz gunji ki jo bahar ki duniya ka hai use turant laut jana chahiye. Aarav daudkar gate ki taraf bhaga aur chalti train se surang ke kinare kood gaya. Jab usne peeche mudkar dekha to train dheere dheere dhund me gayab ho chuki thi. Camera me sirf khaali track record hua tha lekin uski jeb me ek purana ticket pada tha jis par Train Number 33022 aur tees saal purani tareekh chhapi hui thi. Aaj bhi har saal usi tareekh aur usi samay kuch log kehte hain ki surang number 17 ke paas purani seeti ki awaaz sunai deti hai aur door andhere me ek headlight chamakti nazar aati hai. Lekin jo bhi us roshni ka peecha karta hai woh kabhi wapas nazar nahi aata.",
        "Ek purane shehar ke kinaare ek sunsaan haveli thi jise log Kala Darwaza wali Haveli kehte the. Din me bhi log us jagah ke paas se guzarna pasand nahi karte the kyunki kaha jata tha ki haveli ke andar ek kala darwaza hai jo sirf saal me ek baar Poornima ki raat khulta hai. Jo bhi us darwaze ke andar gaya woh kabhi pehle jaisa lautkar nahi aaya. Arjun naam ka ek young photographer purani jagahon aur rahasyon ki tasveeren lene ka shaukeen tha. Usne kai afwaahon ko jhooth sabit kiya tha isliye use laga ki Kala Darwaza bhi sirf logon ki kalpana hai. Ek Poornima ki raat woh camera torch notebook aur paani ki bottle lekar haveli pahunch gaya. Haveli ke andar ajeeb sannata tha. Hawa chalne ke bawajood parde bilkul seedhe the aur deewaron par lage purane chitra jaise uski har harkat dekh rahe the. Kuch der baad use ek lambi gallery mili jiske ant me kaale rang ka bahut bada darwaza tha. Darwaze par purani lipi me kuch likha tha jiska arth tha sirf sachcha irada rakhne wala hi laut sakega. Jaise hi ghadi ne barah bajaye darwaza dheere dheere khulne laga. Andar andhera nahi balki neeli roshni se chamakti ek anokhi duniya thi. Pedon ke patte chandi ki tarah chamak rahe the aur aasman me do chaand nazar aa rahe the. Arjun ne himmat karke andar kadam rakha. Peeche mudkar dekha to darwaza gaayab ho chuka tha. Woh jungle me aage badha to use pathar ke bane bahut bade putle dikhe. Ek budhiya achanak saamne aayi aur boli yahan waqt alag tarah se chalta hai. Bahar ki ek raat yahan kai saalon ke barabar hai. Agar suraj ugne se pehle tum darwaza na dhoondh paaye to hamesha ke liye isi duniya ka hissa ban jaoge. Arjun ne safar shuru kiya. Raaste me use ek nadi mili jiska paani sheeshe ki tarah saaf tha lekin usme apna chehra dekhte hi har insaan apne sabse bade darr ka saamna karta tha. Arjun ne paani me dekha to use apna bachpan yaad aaya jab woh andhere se bahut darta tha. Usne aankhen band ki aur himmat se nadi paar kar li. Aage ek purana kila tha jahan ek rakshak khada tha. Rakshak ne talwar nahi uthai balki teen paheliyan poochhi. Arjun ne dhyan aur samajhdari se teeno ka jawab diya. Rakshak muskuraya aur usse ek chamakta hua compass diya jo sirf sach ke raaste ki taraf ghoomta tha. Compass ka pichha karte hue Arjun ek pahaadi par pahunch gaya jahan hawa me tairta hua wahi Kala Darwaza dikhai diya. Lekin darwaze ke paas pahunchte hi uske saamne sone heere aur anmol khazane ke pahaad ubhar aaye. Ek awaaz aayi agar tum ruk gaye to sab tumhara hai. Arjun samajh gaya ki ye antim pariksha hai. Usne khazane ki taraf dekha bhi nahi aur seedha darwaze ki taraf chal diya. Turant saare khazane dhund ban kar ud gaye. Darwaza khul gaya aur tez roshni chha gayi. Jab Arjun haveli me wapas aaya to bahar abhi bhi wahi Poornima ki raat thi jaise sirf kuch minute hi bitae hon. Lekin uske haath me compass ab bhi tha. Kuch din baad usne compass ko dekhna chaha lekin woh dheere dheere sone ki dhool ban kar hawa me bikhar gaya. Haveli dobara kabhi nahi mili. Log kehte hain ki Kala Darwaza har us insaan ka intezar karta hai jo lalach se upar uthkar sach aur himmat ko chun sake aur jo us pariksha me safal ho jata hai wahi asli rahasya dekh pata hai. Aaj bhi Poornima ki raat kuch log door pahadi par ek neeli roshni aur ek kaala darwaza chamakta hua dekhne ka daawa karte hain lekin subah hote hi wahan sirf khaali zameen hoti hai.",
        "Samundar ka Andekha Dweep duniya ke kisi bhi naksha me nahi milta tha lekin purane machhuaare uske baare me dheemi awaaz me baat karte the. Kehte the ki gehri dhund ke beech kabhi kabhi ek aisa dweep dikhai deta hai jahan pahunchne wala har vyakti zinda to laut aata hai lekin uski zindagi hamesha ke liye badal jaati hai. Vivaan naam ka ek young explorer bachpan se is rahasya ko suljhana chahta tha. Ek din use apne Nana ki purani diary mili jisme samundar ke beech ek ajeeb nishaan bana tha. Diary me likha tha ki suraj ugne se pehle agar neeli dhund dikhe to uska peecha karna. Vivaan ne apni chhoti boat taiyar ki aur safar shuru kar diya. Kai ghante tak kuch nahi hua phir achanak samundar bilkul shaant ho gaya aur chaaro taraf neeli dhund chha gayi. Dhund hatte hi uske saamne hara bhara dweep tha jise kisi ne kabhi record nahi kiya tha. Dweep par utarte hi use ajeeb ped, chamakte patthar aur purane mandir ke avshesh mile. Har jagah aise nishaan bane the jaise kisi pracheen sabhyata ne unhe chhoda ho. Jungle ke andar use ek patthar ka dwar mila jiske neeche se thandi hawa aa rahi thi. Andar ek lambi surang thi jahan deewaron par samundar ki kahaniyan bani thi. Aage badhne par use ek bada kaksh mila jahan beech me neeli roshni se chamakta gol patthar hawa me tair raha tha. Jaise hi Vivaan uske paas gaya poora kaksh roshni se bhar gaya aur uske saamne ek pracheen rakshak prakat hua. Rakshak ne bataya ki yeh dweep sirf un logon ko dikhai deta hai jo lalach nahi gyaan ki talaash me aate hain. Usne Vivaan ko teen pariksha di. Pehli me himmat, doosri me buddhi aur teesri me imaandari ki kasauti thi. Vivaan ne har chunauti bina kisi dhokhe ke poori ki. Akhri darwaza khulne par uske saamne sona nahi balki hazaron purani pustakein aur nakshon ka khazana tha. Rakshak ne kaha ki asli daulat gyaan hota hai. Vivaan ne sirf ek pustak uthai aur baaki sab wahi chhod diya. Turant poora dweep kampne laga aur ek gupt raasta samundar ki taraf khul gaya. Vivaan boat tak pahunch gaya aur peeche mudkar dekha to dheere dheere poora dweep dhund me gaayab ho gaya. Jab woh ghar lautkar diary kholne laga to uske andar ek naya naksha bana hua tha jo pehle kabhi nahi tha. Naksha kisi aur rahasyamayi jagah ki taraf ishara kar raha tha. Aaj bhi samundar me safar karne wale kuch log kehte hain ki kabhi kabhi neeli dhund ke beech door ek hara dweep dikhai deta hai lekin jis pal koi uski tasveer lene ki koshish karta hai woh turant aankhon ke saamne se gaayab ho jata hai. Samundar ka Andekha Dweep duniya ke kisi bhi naksha me nahi milta tha lekin purane machhuaare uske baare me dheemi awaaz me baat karte the. Kehte the ki gehri dhund ke beech kabhi kabhi ek aisa dweep dikhai deta hai jahan pahunchne wala har vyakti zinda to laut aata hai lekin uski zindagi hamesha ke liye badal jaati hai. Vivaan naam ka ek young explorer bachpan se is rahasya ko suljhana chahta tha. Ek din use apne Nana ki purani diary mili jisme samundar ke beech ek ajeeb nishaan bana tha. Diary me likha tha ki suraj ugne se pehle agar neeli dhund dikhe to uska peecha karna. Vivaan ne apni chhoti boat taiyar ki aur safar shuru kar diya. Kai ghante tak kuch nahi hua phir achanak samundar bilkul shaant ho gaya aur chaaro taraf neeli dhund chha gayi. Dhund hatte hi uske saamne hara bhara dweep tha jise kisi ne kabhi record nahi kiya tha. Dweep par utarte hi use ajeeb ped, chamakte patthar aur purane mandir ke avshesh mile. Har jagah aise nishaan bane the jaise kisi pracheen sabhyata ne unhe chhoda ho. Jungle ke andar use ek patthar ka dwar mila jiske neeche se thandi hawa aa rahi thi. Andar ek lambi surang thi jahan deewaron par samundar ki kahaniyan bani thi. Aage badhne par use ek bada kaksh mila jahan beech me neeli roshni se chamakta gol patthar hawa me tair raha tha. Jaise hi Vivaan uske paas gaya poora kaksh roshni se bhar gaya aur uske saamne ek pracheen rakshak prakat hua. Rakshak ne bataya ki yeh dweep sirf un logon ko dikhai deta hai jo lalach nahi gyaan ki talaash me aate hain. Usne Vivaan ko teen pariksha di. Pehli me himmat, doosri me buddhi aur teesri me imaandari ki kasauti thi. Vivaan ne har chunauti bina kisi dhokhe ke poori ki. Akhri darwaza khulne par uske saamne sona nahi balki hazaron purani pustakein aur nakshon ka khazana tha. Rakshak ne kaha ki asli daulat gyaan hota hai. Vivaan ne sirf ek pustak uthai aur baaki sab wahi chhod diya. Turant poora dweep kampne laga aur ek gupt raasta samundar ki taraf khul gaya. Vivaan boat tak pahunch gaya aur peeche mudkar dekha to dheere dheere poora dweep dhund me gaayab ho gaya. Jab woh ghar lautkar diary kholne laga to uske andar ek naya naksha bana hua tha jo pehle kabhi nahi tha. Naksha kisi aur rahasy"
    ],
    Simple: [
        "child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard ",
        "the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air ever",


        "work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a",


        "good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep",


        "learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every mornin",


        "start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people grow stronger by learning from mistakes and trying again every small step leads to a big result never stop practicing because regular practice improves speed accuracy and confidence the sun is bright today we can walk in the park and enjoy fresh air every child likes to play with friends they learn new things every day hard work brings success every person should read books and practice daily a good habit makes life better time is valuable always use it wisely keep learning new skills and help other people whenever possible every morning start with a positive mind and finish every task with confidence people"
        
    ],
    
};

// Main State Variable Configuration Matrix
let state = {
    activeCategory: 'quotes',
    targetDuration: 60,       // 👈 15 की जगह 60 करें (डिफ़ॉल्ट 1 मिनट)
    timerRemaining: 60,       // 👈 15 की जगह 60 करें
    isExecuting: false,
    textSourceString: "",
    indexPointer: 0,
    countCorrectChars: 0,
    countWrongChars: 0,
    timerEngineInstance: null,
    audioSystemMode: 'mechanical',
    activeTheme: 'midnight',
    metricsHistory: []
};



// Web Audio API Audio System Synthesizer Engine
const AudioNodeEngine = {
    ctx: null,
    init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    },
    trigger(type) {
        if (state.audioSystemMode === 'off') return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        if (type === 'correct') {
            osc.frequency.setValueAtTime(state.audioSystemMode === 'gaming' ? 900 : 600, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);
            osc.start(); osc.stop(this.ctx.currentTime + 0.05);
        } else if (type === 'wrong') {
            osc.frequency.setValueAtTime(150, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.1);
            osc.start(); osc.stop(this.ctx.currentTime + 0.12);
        }
    }
};

// Initialize Application Lifecycles
document.addEventListener('DOMContentLoaded', () => {
    initAppCoreStorage();
    setupCoreNavigation();
    setupClockSyncEngine();
    setupTypingEngine();
    setupCanvasBackground();
    renderLeaderboard();
    
    // Default workspace loading state
    loadParagraphTrack();
});

/* ==========================================================================
   STORAGE & DATABASE PARSING ACTIONS
   ========================================================================== */
function initAppCoreStorage() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            state.metricsHistory = parsed.metricsHistory || [];
        }
    } catch (e) {
        console.warn("LocalStorage context blocked. Proceeding with temporary virtual runtime state.", e);
    }
}

function persistMetrics(wpm, accuracy) {
    state.metricsHistory.push({
        timestamp: new Date().toISOString(),
        wpm: wpm,
        accuracy: accuracy
    });
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ metricsHistory: state.metricsHistory }));
    } catch(e) {}
    renderLeaderboard();
}

/* ==========================================================================
   ROUTING AND UI NAVIGATION INTERFACES
   ========================================================================== */
function setupCoreNavigation() {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchPage(btn.dataset.target);
        });
    });

    // Quick Theme Switch Toggle Engine
    const themesList = ['midnight', 'light', 'cyberpunk'];
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
        let currentIdx = themesList.indexOf(state.activeTheme);
        state.activeTheme = themesList[(currentIdx + 1) % themesList.length];
        document.documentElement.setAttribute('data-theme', state.activeTheme);
        showToast(`Theme switched to Matrix Model: ${state.activeTheme.toUpperCase()}`);
    });

    // Sound selection mapping bind
    document.getElementById('setting-sound').addEventListener('change', (e) => {
        state.audioSystemMode = e.target.value;
    });

    document.getElementById('btn-reset-storage').addEventListener('click', () => {
        localStorage.removeItem(STORAGE_KEY);
        state.metricsHistory = [];
        renderLeaderboard();
        showToast("System database wiped clean successfully.");
    });
}

function switchPage(targetId) {
    document.querySelectorAll('.app-page').forEach(page => {
        page.classList.remove('active');
    });
    const selectedPage = document.getElementById(targetId);
    if(selectedPage) {
        selectedPage.classList.add('active');
    }
}

/* ==========================================================================
   CONTINUOUS HIGH-PRECISION DIGITAL CLOCK GENERATOR
   ========================================================================== */
function setupClockSyncEngine() {
    const clockDisplay = document.getElementById('clock-display');
    const clockGreeting = document.getElementById('clock-greeting');
    
    function parseTime() {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        
        // Sirf Ghanta aur Minute display karne ke liye render engine update
        if(clockDisplay) {
            clockDisplay.innerHTML = `${hrs}:${mins}`;
        }

        // Live Dynamic Greetings Setup
        let currentHour = now.getHours();
        let greetingStr = "Good System Cycle";
        if (currentHour < 12) greetingStr = "Good Morning";
        else if (currentHour < 17) greetingStr = "Good Afternoon";
        else if (currentHour < 21) greetingStr = "Good Evening";
        else greetingStr = "Good Night";
        
        if(clockGreeting) clockGreeting.textContent = greetingStr;

        requestAnimationFrame(parseTime);
    }
    requestAnimationFrame(parseTime);
}
/* ==========================================================================
   CORE WORKSPACE TYPING CAPTURE MECHANICS
   ========================================================================== */
function setupTypingEngine() {
    const targetInput = document.getElementById('typing-input-terminal');
    const selectorCategory = document.getElementById('text-category');
    
    selectorCategory.addEventListener('change', (e) => {
        state.activeCategory = e.target.value;
        abortSessionCycle();
        loadParagraphTrack();
    });

    // Time Config Selector Chips
    document.querySelectorAll('#timer-chips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#timer-chips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            let timeVal = chip.dataset.time;
            if (timeVal === 'custom') {
                let promptVal = prompt("Enter custom time execution window (seconds):", "45");
                state.targetDuration = parseInt(promptVal) || 30;
            } else {
                state.targetDuration = parseInt(timeVal);
            }
            abortSessionCycle();
            loadParagraphTrack();
        });
    });

    targetInput.addEventListener('input', (e) => {
        if (!state.isExecuting) {
            startSessionCycle();
        }
        evaluateTerminalInput(e.target.value);
    });


    // Input Terminal security & strict typing rules
targetInput.addEventListener('keydown', (e) => {
    // Arrow keys (Left, Right, Up, Down), Home, End को ब्लॉक करें ताकि बीच में कर्सर न ले जा सके
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'].includes(e.key)) {
        e.preventDefault();
    }
});

// Cut, Copy aur Paste को पूरी तरह ब्लॉक करें
targetInput.addEventListener('paste', (e) => e.preventDefault());
targetInput.addEventListener('copy', (e) => e.preventDefault());
targetInput.addEventListener('cut', (e) => e.preventDefault());

// माउस से क्लिक करके कर्सर को बीच में सेट करने से रोकें (कर्सर हमेशा टेक्स्ट के अंत में रहेगा)
targetInput.addEventListener('mouseup', () => {
    targetInput.selectionStart = targetInput.value.length;
    targetInput.selectionEnd = targetInput.value.length;
});
}

function loadParagraphTrack() {
    const dynamicArray = TEXT_DATABASE[state.activeCategory] || TEXT_DATABASE['quotes'] || [];
    if (!dynamicArray || dynamicArray.length === 0) return;
    
    const selectedString = dynamicArray[Math.floor(Math.random() * dynamicArray.length)];
    state.textSourceString = selectedString;
    state.indexPointer = 0;
    
    const container = document.getElementById('text-stream-target');
    container.innerHTML = "";
    
    // 🔥 FIX 1: स्क्रॉलर को एकदम शुरुआत (Top) पर रीसेट करें
    container.scrollTop = 0;

    // Fragment tokenized rendering to limit continuous DOM access overhead
    const fragment = document.createDocumentFragment();
    let words = selectedString.split(' ');
    
    words.forEach((wordStr, wIdx) => {
        let spanWord = document.createElement('span');
        spanWord.className = 'word';
        
        for(let i=0; i<wordStr.length; i++) {
            let spanChar = document.createElement('span');
            spanChar.className = 'char';
            spanChar.textContent = wordStr[i];
            spanWord.appendChild(spanChar);
        }
        
        // Append spaces between words manually
        if (wIdx < words.length - 1) {
            let spaceChar = document.createElement('span');
            spaceChar.className = 'char';
            spaceChar.innerHTML = "&nbsp;";
            spanWord.appendChild(spaceChar);
        }
        fragment.appendChild(spanWord);
    });
    
    container.appendChild(fragment);
    markCurrentPointer();
    
    // Reset structural layout indicators
    document.getElementById('hud-timer').textContent = state.targetDuration;
    const targetInput = document.getElementById('typing-input-terminal');
    if (targetInput) {
        targetInput.value = "";
        targetInput.disabled = false;
    }
}

function markCurrentPointer() {
    const allChars = document.getElementById('text-stream-target').querySelectorAll('.char');
    allChars.forEach((c, idx) => {
        c.classList.remove('current');
        if(idx === state.indexPointer) {
            c.classList.add('current');
        }
    });
}

function startSessionCycle() {
    state.isExecuting = true;
    state.timerRemaining = state.targetDuration;
    state.countCorrectChars = 0;
    state.countWrongChars = 0;
    
    document.getElementById('hud-timer').textContent = state.timerRemaining;

    state.timerEngineInstance = setInterval(() => {
        state.timerRemaining--;
        document.getElementById('hud-timer').textContent = state.timerRemaining;
        
        calculateRealtimeMetrics();

        if (state.timerRemaining <= 0) {
            terminateSessionCycle();
        }
    }, 1000);
}
function evaluateTerminalInput(currentValue) {
    const allChars = document.getElementById('text-stream-target').querySelectorAll('.char');
    
    // 1. BACKSPACE DETECTION & VIEW PORT ADJUSTMENT
    if (currentValue.length < state.indexPointer) {
        for (let i = currentValue.length; i <= state.indexPointer; i++) {
            if (allChars[i]) {
                allChars[i].classList.remove('correct', 'wrong', 'current');
            }
        }
        state.indexPointer = currentValue.length;
        markCurrentPointer();
        
        // Backspace scroll recovery system
        const activeChar = allChars[state.indexPointer];
        if (activeChar) {
            const parentScroller = document.getElementById('text-stream-target');
            const parentWord = activeChar.closest('.word');
            if (parentWord) {
                const scrollerRect = parentScroller.getBoundingClientRect();
                const wordRect = parentWord.getBoundingClientRect();
                const wordRelativeTop = wordRect.top - scrollerRect.top + parentScroller.scrollTop;
                const scrollerPaddingTop = parseFloat(window.getComputedStyle(parentScroller).paddingTop) || 0;
                
                if (wordRelativeTop - scrollerPaddingTop < parentScroller.scrollTop) {
                    parentScroller.scrollTop = Math.max(0, wordRelativeTop - scrollerPaddingTop);
                }
            }
        }
        return; 
    }

    let targetChar = allChars[state.indexPointer];
    if (!targetChar) return;

    // 2. INPUT CHARACTER VALIDATION MATRIX
    let structuralLastInput = currentValue[state.indexPointer];
    let comparativeTarget = targetChar.textContent === "\u00A0" ? " " : targetChar.textContent;

    if (structuralLastInput === comparativeTarget) {
        targetChar.classList.remove('wrong');
        targetChar.classList.add('correct');
        AudioNodeEngine.trigger('correct');
        state.countCorrectChars++;
    } else {
        targetChar.classList.remove('correct');
        targetChar.classList.add('wrong');
        AudioNodeEngine.trigger('wrong');
        state.countWrongChars++;
    }

    state.indexPointer++;

    // 3. LIFECYCLE CHECK & CONTINUOUS LINE SCROLLING INTEGRATION
    if (state.indexPointer >= allChars.length) {
        terminateSessionCycle();
    } else {
        markCurrentPointer();
        
        // DYNAMIC BOUNDARY SCROLLING ARCHITECTURE (INTEGRATED DIRECTLY)
        const nextChar = allChars[state.indexPointer];
        if (nextChar) {
            const parentScroller = document.getElementById('text-stream-target');
            const parentWord = nextChar.closest('.word');
            
            if (parentWord) {
                const scrollerRect = parentScroller.getBoundingClientRect();
                const wordRect = parentWord.getBoundingClientRect();
                
                // Absolute positions matrix coordinates relative to parent viewport
                const wordRelativeTop = wordRect.top - scrollerRect.top + parentScroller.scrollTop;
                const lineHeight = parseFloat(window.getComputedStyle(parentScroller).lineHeight) || 36;
                const scrollerVisibleHeight = parentScroller.clientHeight;
                
                // Middle point threshold configuration
                if (wordRelativeTop - parentScroller.scrollTop > scrollerVisibleHeight / 2) {
                    parentScroller.scrollTop = wordRelativeTop - (scrollerVisibleHeight / 2) + (lineHeight / 2);
                }
            }
        }
    }
}
/**
 * ULTRA-STABLE LINE SCROLLING ENGINE
 * Pure client boundaries metrics based system to prevent early scrolling bug
 */
function handleLineStickyScrolling(activeChar) {
    if (!activeChar) return;
    
    const parentScroller = document.getElementById('text-stream-target');
    const parentWord = activeChar.closest('.word');
    if (!parentWord) return;

    // Hame word ke coordinates container box ke view ke base par nikalne honge
    const scrollerRect = parentScroller.getBoundingClientRect();
    const wordRect = parentWord.getBoundingClientRect();

    // Line heights and explicit scaling measurement variables
    const lineHeight = parseFloat(window.getComputedStyle(parentScroller).lineHeight) || 36;
    
    // Relative position delta parameter check
    const wordRelativeTop = wordRect.top - scrollerRect.top + parentScroller.scrollTop;
    const scrollerPaddingTop = parseFloat(window.getComputedStyle(parentScroller).paddingTop) || 0;

    // HARD LOCK THRESHOLD RULE: Jab tak actual element layout height 2 lines se niche na jaye 
    // tab tak scrollTop coordinate ko force karke 0 rakha jayega.
    if (wordRelativeTop - scrollerPaddingTop >= lineHeight * 1.8) {
        // Sirf utna hi scroll karein jitna cursor niche gaya hai takki upar ki baseline chup jaye
        parentScroller.scrollTop = (wordRelativeTop - scrollerPaddingTop) - lineHeight;
    } else if (wordRelativeTop - scrollerPaddingTop < lineHeight) {
        // Agar backspace dabakar pehli line par wapas aayein to reset position to zero
        parentScroller.scrollTop = 0;
    }
}
function calculateRealtimeMetrics() {
    let elapsed = state.targetDuration - state.timerRemaining;
    if (elapsed <= 0) elapsed = 1;

    // Standard metric syntax: 5 characters equivalent to 1 normalized word unit
    let computedWpm = Math.round((state.countCorrectChars / 5) / (elapsed / 60));
    let totalAttempts = state.countCorrectChars + state.countWrongChars;
    let computedAcc = totalAttempts > 0 ? Math.round((state.countCorrectChars / totalAttempts) * 100) : 100;

    document.getElementById('hud-wpm').textContent = computedWpm;
    document.getElementById('hud-acc').textContent = `${computedAcc}%`;

    return { wpm: computedWpm, acc: computedAcc };
}

function terminateSessionCycle() {
    clearInterval(state.timerEngineInstance);
    state.isExecuting = false;
    
    let finalMetrics = calculateRealtimeMetrics();
    persistMetrics(finalMetrics.wpm, finalMetrics.acc);
    
    // ==========================================================================
    // PERSISTENT BOTTOM BOARD DATA POPULATION
    // ==========================================================================
    document.getElementById('res-wpm').textContent = finalMetrics.wpm;
    document.getElementById('res-acc').textContent = `${finalMetrics.acc}%`;
    document.getElementById('res-chars').textContent = state.countCorrectChars;
    document.getElementById('res-errors').textContent = state.countWrongChars;
    
    executeCelebrationMatrix();
    showToast(`Session Logged! View details below.`);
    
    // Automatic system reset (Upar ka input box khali ho jayega par niche ka score freeze rahega)
    setTimeout(() => {
        abortSessionCycle();
        loadParagraphTrack();
    }, 1500);
}

function abortSessionCycle() {
    clearInterval(state.timerEngineInstance);
    state.isExecuting = false;
    state.indexPointer = 0;
    document.getElementById('hud-wpm').textContent = "0";
    document.getElementById('hud-acc').textContent = "100%";
    document.getElementById('typing-input-terminal').value = "";
}

/* ==========================================================================
   LEADERBOARD AND RENDER ENGINE
   ========================================================================== */
function renderLeaderboard() {
    const targetBody = document.getElementById('leaderboard-rows');
    if(!targetBody) return;
    
    targetBody.innerHTML = "";
    
    // Virtual items merged with local historical data
    let defaults = [
        { wpm: 114, accuracy: 99, timestamp: "2026-07-18T10:00:00Z" },
        { wpm: 92, accuracy: 96, timestamp: "2026-07-18T11:30:00Z" }
    ];

    let united = [...state.metricsHistory, ...defaults].sort((a,b) => b.wpm - a.wpm);

    united.forEach((row, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td><b>#${index + 1}</b></td>
            <td>NeuralOperator_${Math.floor(Math.random()*900 + 100)}</td>
            <td style="color:var(--accent-glow)">${row.wpm} WPM</td>
            <td>${row.accuracy}%</td>
            <td>${row.timestamp.split('T')[0]}</td>
        `;
        targetBody.appendChild(tr);
    });
}

/* ==========================================================================
   GRAPHICS LAYER, PARTICLES AND CELEBRATIONS MATRIX
   ========================================================================== */
function setupCanvasBackground() {
    const canvas = document.getElementById('bg-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    let particles = [];
    for(let i=0; i<35; i++) {
        particles.push({
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
            radius: Math.random() * 3 + 1,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4
        });
    }

    function animateLayer() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--char-default').trim() + "22";
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if(p.x < 0 || p.x > canvasWidth) p.vx *= -1;
            if(p.y < 0 || p.y > canvasHeight) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animateLayer);
    }
    animateLayer();

    // Mouse Tracking Interpolation for Glowing Background Interactions
    window.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
        document.documentElement.style.setProperty('--my', `${e.clientY}px`);
        
        const glow = document.getElementById('cursor-glow');
        if(glow) {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        }
    });
}

function executeCelebrationMatrix() {
    const layer = document.getElementById('celebration-canvas');
    if(!layer) return;
    layer.innerHTML = "";
    
    for(let i=0; i<100; i++) {
        let flake = document.createElement('div');
        flake.style.position = 'fixed';
        flake.style.width = '8px';
        flake.style.height = '8px';
        flake.style.backgroundColor = Math.random() > 0.5 ? 'var(--accent-glow)' : 'var(--char-correct)';
        flake.style.left = Math.random() * 100 + 'vw';
        flake.style.top = '-10px';
        flake.style.borderRadius = '50%';
        flake.style.zIndex = '9999';
        flake.style.pointerEvents = 'none';
        
        // Pure Web Animations API Execution Engine Layer
        layer.appendChild(flake);
        
        flake.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(105vh) translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 2000,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
        });
    }
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    if(!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'card-glass';
    toast.style.padding = '0.75rem 1.5rem';
    toast.style.marginTop = '0.5rem';
    toast.style.borderLeft = '4px solid var(--accent-glow)';
    toast.style.fontSize = '0.9rem';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
    toast.textContent = msg;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.animate([
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0.9)' }
        ], { duration: 300 }).onfinish = () => toast.remove();
    }, 3500);
}


