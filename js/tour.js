function readyImg() {
    //dummy
}

var harryPotterTourSrc = {
    KingsCrossStation: "../img/harryPotterTour/harryPotterTour_KingsCrossStation.jpg",
    LeadenhallMarket: "../img/harryPotterTour/harryPotterTour_LeadenhallMarket.jpg",
    LondonMillenniumFootbridge: "../img/harryPotterTour/harryPotterTour_LondonMillenniumFootbridge.jpg",
    HarryPotterStudio: "../img/harryPotterTour/harryPotterTour_HarryPotterStudio.jpg"
};

var harryPotterTourExp = {
    KingsCrossStation: "King's Cross station is a train station in London, England. The main terminal for Muggle trains, students of Hogwarts School of Witchcraft and Wizardry board the Hogwarts Express from Platform 9 3/4 at 11:00 a.m. on September 1 each year. To enter Platforms 9 and 3/4, you must go straight through the fence wall between Platforms 9 and 10.",
    LeadenhallMarket: "It was used to represent the area of London near the Leaky Cauldron and Diagon Alley in the film Harry Potter and the Philosopher's Stone (2001)",
    LondonMillenniumFootbridge: "This bridge appears in the opening part of the Harry Potter series movie Harry Potter and the Half-Blood Prince and is destroyed by Death Eaters",
    HarryPotterStudio: "The Making of Harry Potter is a walkthrough exhibition and studio tour in Leavesden, Hertfordshire, UK, owned by Warner Bros. and operated by their Studio Tours division. It is located within Warner Bros. Studios, Leavesden, in Watford, in southwest Hertfordshire, and houses a permanent exhibition of authentic costumes, props and sets utilised in the production of the Harry Potter films, as well as behind-the-scenes production of visual effects. The tour is contained in Soundstages J and K, which were specially built for the attraction, and is separate from the studio's actual production facilities."
};

var historyTourSrc = {
    WestminsterAbbey: "../img/historyTour/historyTour_WestminsterAbbey.jpg",
    BuckinghamPalace: "../img/historyTour/historyTour_BuckinghamPalace.jpg",
    AfternoonTea: "../img/historyTour/historyTour_AfternoonTea.jpg",
    LondonEye: "../img/historyTour/historyTour_LondonEye.jpg",
    LondonTower: "../img/historyTour/historyTour_LondonTower.jpg",
    CamdenMarket: "../img/historyTour/historyTour_CamdenMarket.jpg"
};

var historyTourExp = {
    WestminsterAbbey: "Westminster Abbey is a Church of England church located in Westminster, London, England. St.Peter's Monastery Church. Royal ceremonies such as coronation ceremonies are held here, and many successive kings, queens, and politicians are buried on the inner walls and floors.",
    BuckinghamPalace: "Buckingham Palace is a palace in London, England. It is famous for being able to see the changing ceremony of the royal guards who are in charge of the perimeter guard. In the palace front square stands the Victoria Memorial, beyond which The Mall, which leads to St. James' Park and Trafalgar Square, is located along a lush sycamore tree line.",
    AfternoonTea: "Afternoon Tea is a tea drinking custom that originated in England, and is a tea party where light meals and sweets are eaten with black tea around 4-5 pm.Light snacks and sweets are served with the afternoon tea.Traditionally, light snacks are served with cucumber sandwiches, egg salads, smoked salmon, cheese, and small crustless sandwiches with roast beef.",
    LondonEye: "London Eye is a Ferris wheel that exists in London, England.It is located in the Jubilee Gardens on the South Bank (Lambeth) along the River Thames. The adjacent site is County Hall, facing the Ministry of Defence located on the opposite bank in Westminster.",
    LondonTower: "London Toweris a medieval fortress built in the East End on the banks of the River Thames in London, England. Officially called Her Majesty's Palace and Fortress in the Tower of London, it is still used today as a storehouse for ceremonial weapons and as a place of worship.In London, simply calling it the tower refers to this place.The Cullinan, one of the world's largest cut diamonds, is stored here.",
    CamdenMarket: "Camden Market is a market held in Camden Town, London. It consists of several large markets. Small local food markets have been established since the early 20th century. There are mainly clothes, souvenirs and handicrafts. There are also many furniture, cosmetics and stalls."
};

var natureTourSrc = {
    Stonehenge: "../img/natureTour/natureTour_Stonehenge.jpg",
    GiantsCauseway: "../img/natureTour/natureTour_GiantsCauseway.jpg",
    HydePark: "../img/natureTour/natureTour_HydePark.jpg",
    BirlingGapAndTheSevenSisters: "../img/natureTour/natureTour_BirlingGapAndTheSevenSisters.jpg",
    LochNess: "../img/natureTour/natureTour_LochNess.jpg",
    TheOrkneyIslands: "../img/natureTour/natureTour_TheOrkneyIslands.jpg"
};

var natureTourExp = {
    Stonehenge: "A megalithic structure that suddenly appears in the plains of Salisbury in southern England. Stonehenge is believed to have been built over three periods, around 3000 B.C. to 1500 B.C.",
    GiantsCauseway: "Giant’s Causeway is an area of ​​40,000 stone pillars formed by volcanic activity in Northern Ireland, England. It lies on the coastline 2 km north of Bushmills, County Antrim. It was declared a World Heritage Site by UNESCO in 1986 and a nature reserve the following year by the Department of the Environment for Northern Ireland.",
    HydePark: "Hyde Park is a park located in central London from Westminster to Kensington. One of eight Royal Parks in London. With a total area of 142 hectares(350 acres), and it was the site of the 1851 London World’s Fair, the world’s first universal exhibition.",
    BirlingGapAndTheSevenSisters: "Birling Gap and the Seven Sisters are sea cliffs of Cretaceous chalk in East Sussex, southern England. The name derives from the appearance of white cliffs formed by scraping away gently undulating hills.",
    LochNess: "Loch Ness is the largest freshwater loch (lake) in the United Kingdom, located in the Highlands of northern Scotland. It has been said that there is an unidentified animal called Nessie in Loch Ness.Therefore, there are many tourists such as occult clubs, and there are many videos and photographs that claim to show Nessie.",
    TheOrkneyIslands: "The Neolithic Center of the Orkney Islands is a UNESCO World Heritage Site in Scotland, United Kingdom. The oldest surviving stone dwellings in northern Europe are those at Knap of Howar on Papa Westray, dating from around 3500 to 3100 BC."
};

function changeView(tour, place, changeNum) {
    var img = document.getElementById("main-content-schedule-left-imgArea" + changeNum);
    var exp = document.getElementById("main-content-schedule-right-expArea" + changeNum);
    var newImg;
    var newExp;

    switch (tour) {
        case "harry": newImg = harryPotterTourSrc[place]; break;
        case "history": newImg = historyTourSrc[place]; break;
        case "nature": newImg = natureTourSrc[place]; break;
    }

    switch (tour) {
        case "harry": newExp = harryPotterTourExp[place]; break;
        case "history": newExp = historyTourExp[place]; break;
        case "nature": newExp = natureTourExp[place]; break;
    }

    img.src = newImg;
    exp.textContent = newExp;
}