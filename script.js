document.addEventListener('DOMContentLoaded', () => {
    // Add theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Theme toggle event listener
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Initialize DOM elements
    const reasonModal = document.getElementById('reason-modal');
    const reasonElement = document.getElementById('reason');
    const generateBtn = document.getElementById('generate-btn');
    const newReasonInput = document.getElementById('new-reason');
    const addButton = document.getElementById('add-btn');
    const currentReasonElement = document.getElementById('current-reason');
    const totalReasons = document.getElementById('total-reasons');
    const prevReasonBtn = document.getElementById('prev-reason');
    const nextReasonBtn = document.getElementById('next-reason');
    const dateModal = document.getElementById('date-modal');
    const nextDateInput = document.getElementById('next-date');
    const yourLocationInput = document.getElementById('your-location');
    const theirLocationInput = document.getElementById('their-location');
    const saveDateBtn = document.getElementById('save-date-btn');
    const setDateBtn = document.getElementById('set-date-btn');
    const secretModal = document.getElementById('secret-modal');
    const secretInput = document.getElementById('secret-input');
    const countdownDisplay = document.getElementById('countdown-display').querySelector('.value');
    const milesDisplay = document.getElementById('miles-display').querySelector('.value');
    const closeBtns = document.querySelectorAll('.close-btn');
    
    // Add relationship start date input
    const dateSetupSection = document.querySelector('.date-setup');
    const startDateContainer = document.createElement('div');
    startDateContainer.classList.add('start-date-container');
    startDateContainer.innerHTML = `
        <h3>Relationship Timeline</h3>
        <label for="relationship-start-date">When did your relationship begin?</label>
        <input type="date" id="relationship-start-date" class="date-input">
    `;
    dateSetupSection.insertBefore(startDateContainer, saveDateBtn);
    
    // Get the relationship start date input element
    const relationshipStartDate = document.getElementById('relationship-start-date');
    
    // Load saved start date if available
    const savedStartDate = localStorage.getItem('relationshipStartDate');
    if (savedStartDate) {
        relationshipStartDate.value = savedStartDate;
    }
    
    // Function to safely get item from localStorage
    function getLocalStorageItem(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error(`Error reading from localStorage: ${error}`);
            return defaultValue;
        }
    }

    // Function to safely set item in localStorage
    function setLocalStorageItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`Error writing to localStorage: ${error}`);
            return false;
        }
    }

    // Initialize default reasons with error handling
    let reasons = [];
    try {
        reasons = getLocalStorageItem('loveReasons', []);
        if (!Array.isArray(reasons) || reasons.length === 0) {
            reasons = [
        // Personality traits (50)
        "Your kindness shines even from miles away",
        "The way you stay positive despite the distance between us",
        "How your voice instantly calms me during our calls",
        "Your incredible patience with our long-distance situation",
        "The way you make me laugh even on our worst days apart",
        "How you always send me good morning texts despite the time difference",
        "Your determination to make our relationship work regardless of distance",
        "The way you remember little details about my day",
        "Your thoughtfulness in every message you send",
        "How you always know when I need to hear your voice",
        "The comfort your texts bring me when I'm feeling alone",
        "Your ability to make me feel loved from so far away",
        "The way you inspire me to be better every day",
        "How you never let the distance diminish our connection",
        "Your incredible strength through all our challenges",
        "The way you listen to me rant about my day without judgment",
        "How you always find time for us despite your busy schedule",
        "Your honesty even when it's difficult to communicate",
        "The way you respect my feelings even from afar",
        "How you never go to bed angry despite our occasional disagreements",
        "Your ability to make even a simple text feel special",
        "The way you celebrate my small victories as if they were your own",
        "How you comfort me during tough times with just your words",
        "Your unwavering loyalty despite the miles between us",
        "The way you make ordinary moments extraordinary",
        "How you keep our conversations interesting every day",
        "Your creativity in finding ways to connect despite the distance",
        "The way you share your world with me through photos and videos",
        "How you're always thinking of new virtual date ideas",
        "Your openness about your feelings and thoughts",
        "The way you make me feel understood even when we're apart",
        "How you never make me feel guilty about not being physically present",
        "Your ability to sense when something's wrong over text",
        "The way you encourage me to pursue my dreams",
        "How you respect my personal space while still being present",
        "Your generosity with your time and attention",
        "The way you support my goals and ambitions from afar",
        "How you always find the silver lining in our separation",
        "Your compassion when I'm having a difficult day",
        "The way you appreciate the little things I do for you",
        "How you never let a day pass without saying 'I love you'",
        "Your sense of adventure that makes me excited for our future",
        "The way you light up during our video calls",
        "How you handle misunderstandings with grace and maturity",
        "Your ability to make me feel like the most important person in the world",
        "The way you remember our important dates and milestones",
        "How you trust me completely despite the distance",
        "Your emotional intelligence in navigating our long-distance challenges",
        "The way you make our relationship a priority every day",
        "How your values align with mine even though we're from different places",

        // Physical traits & mannerisms (30)
        "The way your eyes crinkle when you smile during our video calls",
        "How you twirl your hair when you're focusing during our study sessions",
        "Your adorable sleepy face during our late-night calls",
        "The way you bite your lip when you're thinking deeply",
        "How your face lights up when you talk about things you're passionate about",
        "The sound of your laugh that makes my day better instantly",
        "Your expressive hand gestures during our video chats",
        "The way you scrunch your nose when you're confused",
        "How you always fix your hair before answering my video calls",
        "Your adorable concentration face when you're reading my messages",
        "The way you cover your mouth when you laugh too hard",
        "How peaceful you look when you fall asleep during our calls",
        "Your contagious smile that I can feel through the screen",
        "The way you get excited and speak faster about things you love",
        "How you fidget with objects around you during our conversations",
        "Your soothing voice that I could listen to for hours",
        "The way your eyes tell me you miss me without saying a word",
        "How you always wear the necklace I gave you during our calls",
        "Your cute morning hair in our early video chats",
        "The way you rest your chin on your hand when listening to me",
        "How you always snuggle with the plushie I sent you",
        "Your gentle way of speaking when we're having deep conversations",
        "The way you occasionally glance away shyly during video calls",
        "How your entire face smiles, not just your mouth",
        "Your perfect timing with reactions to my stories",
        "The way you hold up things to the camera to show me",
        "How you tilt your head when you're curious about something",
        "Your graceful movements even through a webcam",
        "The way you hug your pillow when you miss me during calls",
        "How you always look your best for our virtual dates",

        // Shared memories (40)
        "The first time we stayed up all night just talking on the phone",
        "When we accidentally wore matching outfits during our video call",
        "How we both cried watching the same movie while on the phone",
        "Our virtual cooking date where we both made the same recipe",
        "The time we sent each other the exact same gift without planning it",
        "When you gave me a virtual tour of your hometown",
        "Our first 'good morning' and 'good night' routine that we still maintain",
        "The care package you sent that arrived on the perfect day",
        "When we both watched the sunrise/sunset simultaneously from different places",
        "Our failed attempt at playing online games that ended in laughter",
        "The time we both got caught in the rain during our video call",
        "How we celebrated your birthday through a screen but it still felt special",
        "Our virtual coffee dates every Sunday morning",
        "The handwritten letter that made me cry happy tears",
        "When we first shared our playlists and discovered our similar music taste",
        "The time you fell asleep during our call and I just watched you peacefully",
        "Our inside jokes that nobody else understands",
        "The virtual double date with our friends that went surprisingly well",
        "How we both ordered the same takeout food to pretend we were dining together",
        "The time we stargazed together while on the phone",
        "Our holiday traditions we've created despite being apart",
        "When we first said 'I love you' and the call went silent with emotion",
        "The surprise online shopping session where you helped me pick out clothes",
        "How we explored Google Earth together visiting places we want to travel to",
        "The time we both dressed up formally for our special virtual date night",
        "Our 'show and tell' moments where we share new things from our lives",
        "When you gave me a virtual tour of your new apartment/room",
        "The time we both got emotional watching our relationship photo slideshow",
        "Our simultaneous workout sessions to motivate each other",
        "The virtual museum tours we've taken together",
        "How we read the same book together and discussed it",
        "The time we tried to bake the same cake and compared results",
        "Our habit of sending each other songs that remind us of each other",
        "When we used online drawing tools to create art together",
        "The time we attempted a long-distance dance lesson",
        "How we've created playlists documenting different phases of our relationship",
        "The virtual scavenger hunts we've created for each other",
        "Our shared online calendar marking days until we meet again",
        "The time we watched the same concert livestream together",
        "Our tradition of taking screenshots during funny moments in our calls",

        // Future plans & dreams (35)
        "The apartment we dream of sharing one day",
        "Our bucket list of places we want to travel together",
        "The future pet we plan to adopt",
        "How we talk about the garden we'll plant at our future home",
        "Our plans for the first meal we'll cook together in person",
        "The future holiday traditions we want to create",
        "How we discuss names for our future children",
        "The home decorations we've already picked out together",
        "Our plans for the day when distance is no longer between us",
        "The restaurant we want to visit on our first real date",
        "How we've planned our future morning routines together",
        "The movie marathon we'll have during our first weekend together",
        "Our plans for introducing each other to our favorite local spots",
        "The hike we want to take once we're in the same place",
        "How we talk about the first thing we'll do when we see each other",
        "The road trips we've mapped out for our future",
        "Our plans for the first holiday we'll spend together",
        "The songs we want to dance to together in person",
        "How we discuss where we want to settle down eventually",
        "Our future lazy Sundays we've already planned out",
        "The volunteer work we want to do together",
        "How we talk about growing old together",
        "The business idea we might pursue together someday",
        "Our plans for the perfect date night once distance isn't a factor",
        "The coffee shop where we plan to have our first in-person coffee date",
        "How we discuss our future home office setup",
        "The bookshelf we want to build together with all our favorite books",
        "Our plans for the garden we'll grow together",
        "The board game collection we plan to build",
        "How we talk about teaching each other our favorite hobbies in person",
        "Our dream of watching a sunset on the beach together",
        "The local festivals and events we plan to attend together",
        "How we discuss the first piece of furniture we'll buy together",
        "The DIY projects we've bookmarked to do together someday",
        "Our shared vision of hosting dinner parties in our future home",

        // Daily connections (30)
        "How we never miss our goodnight call despite time zones",
        "The way we text each other random thoughts throughout the day",
        "Our 'morning coffee' video chats before work/school",
        "The photos you send of ordinary moments in your day",
        "How we share our meals through pictures",
        "The way we schedule our days around our call times",
        "Our habit of sending each other links to interesting articles/videos",
        "How we both keep journals of things to tell each other",
        "The voice messages you send when you're too busy to call",
        "Our virtual study/work sessions where we're just present together",
        "The way we shop online together using screen sharing",
        "How we watch TV shows simultaneously and text our reactions",
        "Our virtual movie nights with synchronized play",
        "The way we plan our weekends to maximize our time together",
        "How we share snippets of conversations we had with others",
        "The way we check in during our lunch breaks",
        "Our tradition of sending Sunday recap emails of our week",
        "How we've learned to be comfortable with silence during video calls",
        "The screenshots of funny things we want to share with each other",
        "Our co-working video calls when we both have projects to finish",
        "The way we text each other during meetings/classes",
        "How we've developed a habit of narrating our cooking process to each other",
        "Our virtual 'commute' calls when we're heading to work/school",
        "The way we say 'hello' to each other's friends/family through video",
        "How we virtually 'tuck each other in' at night",
        "The shared digital calendar we use to track our schedules",
        "Our daily tradition of sharing one good thing that happened",
        "How we send each other weather updates from our locations",
        "The virtual background tours of any new places we visit",
        "Our habit of sending each other outfits for approval before important events",

        // Long-distance specifics (35)
        "How our relationship has grown stronger despite the miles between us",
        "The way we've mastered different time zones",
        "Our ability to sense each other's moods through text",
        "The miles between us that seem smaller with each passing day",
        "How we've learned to communicate better because of the distance",
        "The way we appreciate our time together more because it's limited",
        "Our creative solutions to celebrate holidays apart",
        "How we've developed deeper emotional intimacy due to our distance",
        "The way we've grown more independent while still growing together",
        "Our perfect balance of togetherness and personal space",
        "How we never let technology issues ruin our time together",
        "The way we've learned each other's communication styles so well",
        "Our ability to make the most of different time zones",
        "How we keep track of each other's busy schedules across distance",
        "The countdown app we both check every day until we meet",
        "Our collection of screenshots from all our video calls",
        "How we've mastered the art of sending perfectly timed care packages",
        "The way we include each other in family events through video",
        "Our shared digital photo album that we both add to regularly",
        "How we write letters despite having faster communication methods",
        "The way we've made our relationship work despite everyone's doubts",
        "Our understanding of each other's need for local friends and support",
        "How we celebrate relationship milestones in creative long-distance ways",
        "The multiple forms of communication we use throughout the day",
        "Our strategy for handling missed calls and scheduling conflicts",
        "How we handle holidays spent apart with special traditions",
        "The way we've gotten to know each other's surrounding through virtual tours",
        "Our mutual respect for each other's local commitments",
        "How we share our cultural differences more intentionally",
        "The distance that's made us more intentional about our communication",
        "Our mutual commitment to closing the distance someday",
        "How we each know the other's neighborhood through stories and videos",
        "The way we support each other's independent growth while apart",
        "Our ability to handle emergencies despite being far apart",
        "How the distance has clarified what truly matters in our relationship",

        // Missing each other (20)
        "The way my heart still races when your name appears on my phone",
        "How I save special stories to tell you on our calls",
        "The empty feeling when I experience something amazing without you there",
        "How I catch myself turning to tell you something before remembering you're not here",
        "The way I still smell your perfume/cologne on the gift you sent me",
        "How I imagine your reactions to things I see throughout my day",
        "The way I keep screenshots of your smile as my phone background",
        "How I've memorized the sound of your laugh to replay when I miss you",
        "The way I sometimes hug the pillow you sent me when missing you gets tough",
        "How I walk past places we've talked about visiting together and imagine you there",
        "The way I rehearse things to tell you throughout my day",
        "How I feel your absence most strongly during sunset/sunrise",
        "The way I touch the screen during our video calls wishing I could touch you",
        "How I sometimes wake up and check my phone hoping for a message from you",
        "The way certain songs make me stop everything because they remind me of you",
        "How I keep a journal of things I want to experience with you someday",
        "The way I sleep with my phone nearby in case you call",
        "How I look for gifts for you wherever I go",
        "The way I automatically smile when I get a notification from you",
        "How empty my hand feels without yours to hold",

        // Virtual connection (30)
        "The way our Netflix Party nights make me feel close to you",
        "How we've developed our own texting shorthand",
        "The virtual flowers you send on special occasions",
        "How we use screen sharing to shop for each other",
        "The way we play online games together to feel connected",
        "Our virtual dinner dates with the same menu",
        "How we leave voice messages for each other to wake up to",
        "The way we use the same app to draw together",
        "Our shared Spotify playlists that tell our story",
        "How we watch YouTube videos together using synchronized play",
        "The way we send each other songs that describe our feelings",
        "Our habit of rating each other's outfits over video call",
        "How we keep a shared digital journal of our relationship",
        "The way we have virtual coffee dates with our favorite mugs",
        "Our online multiplayer worlds where we build things together",
        "How we send each other links to learn about each other's interests",
        "The way we take virtual walks together using video calls",
        "Our shared Pinterest boards for future plans",
        "How we use apps to track each other's flights when traveling",
        "The way we binge the same shows so we can discuss them",
        "Our virtual karaoke nights that make our neighbors question us",
        "How we keep a shared digital calendar marking important dates",
        "The way we play 20 questions to learn new things about each other",
        "Our digital book club where we read the same books",
        "How we do simultaneous grocery shopping while on video calls",
        "The way we leave surprise messages in shared documents",
        "Our virtual workout sessions that keep us motivated",
        "How we send each other virtual care packages through food delivery",
        "The way we share our daily playlists to feel connected",
        "Our habit of falling asleep on video calls to feel less alone",

        // Appreciation from afar (30)
        "How you remember to check if I've eaten during busy days",
        "The way you notice when I'm quieter than usual over text",
        "Your thoughtful scheduled messages when you know you'll be busy",
        "How you send me your favorite local snacks that I can't get here",
        "The way you remember the names of my coworkers/friends",
        "How you've learned about my city just to understand my daily life better",
        "The playlists you make for different parts of my day",
        "How you keep track of my big work/school deadlines",
        "The way you've researched my favorite local restaurants for delivery surprises",
        "How you always ask about my family by name",
        "The way you create digital adventures for us when I'm feeling low",
        "How you've learned the weather patterns in my city",
        "The thoughtful voice messages that arrive exactly when I need them",
        "How you've memorized my schedule to know the best times to call",
        "The way you remember details from stories I told weeks ago",
        "How you've learned what delivery services work in my area",
        "The way you send me articles related to my interests",
        "How you keep a list of movies/shows I mention wanting to watch",
        "The way you suggest songs based on how my day is going",
        "How you know exactly what kind of day I've had just from a text",
        "The virtual 'care packages' of links and videos you send",
        "How you've researched events in my area to suggest weekend activities",
        "The way you send me photos of things that made you think of me",
        "How you encourage me to maintain local friendships",
        "The way you remember which of my plants need watering",
        "How you check in on me during bad weather in my area",
        "The way you send me links to local news from my area",
        "How you time your good morning texts to my time zone",
        "The way you've learned which grocery store is closest to my home",
        "How you never complain about the time difference"
    ];
            setLocalStorageItem('loveReasons', reasons);
        }
    } catch (error) {
        console.error('Error initializing reasons:', error);
        reasons = [
            // Personality traits (50)
            "Your kindness shines even from miles away",
            "The way you stay positive despite the distance between us",
            "How your voice instantly calms me during our calls",
            "Your incredible patience with our long-distance situation",
            "The way you make me laugh even on our worst days apart",
            "How you always send me good morning texts despite the time difference",
            "Your determination to make our relationship work regardless of distance",
            "The way you remember little details about my day",
            "Your thoughtfulness in every message you send",
            "How you always know when I need to hear your voice",
            "The comfort your texts bring me when I'm feeling alone",
            "Your ability to make me feel loved from so far away",
            "The way you inspire me to be better every day",
            "How you never let the distance diminish our connection",
            "Your incredible strength through all our challenges",
            "The way you listen to me rant about my day without judgment",
            "How you always find time for us despite your busy schedule",
            "Your honesty even when it's difficult to communicate",
            "The way you respect my feelings even from afar",
            "How you never go to bed angry despite our occasional disagreements",
            "Your ability to make even a simple text feel special",
            "The way you celebrate my small victories as if they were your own",
            "How you comfort me during tough times with just your words",
            "Your unwavering loyalty despite the miles between us",
            "The way you make ordinary moments extraordinary",
            "How you keep our conversations interesting every day",
            "Your creativity in finding ways to connect despite the distance",
            "The way you share your world with me through photos and videos",
            "How you're always thinking of new virtual date ideas",
            "Your openness about your feelings and thoughts",
            "The way you make me feel understood even when we're apart",
            "How you never make me feel guilty about not being physically present",
            "Your ability to sense when something's wrong over text",
            "The way you encourage me to pursue my dreams",
            "How you respect my personal space while still being present",
            "Your generosity with your time and attention",
            "The way you support my goals and ambitions from afar",
            "How you always find the silver lining in our separation",
            "Your compassion when I'm having a difficult day",
            "The way you appreciate the little things I do for you",
            "How you never let a day pass without saying 'I love you'",
            "Your sense of adventure that makes me excited for our future",
            "The way you light up during our video calls",
            "How you handle misunderstandings with grace and maturity",
            "Your ability to make me feel like the most important person in the world",
            "The way you remember our important dates and milestones",
            "How you trust me completely despite the distance",
            "Your emotional intelligence in navigating our long-distance challenges",
            "The way you make our relationship a priority every day",
            "How your values align with mine even though we're from different places",

            // Physical traits & mannerisms (30)
            "The way your eyes crinkle when you smile during our video calls",
            "How you twirl your hair when you're focusing during our study sessions",
            "Your adorable sleepy face during our late-night calls",
            "The way you bite your lip when you're thinking deeply",
            "How your face lights up when you talk about things you're passionate about",
            "The sound of your laugh that makes my day better instantly",
            "Your expressive hand gestures during our video chats",
            "The way you scrunch your nose when you're confused",
            "How you always fix your hair before answering my video calls",
            "Your adorable concentration face when you're reading my messages",
            "The way you cover your mouth when you laugh too hard",
            "How peaceful you look when you fall asleep during our calls",
            "Your contagious smile that I can feel through the screen",
            "The way you get excited and speak faster about things you love",
            "How you fidget with objects around you during our conversations",
            "Your soothing voice that I could listen to for hours",
            "The way your eyes tell me you miss me without saying a word",
            "How you always wear the necklace I gave you during our calls",
            "Your cute morning hair in our early video chats",
            "The way you rest your chin on your hand when listening to me",
            "How you always snuggle with the plushie I sent you",
            "Your gentle way of speaking when we're having deep conversations",
            "The way you occasionally glance away shyly during video calls",
            "How your entire face smiles, not just your mouth",
            "Your perfect timing with reactions to my stories",
            "The way you hold up things to the camera to show me",
            "How you tilt your head when you're curious about something",
            "Your graceful movements even through a webcam",
            "The way you hug your pillow when you miss me during calls",
            "How you always look your best for our virtual dates",

            // Shared memories (40)
            "The first time we stayed up all night just talking on the phone",
            "When we accidentally wore matching outfits during our video call",
            "How we both cried watching the same movie while on the phone",
            "Our virtual cooking date where we both made the same recipe",
            "The time we sent each other the exact same gift without planning it",
            "When you gave me a virtual tour of your hometown",
            "Our first 'good morning' and 'good night' routine that we still maintain",
            "The care package you sent that arrived on the perfect day",
            "When we both watched the sunrise/sunset simultaneously from different places",
            "Our failed attempt at playing online games that ended in laughter",
            "The time we both got caught in the rain during our video call",
            "How we celebrated your birthday through a screen but it still felt special",
            "Our virtual coffee dates every Sunday morning",
            "The handwritten letter that made me cry happy tears",
            "When we first shared our playlists and discovered our similar music taste",
            "The time you fell asleep during our call and I just watched you peacefully",
            "Our inside jokes that nobody else understands",
            "The virtual double date with our friends that went surprisingly well",
            "How we both ordered the same takeout food to pretend we were dining together",
            "The time we stargazed together while on the phone",
            "Our holiday traditions we've created despite being apart",
            "When we first said 'I love you' and the call went silent with emotion",
            "The surprise online shopping session where you helped me pick out clothes",
            "How we explored Google Earth together visiting places we want to travel to",
            "The time we both dressed up formally for our special virtual date night",
            "Our 'show and tell' moments where we share new things from our lives",
            "When you gave me a virtual tour of your new apartment/room",
            "The time we both got emotional watching our relationship photo slideshow",
            "Our simultaneous workout sessions to motivate each other",
            "The virtual museum tours we've taken together",
            "How we read the same book together and discussed it",
            "The time we tried to bake the same cake and compared results",
            "Our habit of sending each other songs that remind us of each other",
            "When we used online drawing tools to create art together",
            "The time we attempted a long-distance dance lesson",
            "How we've created playlists documenting different phases of our relationship",
            "The virtual scavenger hunts we've created for each other",
            "Our shared online calendar marking days until we meet again",
            "The time we watched the same concert livestream together",
            "Our tradition of taking screenshots during funny moments in our calls",

            // Future plans & dreams (35)
            "The apartment we dream of sharing one day",
            "Our bucket list of places we want to travel together",
            "The future pet we plan to adopt",
            "How we talk about the garden we'll plant at our future home",
            "Our plans for the first meal we'll cook together in person",
            "The future holiday traditions we want to create",
            "How we discuss names for our future children",
            "The home decorations we've already picked out together",
            "Our plans for the day when distance is no longer between us",
            "The restaurant we want to visit on our first real date",
            "How we've planned our future morning routines together",
            "The movie marathon we'll have during our first weekend together",
            "Our plans for introducing each other to our favorite local spots",
            "The hike we want to take once we're in the same place",
            "How we talk about the first thing we'll do when we see each other",
            "The road trips we've mapped out for our future",
            "Our plans for the first holiday we'll spend together",
            "The songs we want to dance to together in person",
            "How we discuss where we want to settle down eventually",
            "Our future lazy Sundays we've already planned out",
            "The volunteer work we want to do together",
            "How we talk about growing old together",
            "The business idea we might pursue together someday",
            "Our plans for the perfect date night once distance isn't a factor",
            "The coffee shop where we plan to have our first in-person coffee date",
            "How we discuss our future home office setup",
            "The bookshelf we want to build together with all our favorite books",
            "Our plans for the garden we'll grow together",
            "The board game collection we plan to build",
            "How we talk about teaching each other our favorite hobbies in person",
            "Our dream of watching a sunset on the beach together",
            "The local festivals and events we plan to attend together",
            "How we discuss the first piece of furniture we'll buy together",
            "The DIY projects we've bookmarked to do together someday",
            "Our shared vision of hosting dinner parties in our future home",

            // Daily connections (30)
            "How we never miss our goodnight call despite time zones",
            "The way we text each other random thoughts throughout the day",
            "Our 'morning coffee' video chats before work/school",
            "The photos you send of ordinary moments in your day",
            "How we share our meals through pictures",
            "The way we schedule our days around our call times",
            "Our habit of sending each other links to interesting articles/videos",
            "How we both keep journals of things to tell each other",
            "The voice messages you send when you're too busy to call",
            "Our virtual study/work sessions where we're just present together",
            "The way we shop online together using screen sharing",
            "How we watch TV shows simultaneously and text our reactions",
            "Our virtual movie nights with synchronized play",
            "The way we plan our weekends to maximize our time together",
            "How we share snippets of conversations we had with others",
            "The way we check in during our lunch breaks",
            "Our tradition of sending Sunday recap emails of our week",
            "How we've learned to be comfortable with silence during video calls",
            "The screenshots of funny things we want to share with each other",
            "Our co-working video calls when we both have projects to finish",
            "The way we text each other during meetings/classes",
            "How we've developed a habit of narrating our cooking process to each other",
            "Our virtual 'commute' calls when we're heading to work/school",
            "The way we say 'hello' to each other's friends/family through video",
            "How we virtually 'tuck each other in' at night",
            "The shared digital calendar we use to track our schedules",
            "Our daily tradition of sharing one good thing that happened",
            "How we send each other weather updates from our locations",
            "The virtual background tours of any new places we visit",
            "Our habit of sending each other outfits for approval before important events",

            // Long-distance specifics (35)
            "How our relationship has grown stronger despite the miles between us",
            "The way we've mastered different time zones",
            "Our ability to sense each other's moods through text",
            "The miles between us that seem smaller with each passing day",
            "How we've learned to communicate better because of the distance",
            "The way we appreciate our time together more because it's limited",
            "Our creative solutions to celebrate holidays apart",
            "How we've developed deeper emotional intimacy due to our distance",
            "The way we've grown more independent while still growing together",
            "Our perfect balance of togetherness and personal space",
            "How we never let technology issues ruin our time together",
            "The way we've learned each other's communication styles so well",
            "Our ability to make the most of different time zones",
            "How we keep track of each other's busy schedules across distance",
            "The countdown app we both check every day until we meet",
            "Our collection of screenshots from all our video calls",
            "How we've mastered the art of sending perfectly timed care packages",
            "The way we include each other in family events through video",
            "Our shared digital photo album that we both add to regularly",
            "How we write letters despite having faster communication methods",
            "The way we've made our relationship work despite everyone's doubts",
            "Our understanding of each other's need for local friends and support",
            "How we celebrate relationship milestones in creative long-distance ways",
            "The multiple forms of communication we use throughout the day",
            "Our strategy for handling missed calls and scheduling conflicts",
            "How we handle holidays spent apart with special traditions",
            "The way we've gotten to know each other's surrounding through virtual tours",
            "Our mutual respect for each other's local commitments",
            "How we share our cultural differences more intentionally",
            "The distance that's made us more intentional about our communication",
            "Our mutual commitment to closing the distance someday",
            "How we each know the other's neighborhood through stories and videos",
            "The way we support each other's independent growth while apart",
            "Our ability to handle emergencies despite being far apart",
            "How the distance has clarified what truly matters in our relationship",

            // Missing each other (20)
            "The way my heart still races when your name appears on my phone",
            "How I save special stories to tell you on our calls",
            "The empty feeling when I experience something amazing without you there",
            "How I catch myself turning to tell you something before remembering you're not here",
            "The way I still smell your perfume/cologne on the gift you sent me",
            "How I imagine your reactions to things I see throughout my day",
            "The way I keep screenshots of your smile as my phone background",
            "How I've memorized the sound of your laugh to replay when I miss you",
            "The way I sometimes hug the pillow you sent me when missing you gets tough",
            "How I walk past places we've talked about visiting together and imagine you there",
            "The way I rehearse things to tell you throughout my day",
            "How I feel your absence most strongly during sunset/sunrise",
            "The way I touch the screen during our video calls wishing I could touch you",
            "How I sometimes wake up and check my phone hoping for a message from you",
            "The way certain songs make me stop everything because they remind me of you",
            "How I keep a journal of things I want to experience with you someday",
            "The way I sleep with my phone nearby in case you call",
            "How I look for gifts for you wherever I go",
            "The way I automatically smile when I get a notification from you",
            "How empty my hand feels without yours to hold",

            // Virtual connection (30)
            "The way our Netflix Party nights make me feel close to you",
            "How we've developed our own texting shorthand",
            "The virtual flowers you send on special occasions",
            "How we use screen sharing to shop for each other",
            "The way we play online games together to feel connected",
            "Our virtual dinner dates with the same menu",
            "How we leave voice messages for each other to wake up to",
            "The way we use the same app to draw together",
            "Our shared Spotify playlists that tell our story",
            "How we watch YouTube videos together using synchronized play",
            "The way we send each other songs that describe our feelings",
            "Our habit of rating each other's outfits over video call",
            "How we keep a shared digital journal of our relationship",
            "The way we have virtual coffee dates with our favorite mugs",
            "Our online multiplayer worlds where we build things together",
            "How we send each other links to learn about each other's interests",
            "The way we take virtual walks together using video calls",
            "Our shared Pinterest boards for future plans",
            "How we use apps to track each other's flights when traveling",
            "The way we binge the same shows so we can discuss them",
            "Our virtual karaoke nights that make our neighbors question us",
            "How we keep a shared digital calendar marking important dates",
            "The way we play 20 questions to learn new things about each other",
            "Our digital book club where we read the same books",
            "How we do simultaneous grocery shopping while on video calls",
            "The way we leave surprise messages in shared documents",
            "Our virtual workout sessions that keep us motivated",
            "How we send each other virtual care packages through food delivery",
            "The way we share our daily playlists to feel connected",
            "Our habit of falling asleep on video calls to feel less alone",

            // Appreciation from afar (30)
            "How you remember to check if I've eaten during busy days",
            "The way you notice when I'm quieter than usual over text",
            "Your thoughtful scheduled messages when you know you'll be busy",
            "How you send me your favorite local snacks that I can't get here",
            "The way you remember the names of my coworkers/friends",
            "How you've learned about my city just to understand my daily life better",
            "The playlists you make for different parts of my day",
            "How you keep track of my big work/school deadlines",
            "The way you've researched my favorite local restaurants for delivery surprises",
            "How you always ask about my family by name",
            "The way you create digital adventures for us when I'm feeling low",
            "How you've learned the weather patterns in my city",
            "The thoughtful voice messages that arrive exactly when I need them",
            "How you've memorized my schedule to know the best times to call",
            "The way you remember details from stories I told weeks ago",
            "How you've learned what delivery services work in my area",
            "The way you send me articles related to my interests",
            "How you keep a list of movies/shows I mention wanting to watch",
            "The way you suggest songs based on how my day is going",
            "How you know exactly what kind of day I've had just from a text",
            "The virtual 'care packages' of links and videos you send",
            "How you've researched events in my area to suggest weekend activities",
            "The way you send me photos of things that made you think of me",
            "How you encourage me to maintain local friendships",
            "The way you remember which of my plants need watering",
            "How you check in on me during bad weather in my area",
            "The way you send me links to local news from my area",
            "How you time your good morning texts to my time zone",
            "The way you've learned which grocery store is closest to my home",
            "How you never complain about the time difference"
        ];
        setLocalStorageItem('loveReasons', reasons);
    }
    
    // Update total reasons count
    totalReasons.textContent = reasons.length;
    
    // Load meeting date and locations if available
    let nextMeetingDate = localStorage.getItem('nextMeetingDate') || '';
    let yourLocation = localStorage.getItem('yourLocation') || '';
    let theirLocation = localStorage.getItem('theirLocation') || '';
    
    if (nextMeetingDate) {
        nextDateInput.value = nextMeetingDate;
        updateCountdown(nextMeetingDate);
    }
    
    if (yourLocation) {
        yourLocationInput.value = yourLocation;
    }
    
    if (theirLocation) {
        theirLocationInput.value = theirLocation;
        
        // Calculate approximate distance if both locations are provided
        if (yourLocation) {
            calculateDistance(yourLocation, theirLocation);
        }
    }
    
    // Track current reason index
    let currentReasonIndex = 0;
    
    // Secret code detection
    let secretBuffer = '';
    const secretCode = 'aisha';
    const funnyCode = 'funny';
    
    // Function to display a random reason
    function displayRandomReason() {
        // Get random index
        currentReasonIndex = Math.floor(Math.random() * reasons.length);
        displayReasonByIndex(currentReasonIndex);
        
        // Show the modal
        reasonModal.classList.add('active');
    }
    
    // Function to display reason by index
    function displayReasonByIndex(index) {
        // Add animation effect
        reasonElement.style.opacity = 0;
        
        setTimeout(() => {
            if (reasons.length === 0) {
                reasonElement.textContent = "Add some reasons why you love her!";
                currentReasonElement.textContent = '0';
                totalReasons.textContent = '0';
            } else {
                // Ensure index is within bounds
                if (index < 0) index = reasons.length - 1;
                if (index >= reasons.length) index = 0;
                
                currentReasonIndex = index;
                reasonElement.textContent = reasons[currentReasonIndex];
                currentReasonElement.textContent = currentReasonIndex + 1;
                totalReasons.textContent = reasons.length;
            }
            
            // Fade back in
            reasonElement.style.opacity = 1;
        }, 300);
    }
    
    // Function to update countdown
    function updateCountdown(dateString) {
        if (!dateString) return;
        
        const meetingDate = new Date(dateString);
        const today = new Date();
        
        // Calculate days remaining
        const timeDiff = meetingDate.getTime() - today.getTime();
        const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        // Update display
        countdownDisplay.textContent = daysRemaining > 0 ? daysRemaining : 0;
    }
    
    // Function to calculate approximate distance between locations
    function calculateDistance(loc1, loc2) {
        // This is a very simplified calculation for demo purposes
        // In a real app, you would use a geocoding API 
        // For now, we'll use a random distance between 100-5000 miles
        const distance = Math.floor(Math.random() * 4900) + 100;
        milesDisplay.textContent = distance;
        
        // In the future, you could replace this with a real calculation:
        // const apiUrl = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${loc1}&destinations=${loc2}&key=YOUR_API_KEY`;
        // Then fetch the data and update the display
    }
    
    // Event Listeners
    
    // Global key detection for secret code
    document.addEventListener('keydown', (e) => {
        // Focus hidden input to capture keypresses
        secretInput.focus();
    });
    
    // Secret code detection
    secretInput.addEventListener('input', (e) => {
        secretBuffer += e.data.toLowerCase();
        
        // Keep only the last 10 characters to prevent buffer overflow
        if (secretBuffer.length > 10) {
            secretBuffer = secretBuffer.substring(secretBuffer.length - 10);
        }
        
        // Check if the buffer contains the secret code
        if (secretBuffer.includes(secretCode)) {
            secretBuffer = ''; // Reset buffer
            showSecretModal();
        } else if (secretBuffer.includes(funnyCode)) {
            secretBuffer = ''; // Reset buffer
            showFunnyModal();
        }
    });
    
    // Show random reason
    generateBtn.addEventListener('click', displayRandomReason);
    
    // Navigate between reasons
    prevReasonBtn.addEventListener('click', () => {
        displayReasonByIndex(currentReasonIndex - 1);
    });
    
    nextReasonBtn.addEventListener('click', () => {
        displayReasonByIndex(currentReasonIndex + 1);
    });
    
    // Show date modal
    setDateBtn.addEventListener('click', () => {
        dateModal.classList.add('active');
    });
    
    // Save meeting date and locations
    saveDateBtn.addEventListener('click', () => {
        try {
        const dateValue = nextDateInput.value;
        const startDate = document.getElementById('relationship-start-date').value;
        const yourLoc = yourLocationInput.value.trim();
        const theirLoc = theirLocationInput.value.trim();
        
        if (dateValue) {
                setLocalStorageItem('nextMeetingDate', dateValue);
            nextMeetingDate = dateValue;
            updateCountdown(dateValue);
        }
        
        if (startDate) {
                setLocalStorageItem('relationshipStartDate', startDate);
            if (document.getElementById('days-together')) {
                updateDashboardStats();
            }
        }
        
        if (yourLoc) {
                setLocalStorageItem('yourLocation', yourLoc);
            yourLocation = yourLoc;
        }
        
        if (theirLoc) {
                setLocalStorageItem('theirLocation', theirLoc);
            theirLocation = theirLoc;
        }
        
        if (yourLoc && theirLoc) {
            calculateDistance(yourLoc, theirLoc);
        }
        
        // Close modal
        dateModal.classList.remove('active');
            showToast('Date and location saved successfully!');
        } catch (error) {
            console.error('Error saving date:', error);
            showToast('Error saving date. Please try again.');
        }
    });
    
    // Add new reason functionality
    addButton.addEventListener('click', () => {
        const newReason = newReasonInput.value.trim();
        
        if (newReason) {
            // Add the new reason to the array
            reasons.push(newReason);
            
            // Save to local storage
            setLocalStorageItem('loveReasons', reasons);
            
            // Update counts
            totalReasons.textContent = reasons.length;
            
            // Clear the input
            newReasonInput.value = '';
            
            // Show a success message
            alert('Reason added successfully!');
            
            // Display the new reason
            currentReasonIndex = reasons.length - 1;
            displayReasonByIndex(currentReasonIndex);
        } else {
            alert('Please enter a reason before adding.');
        }
    });
    
    // Close modals when clicking close button
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });
    
    // Close modals when clicking outside of modal content
    window.addEventListener('click', (e) => {
        if (e.target === reasonModal) {
            closeAllModals();
        }
        if (e.target === dateModal) {
            closeAllModals();
        }
        if (e.target === secretModal) {
            closeAllModals();
        }
        if (e.target === memoriesModal) {
            closeAllModals();
        }
        if (e.target === connectModal) {
            closeAllModals();
        }
        if (e.target === milestonesModal) {
            closeAllModals();
        }
        if (e.target === galleryModal) {
            closeAllModals();
        }
    });
    
    // Handle Enter key in textarea
    newReasonInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addButton.click();
        }
    });
    
    // Keyboard navigation for reasons
    document.addEventListener('keydown', (e) => {
        if (reasonModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                prevReasonBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextReasonBtn.click();
            }
        }
    });
    
    // Animate floating hearts
    const hearts = document.querySelectorAll('.hearts span');
    hearts.forEach(heart => {
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
    });
    
    // Menu navigation elements
    const menuItems = document.querySelectorAll('.menu li a');
    const homeLink = menuItems[0]; // Home link
    
    // Function to highlight active menu item
    function setActiveMenuItem(activeElement) {
        // Remove active class from all menu items
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to the clicked item
        activeElement.classList.add('active');
    }
    
    // Set up menu item click handlers
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            setActiveMenuItem(this);
            
            // Handle specific actions for each menu item
            if (this === homeLink) {
                // Home - just reset to main view
                closeAllModals();
            }
        });
    });
    
    // Update existing menu links with better functionality:
    
    // Countdown link
    document.getElementById('countdown-link').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveMenuItem(e.target);
        dateModal.classList.add('active');
        
        // Focus the date input for better UX
        if (nextDateInput) {
            setTimeout(() => nextDateInput.focus(), 300);
        }
    });
    
    // Reasons link
    document.getElementById('reasons-link').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveMenuItem(e.target);
        
        // Display a random reason first
        currentReasonIndex = Math.floor(Math.random() * reasons.length);
        displayReasonByIndex(currentReasonIndex);
        
        // Show the modal
        reasonModal.classList.add('active');
    });
    
    // Memories link
    document.getElementById('memories-link').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveMenuItem(e.target);
        openModal('memories-modal');
        
        // Focus the memory title input for better UX
        if (memoryTitle) {
            setTimeout(() => memoryTitle.focus(), 300);
        }
    });
    
    // Connect link
    document.getElementById('connect-link').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveMenuItem(e.target);
        openModal('connect-modal');
        
        // Refresh events display each time the connect modal is opened
        renderEvents();
    });
    
    // Update countdown every day
    updateCountdown(nextMeetingDate);
    setInterval(() => {
        updateCountdown(nextMeetingDate);
    }, 86400000); // 24 hours
    
    // Show a welcome message
    reasonElement.textContent = "Click the button to see why I love you ❤️";

    // New DOM Elements for Memories and Connect modals
    const memoriesModal = document.getElementById('memories-modal');
    const connectModal = document.getElementById('connect-modal');
    const memoriesLink = document.getElementById('memories-link');
    const connectLink = document.getElementById('connect-link');
    
    // Memories functionality
    const memoryTitle = document.getElementById('memory-title');
    const memoryDescription = document.getElementById('memory-description');
    const memoryDate = document.getElementById('memory-date');
    const addMemoryBtn = document.getElementById('add-memory-btn');
    const memoriesListContainer = document.getElementById('memories-list-container');
    
    // Connect functionality
    const videocallTime = document.getElementById('videocall-time');
    const saveVideocallBtn = document.getElementById('save-videocall-btn');
    const loveLetter = document.getElementById('love-letter');
    const sendLetterBtn = document.getElementById('send-letter-btn');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const saveSongBtn = document.getElementById('save-song-btn');
    
    // Load memories from local storage
    let memories = JSON.parse(localStorage.getItem('loveMemories')) || [];
    
    // Load connection data from local storage
    let videocallSchedule = localStorage.getItem('videocallTime') || '';
    let savedLetter = localStorage.getItem('loveLetter') || '';
    let savedSongTitle = localStorage.getItem('songTitle') || '';
    let savedSongArtist = localStorage.getItem('songArtist') || '';
    
    // Set initial values
    if (videocallSchedule) {
        videocallTime.value = videocallSchedule;
    }
    
    if (savedLetter) {
        loveLetter.value = savedLetter;
    }
    
    if (savedSongTitle) {
        songTitle.value = savedSongTitle;
    }
    
    if (savedSongArtist) {
        songArtist.value = savedSongArtist;
    }
    
    // Function to render memories list
    function renderMemories() {
        if (memories.length === 0) {
            memoriesListContainer.innerHTML = '<div class="no-memories-message">Add your first memory to start your collection</div>';
            return;
        }
        
        // Sort memories by date (most recent first)
        memories.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Clear container
        memoriesListContainer.innerHTML = '';
        
        // Add memories
        memories.forEach((memory, index) => {
            const memoryCard = document.createElement('div');
            memoryCard.classList.add('memory-card');
            
            const formattedDate = new Date(memory.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            memoryCard.innerHTML = `
                <h4>${memory.title}</h4>
                <span class="memory-date">${formattedDate}</span>
                <p>${memory.description}</p>
                <button class="delete-memory" data-index="${index}">Delete</button>
            `;
            
            memoriesListContainer.appendChild(memoryCard);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-memory').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                memories.splice(index, 1);
                localStorage.setItem('loveMemories', JSON.stringify(memories));
                renderMemories();
            });
        });
    }
    
    // Render memories on initial load
    renderMemories();
    
    // Add new memory
    addMemoryBtn.addEventListener('click', () => {
        const title = memoryTitle.value.trim();
        const description = memoryDescription.value.trim();
        const date = memoryDate.value;
        
        if (!title || !description || !date) {
            alert('Please fill in all fields');
            return;
        }
        
        // Add new memory
        memories.push({
            title,
            description,
            date
        });
        
        // Save to local storage
        localStorage.setItem('loveMemories', JSON.stringify(memories));
        
        // Clear form
        memoryTitle.value = '';
        memoryDescription.value = '';
        memoryDate.value = '';
        
        // Update display
        renderMemories();
        
        // Show success message
        alert('Memory added successfully!');
    });
    
    // Save video call time
    saveVideocallBtn.addEventListener('click', () => {
        const time = videocallTime.value;
        if (time) {
            localStorage.setItem('videocallTime', time);
            alert('Video call scheduled!');
        } else {
            alert('Please select a date and time');
        }
    });
    
    // Save love letter
    sendLetterBtn.addEventListener('click', () => {
        const letter = loveLetter.value.trim();
        if (letter) {
            localStorage.setItem('loveLetter', letter);
            alert('Love letter saved successfully!');
        } else {
            alert('Please write a letter before saving');
        }
    });
    
    // Save song
    saveSongBtn.addEventListener('click', () => {
        const title = songTitle.value.trim();
        const artist = songArtist.value.trim();
        
        if (title && artist) {
            localStorage.setItem('songTitle', title);
            localStorage.setItem('songArtist', artist);
            alert('Song saved successfully!');
        } else {
            alert('Please enter both song title and artist');
        }
    });
    
    // Menu navigation for memories and connect
    memoriesLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('memories-modal');
    });
    
    connectLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('connect-modal');
    });
    
    // After existing DOM elements for connect features
    const videoPlatform = document.getElementById('video-platform');
    const meetingLink = document.getElementById('meeting-link');
    const robloxTime = document.getElementById('roblox-time');
    const robloxGame = document.getElementById('roblox-game');
    const yourRoblox = document.getElementById('your-roblox');
    const theirRoblox = document.getElementById('their-roblox');
    const saveRobloxBtn = document.getElementById('save-roblox-btn');
    const eventsContainer = document.getElementById('events-container');

    // Load scheduled events
    let scheduledEvents = JSON.parse(localStorage.getItem('scheduledEvents')) || [];

    // Set initial values for connection fields
    let savedVideoPlatform = localStorage.getItem('videoPlatform') || 'zoom';
    let savedMeetingLink = localStorage.getItem('meetingLink') || '';
    let savedYourRoblox = localStorage.getItem('yourRoblox') || '';
    let savedTheirRoblox = localStorage.getItem('theirRoblox') || '';

    // Set initial field values
    if (savedVideoPlatform) {
        videoPlatform.value = savedVideoPlatform;
    }

    if (savedMeetingLink) {
        meetingLink.value = savedMeetingLink;
    }

    if (savedYourRoblox) {
        yourRoblox.value = savedYourRoblox;
    }

    if (savedTheirRoblox) {
        theirRoblox.value = savedTheirRoblox;
    }

    // Function to render scheduled events
    function renderEvents() {
        if (scheduledEvents.length === 0) {
            eventsContainer.innerHTML = '<div class="no-events-message">No events scheduled yet</div>';
            return;
        }
        
        // Sort events by date (closest first)
        scheduledEvents.sort((a, b) => new Date(a.time) - new Date(b.time));
        
        // Remove past events
        const now = new Date();
        scheduledEvents = scheduledEvents.filter(event => new Date(event.time) > now);
        
        // Save updated list
        localStorage.setItem('scheduledEvents', JSON.stringify(scheduledEvents));
        
        // Clear container
        eventsContainer.innerHTML = '';
        
        // Add events
        scheduledEvents.forEach((event, index) => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            
            let icon = '📅';
            if (event.type === 'videocall') icon = '🎥';
            if (event.type === 'roblox') icon = '🎮';
            
            const formattedDate = new Date(event.time).toLocaleString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            eventCard.innerHTML = `
                <div class="event-icon">${icon}</div>
                <div class="event-details">
                    <div class="event-title">${event.title}</div>
                    <div class="event-time">${formattedDate}</div>
                    <div class="event-description">${event.description}</div>
                </div>
                <button class="delete-event" data-index="${index}">Cancel</button>
            `;
            
            eventsContainer.appendChild(eventCard);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-event').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                scheduledEvents.splice(index, 1);
                localStorage.setItem('scheduledEvents', JSON.stringify(scheduledEvents));
                renderEvents();
            });
        });
    }

    // Render events on initial load
    renderEvents();

    // Save video call event
    saveVideocallBtn.addEventListener('click', () => {
        const time = videocallTime.value;
        const platform = videoPlatform.value;
        const link = meetingLink.value.trim();
        
        if (!time) {
            alert('Please select a date and time');
            return;
        }
        
        // Save field values
        localStorage.setItem('videoPlatform', platform);
        localStorage.setItem('meetingLink', link);
        
        // Create event object
        const newEvent = {
            type: 'videocall',
            title: `Video Call (${platform})`,
            time: time,
            description: link ? `Meeting link: ${link}` : `Platform: ${platform}`
        };
        
        // Add to scheduled events
        scheduledEvents.push(newEvent);
        localStorage.setItem('scheduledEvents', JSON.stringify(scheduledEvents));
        
        // Update display
        renderEvents();
        
        // Reset field
        videocallTime.value = '';
        
        // Show success message
        alert('Video call scheduled successfully!');
    });

    // Save Roblox play date
    saveRobloxBtn.addEventListener('click', () => {
        const time = robloxTime.value;
        const game = robloxGame.value.trim();
        const yourUsername = yourRoblox.value.trim();
        const theirUsername = theirRoblox.value.trim();
        
        if (!time) {
            alert('Please select a date and time');
            return;
        }
        
        if (!game) {
            alert('Please enter a game name');
            return;
        }
        
        // Save usernames
        if (yourUsername) {
            localStorage.setItem('yourRoblox', yourUsername);
        }
        
        if (theirUsername) {
            localStorage.setItem('theirRoblox', theirUsername);
        }
        
        // Create description
        let description = `Game: ${game}`;
        if (yourUsername && theirUsername) {
            description += ` | Players: ${yourUsername} & ${theirUsername}`;
        }
        
        // Create event object
        const newEvent = {
            type: 'roblox',
            title: `Roblox Play Date: ${game}`,
            time: time,
            description: description
        };
        
        // Add to scheduled events
        scheduledEvents.push(newEvent);
        localStorage.setItem('scheduledEvents', JSON.stringify(scheduledEvents));
        
        // Update display
        renderEvents();
        
        // Reset fields
        robloxTime.value = '';
        robloxGame.value = '';
        
        // Show success message
        alert('Roblox play date scheduled successfully!');
    });

    // Quick Action Buttons
    const quickMemoryBtn = document.getElementById('quick-memory-btn');
    const quickLetterBtn = document.getElementById('quick-letter-btn');
    const quickScheduleBtn = document.getElementById('quick-schedule-btn');
    const randomFactBtn = document.getElementById('random-fact-btn');

    // Long-distance relationship facts
    const ldFacts = [
        "Studies show that long-distance couples often have equal or better relationship quality than geographically close couples.",
        "Communication in long-distance relationships tends to be deeper and more meaningful.",
        "Long-distance couples often report feeling more committed to each other.",
        "Around 75% of engaged couples have been in a long-distance relationship at some point.",
        "Long-distance relationships have a 58% success rate when there's a plan to reunite.",
        "The average long-distance couple texts each other 343 times a week!",
        "Couples in long-distance relationships tend to idealize their partners more.",
        "On average, long-distance couples visit each other 1.5 times a month.",
        "Long-distance couples who make it report feeling more connected than before.",
        "Nearly 3.75 million married couples in the US are in a long-distance relationship.",
        "Research shows that 27% of long-distance couples have never lived near each other.",
        "Long-distance couples tend to share more personal feelings and thoughts.",
        "Research shows that playing online games together helps long-distance couples feel more connected.",
        "The most common reason for long-distance relationships is education (40%).",
        "Statistically, 70% of long-distance relationships fail when changes aren't planned.",
        "People in long-distance relationships remember their partner's words better than those in close relationships."
    ];

    // Quick Memory button functionality
    quickMemoryBtn.addEventListener('click', () => {
        // Show memories modal
        openModal('memories-modal');
        
        // Update active menu
        setActiveMenuItem(document.getElementById('memories-link'));
        
        // Focus the memory title input for better UX
        if (memoryTitle) {
            setTimeout(() => memoryTitle.focus(), 300);
        }
    });

    // Quick Letter button functionality
    quickLetterBtn.addEventListener('click', () => {
        // Show connect modal
        openModal('connect-modal');
        
        // Update active menu
        setActiveMenuItem(document.getElementById('connect-link'));
        
        // Focus the love letter textarea
        if (loveLetter) {
            setTimeout(() => loveLetter.focus(), 300);
        }
    });

    // Quick Schedule Play button functionality
    quickScheduleBtn.addEventListener('click', () => {
        // Show connect modal
        openModal('connect-modal');
        
        // Update active menu
        setActiveMenuItem(document.getElementById('connect-link'));
        
        // Focus the roblox game input
        if (robloxGame) {
            setTimeout(() => {
                robloxTime.focus();
                
                // Scroll to the Roblox section if needed
                const robloxSection = robloxGame.closest('.connection-method');
                if (robloxSection) {
                    robloxSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    });

    // Random Fact button functionality
    randomFactBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * ldFacts.length);
        const fact = ldFacts[randomIndex];
        
        // Create and show a toast notification
        showToast(fact);
    });

    // Milestones functionality
    const milestonesModal = document.getElementById('milestones-modal');
    const milestonesLink = document.getElementById('milestones-link');
    const milestoneTitle = document.getElementById('milestone-title');
    const milestoneDate = document.getElementById('milestone-date');
    const milestoneType = document.getElementById('milestone-type');
    const milestoneDescription = document.getElementById('milestone-description');
    const addMilestoneBtn = document.getElementById('add-milestone-btn');
    const timelineContainer = document.getElementById('timeline-container');
    const quickMilestoneBtn = document.getElementById('quick-milestone-btn');

    // Load milestones from local storage
    let milestones = JSON.parse(localStorage.getItem('loveMilestones')) || [];

    // Milestones link functionality
    milestonesLink.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveMenuItem(e.target);
        openModal('milestones-modal');
        
        // Focus the milestone title input for better UX
        if (milestoneTitle) {
            setTimeout(() => milestoneTitle.focus(), 300);
        }
        
        // Render milestones
        renderMilestones();
    });
    
    // Quick Milestone button functionality
    quickMilestoneBtn.addEventListener('click', () => {
        // Show milestones modal
        openModal('milestones-modal');
        
        // Update active menu
        setActiveMenuItem(document.getElementById('milestones-link'));
        
        // Focus the milestone title input
        if (milestoneTitle) {
            setTimeout(() => milestoneTitle.focus(), 300);
        }
    });
    
    // Add milestone functionality
    addMilestoneBtn.addEventListener('click', () => {
        const title = milestoneTitle.value.trim();
        const date = milestoneDate.value;
        const type = milestoneType.value;
        const description = milestoneDescription.value.trim();
        
        if (!title || !date || !description) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Add new milestone
        milestones.push({
            title,
            date,
            type,
            description
        });
        
        // Save to local storage
        localStorage.setItem('loveMilestones', JSON.stringify(milestones));
        
        // Clear form
        milestoneTitle.value = '';
        milestoneDate.value = '';
        milestoneDescription.value = '';
        
        // Update display
        renderMilestones();
        
        // Show success message
        alert('Milestone added successfully!');
    });
    
    // Function to render milestones timeline
    function renderMilestones() {
        if (milestones.length === 0) {
            timelineContainer.innerHTML = '<div class="no-milestones-message">Add your first milestone to start your journey timeline</div>';
            return;
        }
        
        // Sort milestones by date (oldest first for timeline)
        milestones.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Clear container
        timelineContainer.innerHTML = '';
        
        // Add milestones
        milestones.forEach((milestone, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            
            const formattedDate = new Date(milestone.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            timelineItem.innerHTML = `
                <div class="milestone-date">${formattedDate}</div>
                <div class="milestone-title">${milestone.title}</div>
                <div class="milestone-badge ${milestone.type}">${milestone.type}</div>
                <div class="milestone-description">${milestone.description}</div>
                <button class="delete-milestone" data-index="${index}">Delete</button>
            `;
            
            timelineContainer.appendChild(timelineItem);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-milestone').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                milestones.splice(index, 1);
                localStorage.setItem('loveMilestones', JSON.stringify(milestones));
                renderMilestones();
            });
        });
    }
    
    // Photo Gallery functionality
    const galleryModal = document.getElementById('gallery-modal');
    const galleryLink = document.getElementById('gallery-link');
    const photoUpload = document.getElementById('photo-upload');
    const previewImage = document.getElementById('preview-image');
    const photoCaption = document.getElementById('photo-caption');
    const photoDate = document.getElementById('photo-date');
    const addPhotoBtn = document.getElementById('add-photo-btn');
    const galleryGrid = document.getElementById('gallery-grid');
    const quickPhotoBtn = document.getElementById('quick-photo-btn');
    
    // Load photos from local storage
    let photos = JSON.parse(localStorage.getItem('lovePhotos')) || [];
    
    // Gallery link functionality
    galleryLink.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveMenuItem(e.target);
        openModal('gallery-modal');
        
        // Render gallery
        renderGallery();
    });
    
    // Quick Photo button functionality
    quickPhotoBtn.addEventListener('click', () => {
        // Show gallery modal
        openModal('gallery-modal');
        
        // Update active menu
        setActiveMenuItem(document.getElementById('gallery-link'));
        
        // Focus the photo upload
        if (photoUpload) {
            setTimeout(() => photoUpload.focus(), 300);
        }
    });
    
    // Photo upload preview
    photoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
                document.querySelector('.upload-placeholder').style.display = 'none';
                addPhotoBtn.disabled = false; // Enable the button only when a photo is selected
            };
            reader.readAsDataURL(file);
        } else {
            // If no file is selected, disable the button
            addPhotoBtn.disabled = true;
            previewImage.style.display = 'none';
            document.querySelector('.upload-placeholder').style.display = 'flex';
        }
    });
    
    // Add photo functionality
    addPhotoBtn.addEventListener('click', () => {
        if (!previewImage.src || previewImage.style.display === 'none') {
            alert('Please select a photo');
            return;
        }
        
        const caption = photoCaption.value.trim() || 'Our Photo';
        const date = photoDate.value || new Date().toISOString().split('T')[0];
        
        // Add new photo
        photos.push({
            src: previewImage.src,
            caption,
            date
        });
        
        // Save to local storage
        localStorage.setItem('lovePhotos', JSON.stringify(photos));
        
        // Clear form
        photoUpload.value = '';
        previewImage.src = '';
        previewImage.style.display = 'none';
        document.querySelector('.upload-placeholder').style.display = 'flex';
        photoCaption.value = '';
        photoDate.value = '';
        addPhotoBtn.disabled = true;
        
        // Update display
        renderGallery();
        
        // Show success message
        alert('Photo added successfully!');
    });
    
    // Function to render gallery
    function renderGallery() {
        if (photos.length === 0) {
            galleryGrid.innerHTML = '<div class="no-photos-message">Add your first photo to start your gallery</div>';
            return;
        }
        
        // Sort photos by date (newest first)
        photos.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Clear container
        galleryGrid.innerHTML = '';
        
        // Add photos
        photos.forEach((photo, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            
            const formattedDate = new Date(photo.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            
            galleryItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.caption}" class="gallery-image" data-index="${index}">
                <div class="gallery-info">
                    <div class="gallery-caption">${photo.caption}</div>
                    <div class="gallery-date">${formattedDate}</div>
                    <button class="delete-photo" data-index="${index}">Delete</button>
                </div>
            `;
            
            galleryGrid.appendChild(galleryItem);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-photo').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                photos.splice(index, 1);
                localStorage.setItem('lovePhotos', JSON.stringify(photos));
                renderGallery();
            });
        });
        
        // Add event listeners to images for lightbox
        document.querySelectorAll('.gallery-image').forEach(img => {
            img.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                openLightbox(photos[index]);
            });
        });
    }
    
    // Lightbox functionality
    function openLightbox(photo) {
        // Create lightbox if it doesn't exist
        let lightbox = document.querySelector('.lightbox');
        if (!lightbox) {
            lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `
                <span class="lightbox-close">&times;</span>
                <img class="lightbox-image">
                <div class="lightbox-caption"></div>
            `;
            document.body.appendChild(lightbox);
            
            // Add event listener to close button
            lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
            
            // Close lightbox when clicking outside the image
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.classList.remove('active');
                }
            });
        }
        
        // Set content and show lightbox
        lightbox.querySelector('.lightbox-image').src = photo.src;
        lightbox.querySelector('.lightbox-caption').textContent = photo.caption;
        lightbox.classList.add('active');
    }
    
    // Render milestones and gallery on initial load
    renderMilestones();
    renderGallery();

    // Function to display toast notifications
    function showToast(message) {
        // Remove any existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">💭</span>
                <p>${message}</p>
            </div>
            <button class="toast-close">&times;</button>
        `;
        
        // Add to DOM
        document.body.appendChild(toast);
        
        // Show toast with animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Auto dismiss after 8 seconds
        const autoDismiss = setTimeout(() => {
            dismissToast(toast);
        }, 8000);
        
        // Close button handler
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoDismiss);
            dismissToast(toast);
        });
    }

    // Function to dismiss toast with animation
    function dismissToast(toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }

    // Dashboard controls functionality
    const dashboard = document.querySelector('.relationship-dashboard');
    const toggleDashboardBtn = document.getElementById('toggle-dashboard');
    const refreshDashboardBtn = document.getElementById('refresh-dashboard');
    const daysTogetherElement = document.getElementById('days-together');
    const reasonsCountElement = document.getElementById('reasons-count');
    const nextMeetingCountdownElement = document.getElementById('next-meeting-countdown');
    const memoriesCountElement = document.getElementById('memories-count');
    
    // Check for saved dashboard visibility preference
    const dashboardVisible = localStorage.getItem('dashboardVisible') !== 'false';
    if (!dashboardVisible) {
        dashboard.style.display = 'none';
        toggleDashboardBtn.textContent = 'Show';
    }
    
    // Toggle dashboard visibility
    toggleDashboardBtn.addEventListener('click', () => {
        const isVisible = dashboard.style.display !== 'none';
        dashboard.style.display = isVisible ? 'none' : 'block';
        toggleDashboardBtn.textContent = isVisible ? 'Show' : 'Hide';
        localStorage.setItem('dashboardVisible', !isVisible);
    });
    
    // Refresh dashboard stats
    function updateDashboardStats() {
        // Update days together
        const startDate = localStorage.getItem('relationshipStartDate');
        if (startDate) {
            const start = new Date(startDate);
            const today = new Date();
            const diffTime = Math.abs(today - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            daysTogetherElement.textContent = diffDays;
        } else {
            daysTogetherElement.textContent = 'Set date';
        }
        
        // Update reasons count
        reasonsCountElement.textContent = reasons.length;
        
        // Update next meeting countdown
        if (nextMeetingDate) {
            const now = new Date();
            const meeting = new Date(nextMeetingDate);
            const diffTime = Math.abs(meeting - now);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            nextMeetingCountdownElement.textContent = meeting > now ? diffDays : 'Set date';
        } else {
            nextMeetingCountdownElement.textContent = 'Set date';
        }
        
        // Update memories count
        if (typeof memories !== 'undefined') {
            memoriesCountElement.textContent = memories.length;
        } else {
            memoriesCountElement.textContent = '0';
        }
    }
    
    // Initial dashboard update
    updateDashboardStats();
    
    // Refresh dashboard button
    refreshDashboardBtn.addEventListener('click', updateDashboardStats);

    // Function to show secret modal
    function showSecretModal() {
        // Reset animation by removing and re-adding elements
        const floatingElements = document.querySelector('.floating-elements');
        const originalHTML = floatingElements.innerHTML;
        floatingElements.innerHTML = '';
        
        // Trigger reflow
        void floatingElements.offsetWidth;
        
        // Add elements back
        floatingElements.innerHTML = originalHTML;
        
        // Show modal
        secretModal.classList.add('active');
        
        // Set continuous animation cycle
        startHeartAnimationLoop();
    }
    
    // Function to create continuous animation of hearts
    function startHeartAnimationLoop() {
        if (!secretModal.classList.contains('active')) return;
        
        const hearts = document.querySelectorAll('.floating-elements .heart, .floating-elements .kiss');
        hearts.forEach((heart, index) => {
            // Reset animation
            heart.style.animation = 'none';
            void heart.offsetWidth; // Trigger reflow
            
            // Randomize position and delay
            const topPos = Math.random() * 90 + 5; // 5% to 95%
            const delay = Math.random() * 5; // 0 to 5s delay
            const duration = 5 + Math.random() * 5; // 5 to 10s duration
            const fromLeft = Math.random() > 0.5; // 50% chance to start from left or right
            
            heart.style.top = `${topPos}%`;
            
            if (fromLeft) {
                heart.style.left = '-5%';
                heart.style.right = 'auto';
                heart.style.animation = `float-across ${duration}s linear ${delay}s forwards`;
            } else {
                heart.style.right = '-5%';
                heart.style.left = 'auto';
                heart.style.animation = `float-across ${duration}s linear ${delay}s forwards reverse`;
            }
        });
        
        // Schedule next animation cycle
        setTimeout(startHeartAnimationLoop, 5000);
    }

    // Function to close all modals
    function closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
    }

    // Function to open a specific modal
    function openModal(modalId) {
        closeAllModals();
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    }

    // Update close button event listeners
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });

    // Add event listener for escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Update menu item click handlers
    document.querySelectorAll('.menu li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.id.replace('-link', '-modal');
            openModal(modalId);
            setActiveMenuItem(link);
        });
    });

    // Update quick action button handlers
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.id.replace('-btn', '-modal');
            openModal(modalId);
        });
    });

    // Function to show funny modal
    function showFunnyModal() {
        // Reset animation by removing and re-adding elements
        const floatingElements = document.querySelector('#funny-modal .floating-elements');
        const originalHTML = floatingElements.innerHTML;
        floatingElements.innerHTML = '';
        
        // Trigger reflow
        void floatingElements.offsetWidth;
        
        // Add elements back
        floatingElements.innerHTML = originalHTML;
        
        // Show modal
        document.getElementById('funny-modal').classList.add('active');
        
        // Set continuous animation cycle
        startFunnyAnimationLoop();
    }
    
    // Function to create continuous animation of laughing emojis
    function startFunnyAnimationLoop() {
        if (!document.getElementById('funny-modal').classList.contains('active')) return;
        
        const emojis = document.querySelectorAll('#funny-modal .floating-elements .laugh, #funny-modal .floating-elements .joy');
        emojis.forEach((emoji, index) => {
            // Reset animation
            emoji.style.animation = 'none';
            void emoji.offsetWidth; // Trigger reflow
            
            // Randomize position and delay
            const topPos = Math.random() * 90 + 5; // 5% to 95%
            const delay = Math.random() * 5; // 0 to 5s delay
            const duration = 5 + Math.random() * 5; // 5 to 10s duration
            const fromLeft = Math.random() > 0.5; // 50% chance to start from left or right
            
            emoji.style.top = `${topPos}%`;
            
            if (fromLeft) {
                emoji.style.left = '-5%';
                emoji.style.right = 'auto';
                emoji.style.animation = `float-across ${duration}s linear ${delay}s forwards`;
            } else {
                emoji.style.right = '-5%';
                emoji.style.left = 'auto';
                emoji.style.animation = `float-across ${duration}s linear ${delay}s forwards reverse`;
            }
        });
        
        // Schedule next animation cycle
        setTimeout(startFunnyAnimationLoop, 5000);
    }
}); 